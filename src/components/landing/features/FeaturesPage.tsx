import { ArrowLeft } from "lucide-react";
import { features } from "./features.data";
import { Link } from "@tanstack/react-router";
import styles from "./FeaturesPage.module.css";

export function FeaturesPage() {
  return (
    <section className={styles.container}>
      <Link to="/" className={styles.floatingBackButton}>
        <ArrowLeft size={20} />
        Get Back
      </Link>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Powerful Tools for Your Business
        </h2>
        <p className={styles.subtitle}>
          Workforce Manager provides all the
          necessary functions for effective personnel management
        </p>
      </div>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>
                {feature.icon}
              </span>
            </div>
            <h3 className={styles.featureTitle}>
              {feature.title}
            </h3>
            <p className={styles.featureDescription}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
