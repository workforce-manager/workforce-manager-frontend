import styles from "./HeroSection.module.css";
import { useNavigate } from "@tanstack/react-router";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>
        Workforce Manager
      </h1>
      <h2 className={styles.heroSubtitle}>
        Efficient Personnel Management for Modern Companies
      </h2>
      <p className={styles.heroDescription}>
        Streamline your workforce operations with our
        comprehensive management platform. Track employees,
        analyze performance, and optimize your team's productivity.
      </p>
      <div className={styles.heroButtons}>
        <button 
          className={styles.primaryButton}
          onClick={() => navigate({ to: "/auth/login" })}
        >
          Get Started
        </button>
        <button 
          className={styles.secondaryButton}
          onClick={() => navigate({ to: "/features" })}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
