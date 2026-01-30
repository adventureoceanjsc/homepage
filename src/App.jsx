import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import './i18n/config';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Scroll to top component
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return null;
}

function App() {
    return (
        <HelmetProvider>
            <ThemeProvider>
                <Router>
                    <ScrollToTop />
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </Layout>
                </Router>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
