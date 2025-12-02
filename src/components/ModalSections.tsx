import { CollaboratorModal } from "./CollaboratorModal";
import { HireAgencyModal } from "./HireAgencyModal";
import { FreelancerOSModal } from "./FreelancerOSModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ModalSections = () => {
  const { ref: collabRef, isVisible: collabVisible } = useScrollAnimation();
  const { ref: hireRef, isVisible: hireVisible } = useScrollAnimation();
  const { ref: osRef, isVisible: osVisible } = useScrollAnimation();

  return (
    <>
      {/* Collaborator Section */}
      <section id="collaborator" className="py-12 sm:py-20 bg-background">
        <div
          ref={collabRef as any}
          className={`container px-4 transition-all duration-1000 ${
            collabVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-foreground">Become a Collaborator</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              Join our network of talented professionals. Share your skills and collaborate on exciting projects.
            </p>
            <CollaboratorModal />
          </div>
        </div>
      </section>

      {/* Hire Agency Section */}
      <section id="hire-agency" className="py-12 sm:py-20 bg-accent/10">
        <div
          ref={hireRef as any}
          className={`container px-4 transition-all duration-1000 ${
            hireVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-foreground">Hire Our Agency</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              Outsource your client projects to us. We deliver quality work on time, every time.
            </p>
            <HireAgencyModal />
          </div>
        </div>
      </section>

      {/* Freelancer OS Section */}
      <section id="freelancer-os" className="py-12 sm:py-20 bg-background">
        <div
          ref={osRef as any}
          className={`container px-4 transition-all duration-1000 ${
            osVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-foreground">Join Freelancer OS</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              AD Web Comic Agency's premium freelancer growth system - ₹999/month
            </p>
            <FreelancerOSModal />
          </div>
        </div>
      </section>
    </>
  );
};

export default ModalSections;
