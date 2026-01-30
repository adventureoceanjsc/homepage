import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../shared/LanguageSwitcher';
import DarkModeToggle from '../shared/DarkModeToggle';

const Header = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navItems = [
        { path: '/', label: t('nav.home') },
        { path: '/about', label: t('nav.about') },
        { path: '/services', label: t('nav.services') },
        { path: '/projects', label: t('nav.projects') },
        { path: '/blog', label: t('nav.news') },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm shadow-md'
                : 'bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm'
                } border-b border-gray-100 dark:border-gray-800 top-0`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to="/" className="absolute top-0 left-4 sm:left-6 lg:left-8 h-28 sm:h-32 z-50 flex items-start">
                            <div className="bg-white shadow-xl h-full border-b-4 border-secondary overflow-hidden flex items-center justify-center">
                                <img
                                    src="https://soga-ads.s3.ap-southeast-1.amazonaws.com/adventureocean-media/Logo-AdventureOcean.jpg"
                                    alt="Adventure Ocean Logo"
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        </Link>

                        <div className="flex-shrink-0 w-48 hidden md:block"></div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-6 ml-auto">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`text-sm font-medium transition-colors ${isActive(item.path)
                                        ? 'text-primary dark:text-blue-300 font-semibold'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-300'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="px-5 py-2.5 bg-primary hover:bg-blue-800 text-white text-sm font-medium rounded transition-colors shadow-lg shadow-blue-900/20"
                            >
                                {t('nav.contact')}
                            </Link>
                            <LanguageSwitcher />
                            <DarkModeToggle />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-2 ml-auto">
                            <LanguageSwitcher />
                            <DarkModeToggle />
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="mobile-menu-toggle text-gray-600 dark:text-gray-300 hover:text-primary p-2"
                            >
                                <span className="material-icons">menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-menu fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
                    <div
                        className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-surface-dark shadow-xl p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mobile-menu-close absolute top-4 right-4 text-gray-600 dark:text-gray-300"
                        >
                            <span className="material-icons">close</span>
                        </button>
                        <nav className="mt-12 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`block transition-colors ${isActive(item.path)
                                        ? 'text-primary font-semibold'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="block text-primary font-medium hover:text-blue-800 transition-colors pt-4 border-t border-gray-200 dark:border-gray-700"
                            >
                                {t('nav.contact')}
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
