import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to VIPASSA</h1>
          <h2>Discover India's Heritage, Support Communities</h2>
          <p>
            VIPASSA BAHUDDESHIY SEVABHAVI SANSTHA is dedicated to helping foreigners
            explore India's rich historical and cultural heritage while actively
            contributing to social development and welfare initiatives.
          </p>
          <Link href="/tours" className={styles.ctaButton}>
            Explore Our Tours
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>About Our Mission</h2>
            <p>
              We believe that travel can be a powerful tool for cultural exchange and
              social impact. Our organization brings together passionate individuals who
              want to explore India's incredible historical monuments while contributing
              to the well-being of local communities.
            </p>
            <p>
              Every tour is carefully designed to provide authentic experiences and ensure
              that proceeds directly benefit our social welfare programs in education,
              healthcare, women empowerment, and environmental conservation.
            </p>
          </div>
          <div className={styles.aboutStats}>
            <div className={styles.statBox}>
              <h3>100+</h3>
              <p>Travelers Served</p>
            </div>
            <div className={styles.statBox}>
              <h3>50+</h3>
              <p>Villages Impacted</p>
            </div>
            <div className={styles.statBox}>
              <h3>50+</h3>
              <p>Children Educated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChoose}>
        <h2>Why Choose VIPASSA?</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🏛️</div>
            <h3>Expert Guided Tours</h3>
            <p>Experienced guides with deep knowledge of India's history and culture</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>❤️</div>
            <h3>Social Impact</h3>
            <p>100% of proceeds go directly to communities through our welfare programs</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🌍</div>
            <h3>Authentic Experiences</h3>
            <p>Connect with local communities and experience India's true heritage</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🤝</div>
            <h3>Community Engagement</h3>
            <p>Participate in our social initiatives and make a real difference</p>
          </div>
        </div>
        
      </section>

      

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Make a Difference?</h2>
        <p>Join us on a meaningful journey through India's historical landmarks</p>
        <Link href="/tours" className={styles.ctaButtonLarge}>
          View All Tours
        </Link>
      </section>
    </main>
  );
}
