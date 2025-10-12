import styles from "./LandingPage.module.css";
import { HeroSection } from "./hero-section/HeroSection";

export function LandingPage() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <HeroSection />
      </section>
      
      <section className={styles.featuresSection}>
      </section>
      
      <section className={styles.authSection}>
      </section>
    </div>
  );
}
