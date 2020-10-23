import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import Banner from '../components/banner/banner'
import styles from './about.module.css'

const About = () => {

  const welcomeArticle = {
    title: "Welcome to our workshop",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis vehicula rutrum. In ipsum ligula, pulvinar et massa ac, semper pharetra mi. Duis ultrices convallis nunc sit amet pellentesque. Nullam at risus ultricies, consequat dolor eget, egestas orci. Aliquam fringilla massa ac tortor hendrerit cursus. Duis feugiat massa augue, efficitur maximus libero commodo ut. Nam finibus placerat elit id suscipit. Nulla convallis nunc est, vel venenatis massa laoreet vehicula. Proin ultricies mauris id tortor luctus, vel elementum purus condimentum. Nam mauris mauris, pretium ac aliquet vel, consectetur et nisi. Proin nulla enim, aliquam at lorem vel, mollis rutrum nibh. Donec id vehicula nunc, in pellentesque nibh. Maecenas consequat mi id tincidunt posuere. Sed facilisis neque et mollis mattis. Donec ac enim ipsum. Pellentesque egestas arcu eu lacus malesuada, vestibulum viverra dolor semper. "
}

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <Banner type="video" src="/images/video_temp.mp4" />
        
        <article className={`${styles.welcomeArticle} ${styles.art}`}>
          <div className={styles.artTitle}>
            <h1>{welcomeArticle.title}</h1>
          </div>
          <div className={styles.artText}>              
            <p>{welcomeArticle.text}</p>
          </div>
        </article>
        <div className={styles.aboutUs}></div>

    </Layout>
  )
}

export default About;
