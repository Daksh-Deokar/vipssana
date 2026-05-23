import styles from './tours.module.css';

const tours = [
  {
    id: 1,
    title: 'Bodh Gaya, ',
    location: 'Bihar',
    duration: '4 Days',
    description: ' The holiest site in Buddhism, where Siddhartha Gautama attained enlightenment beneath the Bodhi tree. It features the UNESCO World Heritage Mahabodhi Temple and an 80-foot Buddha statue.',
    highlights: ['Bodh Gaya', 'Mahabodhi Temple', 'bodhi tree', 'Great Buddha Statue'],
  },
  {
    id: 2,
    title: 'Nalanda',
    location: 'Nalanda, Bihar',
    duration: '3 Days',
    description: 'Explore the ancient seat of learning and spiritual significance. Visit the ruins of the historic Nalanda University and engage with our community development programs.',
    highlights: ['Nalanda mahavihara  ', 'Xuanzang Memorial Hall', 'Nava Nalanda mahavihara', 'Nalanda Archaeological Museum '],
  },
  {
    id: 3,
    title: 'Ajanta Caves &Ellora Caves',
    location: 'Maharashtra',
    duration: '3 Days',
    description: 'Explore the ancient rock-cut caves and their intricate sculptures. Engage with our education initiatives in rural villages along the way.',
    highlights: ['Ajanta Caves', 'Ellora Caves', 'Historical significance', 'Local community involvement'],
  },
  {
    id: 4,
    title: 'Dharamshala',
    location:' Himachal Pradesh',
    duration: '4 Days',
    description: 'Experience the serene beauty of the Himalayas and Tibetan culture. Visit the Dalai Lama’s residence and support our healthcare initiatives in nearby communities.',
    highlights: ['Dharamshala', 'Dalai Lama’s residence', 'Tibetan culture', 'Himalayan landscapes'],
  },
];

const programs = [
  {
    icon: '🎓',
    title: 'Education for Underprivileged',
    description: 'Providing quality education to children from economically backward backgrounds in rural areas.',
  },
  {
    icon: '🏥',
    title: 'Healthcare Initiatives',
    description: 'Free medical camps and awareness programs for communities in remote areas.',
  },
  {
    icon: '👩‍💼',
    title: 'Women Empowerment',
    description: 'Skills training and livelihood programs to support women in rural communities.',
  },
  {
    icon: '🌱',
    title: 'Environmental Conservation',
    description: 'Promoting sustainable practices and protecting India\'s natural heritage.',
  },
];

export default function Tours() {
  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Explore India's Rich History</h1>
          <p>Travel with purpose. Every journey supports our social welfare initiatives.</p>
        </div>
      </section>

      {/* Featured Tours */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Featured Tours</h2>
        <div className={styles.toursGrid}>
          {tours.map((tour) => (
            <div key={tour.id} className={styles.tourCard}>
              <div className={styles.tourHeader}>
                <h3>{tour.title}</h3>
                <p className={styles.location}>📍 {tour.location}</p>
              </div>
              <p className={styles.description}>{tour.description}</p>
              <div className={styles.highlights}>
                <p className={styles.highlightsTitle}>Highlights:</p>
                <ul>
                  {tour.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.tourFooter}>
                <span className={styles.duration}>⏱️ {tour.duration}</span>
              </div>
              <button className={styles.bookBtn}>Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Social Programs */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Social Work Programs</h2>
        <p className={styles.programDescription}>
          When you travel with us, you're contributing to meaningful social change. Here's where your support goes:
        </p>
        <div className={styles.programsGrid}>
          {programs.map((program, idx) => (
            <div key={idx} className={styles.programCard}>
              <div className={styles.programIcon}>{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className={styles.impact}>
        <h2>Our Impact</h2>
        <div className={styles.impactStats}>
          <div className={styles.stat}>
            <h3>500+</h3>
            <p>Children Educated</p>
          </div>
          <div className={styles.stat}>
            <h3>50+</h3>
            <p>Villages Supported</p>
          </div>
          <div className={styles.stat}>
            <h3>100+</h3>
            <p>Lives Touched</p>
          </div>
          <div className={styles.stat}>
            <h3>100%</h3>
            <p>Funds to Communities</p>
          </div>
        </div>
      </section>
    </main>
  );
}
