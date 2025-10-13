import styles from "./LandingPage.module.css";
import { HeroSection } from "./hero/HeroSection";

export function LandingPage() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <HeroSection />
      </section>

      <section className={styles.authSection}>
      </section>
    </div>
  );
}
