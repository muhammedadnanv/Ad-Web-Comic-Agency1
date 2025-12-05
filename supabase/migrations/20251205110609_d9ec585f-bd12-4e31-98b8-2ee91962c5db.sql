-- Create referrals table to store referrer information
CREATE TABLE public.referrals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  referral_code TEXT NOT NULL UNIQUE,
  referrer_name TEXT NOT NULL,
  referrer_email TEXT NOT NULL,
  referrer_company TEXT,
  discount_percentage INTEGER NOT NULL DEFAULT 10,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Create referral_conversions table to track when referral links are used
CREATE TABLE public.referral_conversions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  referral_id UUID NOT NULL REFERENCES public.referrals(id) ON DELETE CASCADE,
  referred_name TEXT NOT NULL,
  referred_email TEXT NOT NULL,
  referred_company TEXT,
  referred_phone TEXT,
  project_details TEXT,
  discount_applied INTEGER NOT NULL,
  converted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'converted', 'cancelled'))
);

-- Create marketing_subscribers table for monthly email campaigns
CREATE TABLE public.marketing_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  company TEXT,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true,
  source TEXT DEFAULT 'referral'
);

-- Enable Row Level Security
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referral_conversions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marketing_subscribers ENABLE ROW LEVEL SECURITY;

-- Public read policy for referrals (to validate referral codes)
CREATE POLICY "Anyone can read active referrals" 
ON public.referrals 
FOR SELECT 
USING (is_active = true);

-- Public insert policy for referrals (anyone can become a referrer)
CREATE POLICY "Anyone can create referrals" 
ON public.referrals 
FOR INSERT 
WITH CHECK (true);

-- Public insert policy for conversions (anyone can submit via referral link)
CREATE POLICY "Anyone can create conversions" 
ON public.referral_conversions 
FOR INSERT 
WITH CHECK (true);

-- Public insert policy for marketing subscribers
CREATE POLICY "Anyone can subscribe to marketing" 
ON public.marketing_subscribers 
FOR INSERT 
WITH CHECK (true);

-- Create index for faster referral code lookups
CREATE INDEX idx_referrals_code ON public.referrals(referral_code);
CREATE INDEX idx_conversions_referral_id ON public.referral_conversions(referral_id);