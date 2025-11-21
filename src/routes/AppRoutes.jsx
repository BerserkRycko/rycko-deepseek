
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/shared/Header/Header'
import Footer from '../components/shared/Footer/Footer'
import Home from '../pages/Home/Home'
import Blog from '../pages/Blog/Blog'
import ArticleDetail from '../pages/Blog/ArticleDetail'
import Gallery from '../pages/Gallery/Gallery'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import PrivacyPolicy from '../pages/PrivatePolicy/PrivatePolicy'
import CookiesPolicy from '../pages/CoockiePolicy/CoockiePolicy'

const AppRouter = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<ArticleDetail />} />
            <Route path="/gallery" element={<Gallery />} /> {/* Nueva ruta */}
            // Asegúrate de tener esta ruta
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/private-policy' element={<PrivacyPolicy />} />
            <Route path='/cookies-policy' element={<CookiesPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default AppRouter