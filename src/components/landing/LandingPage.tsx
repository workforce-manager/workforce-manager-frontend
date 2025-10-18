import styles from "./LandingPage.module.css";
import { HeroSection } from "./hero/HeroSection";
import { SocialProofSection } from "./social-proof/SocialProofSection";

export function LandingPage() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <HeroSection />
      </section>
      <section className={styles.socialProofSection}>
        <SocialProofSection />
      </section>
    </div>
  );
}
