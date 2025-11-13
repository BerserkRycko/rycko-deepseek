import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/shared/Header/Header'
import Footer from '../components/shared/Footer/Footer'
import Home from '../pages/Home/Home'
import Blog from '../pages/Blog/Blog'
import ArticleDetail from '../pages/Blog/ArticleDetail'

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default AppRouter