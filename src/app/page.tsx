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
             Vipassa Bahuuddeshiy Sevabhavi Sanstha
             are non-profit organizations dedicated to achieving gender equality and 
             elevating women's social, economic, Educational and political status. They typically focus on providing skill development, 
             financial literacy, healthcare, and livelihood support to marginalized 
             women to help them achieve independence.
            </p> 
            <p>
              Key Areas of FocusEconomic Independence:
              Providing vocational training, microloans, and business development to help women earn a 
              sustainable income and achieve financial autonomy. 
              Education & Skill Development: Teaching practical skills like digital literacy, self-defense, and trades 
              (e.g., professional driving, tailoring) to break gender stereotypes and open up new career paths. 
              Healthcare & Safety: Offering health clinics, nutritional support, legal aid, and counseling to victims of abuse. 
              Community Building: Forming Self-Help Groups (SHGs) and women's cooperatives to foster leadership and 
              provide a support network
            </p>
            <p>
              We want to provide free computer education to poor children and women.
              I also want to provide free training to do various businesses.
              So that they can get computer jobs as well as they can 
              start their own business.
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
        <div className={styles.impactStatement}>
            <p className={styles.brandName}>
           Samword Technology Pvt. Ltd. 
          </p>
           <br />
    
          </div>
      </section>

    </main>
  );
}
