import { useState } from "react";
import styles from "./SocialProofSection.module.css";
import { statsData, testimonialsData } from "./social-proof.data";

export function SocialProofSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className={styles.socialProofContent}>
      <h2 className={styles.sectionTitle}>
        Trusted Worldwide
      </h2>

      <div className={styles.carouselContainer}>
        {currentSlide === 0 ? (
          <div className={styles.statsGrid}>
            {statsData.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statNumber}>
                  {stat.number}
                </div>
                <div className={styles.statLabel}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.testimonials}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className={styles.testimonial}>
                <div className={styles.testimonialText}>
                  "{testimonial.text}"
                </div>
                <div className={styles.testimonialAuthor}>
                  {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.dotsContainer}>
        {[0, 1].map((index) => (
          <button
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
