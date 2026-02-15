import styles from './page.module.css'

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <h1 className={styles.h1}>Anthony Mattox</h1>
          <p className={styles.p}>
            I&rsquo;m an occasional artist, computer programmer, avid home cook,
            partner of{' '}
            <a href="http://friendsoftheweb.com">Friends of The Web</a> -
            building websites mostly for academic and research projects.
          </p>

          <p className={styles.p}>
            I co-host a podcast{' '}
            <a href="http://luckypaper.co">Lucky Paper Radio</a>, nominally
            about Magic the Gathering where we also talk about art, design,
            epistemology and community.
          </p>

          <p className={styles.p}>
            Find me on{' '}
            <a href="https://bsky.app/profile/anthony.luckypaper.co">Bluesky</a>{' '}
            or stuff I&rsquo;m cooking on{' '}
            <a href="https://www.instagram.com/ahmattox/">Instagram</a>.
          </p>
        </div>
      </div>
    </main>
  )
}
