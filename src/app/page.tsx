import '../../styles/main.css'

import HomeBanner from '../components/composables/Banner/HomeBanner'
import ArticleList from '../components/composables/Article/articleList'

const Home = () => {
  return (
    <div>
      <div className="home-page">
        <HomeBanner />
        <ArticleList />
      </div>
    </div>
  )
}

export default Home
