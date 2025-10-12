import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>
        Workforce Manager
      </h1>
      <h2 className={styles.heroSubtitle}>
        Efficient Personnel Management for Modern Companies
      </h2>
      <p className={styles.heroDescription}>
        Streamline your workforce operations with our comprehensive management platform. 
        Track employees, analyze performance, and optimize your team's productivity.
      </p>
      <div className={styles.heroButtons}>
        <button className={styles.primaryButton}>
          Get Started
        </button>
        <button className={styles.secondaryButton}>
          Learn More
        </button>
      </div>
    </div>
  );
}
