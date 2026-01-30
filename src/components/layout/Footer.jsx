import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-primary text-white border-t-4 border-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">

                            <div className="flex flex-col">
                                <span className="font-display font-bold text-lg tracking-wider uppercase leading-none">
                                    Adventure
                                </span>
                                <span className="font-sans font-light text-xs tracking-[0.2em] opacity-80 uppercase leading-none">
                                    Ocean JSC
                                </span>
                            </div>
                        </div>
                        <p className="text-blue-100 text-sm leading-relaxed mb-4">
                            {t('footer.description')}
                        </p>
                        <div className="flex space-x-4">
                            <a className="text-blue-200 hover:text-white transition-colors" href={t('footer.fanpage')} target="_blank" rel="noreferrer" aria-label="Facebook">
                                <span className="material-icons text-lg">facebook</span>
                            </a>
                            <a className="text-blue-200 hover:text-white transition-colors" href={t('footer.website')} target="_blank" rel="noreferrer" aria-label="Website">
                                <span className="material-icons text-lg">language</span>
                            </a>
                            {/* Replaced Email icon with Youtube as Email is in Contact col now, or keep Email? Prompt lists Youtube. */}
                            <a className="text-blue-200 hover:text-white transition-colors" href={t('footer.youtube')} target="_blank" rel="noreferrer" aria-label="Youtube">
                                <span className="material-icons text-lg">smart_display</span>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-4">{t('footer.navigation')}</h4>
                        <ul className="space-y-2 text-sm text-blue-100">
                            <li>
                                <Link className="hover:text-white hover:underline decoration-secondary underline-offset-4 transition-colors" to="/">
                                    {t('nav.home')}
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white hover:underline decoration-secondary underline-offset-4 transition-colors" to="/about">
                                    {t('nav.about')}
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white hover:underline decoration-secondary underline-offset-4 transition-colors" to="/services">
                                    {t('nav.services')}
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white hover:underline decoration-secondary underline-offset-4 transition-colors" to="/projects">
                                    {t('nav.projects')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-4">{t('nav.services')}</h4>
                        <ul className="space-y-2 text-sm text-blue-100">
                            <li>
                                <Link className="hover:text-white hover:underline decoration-secondary underline-offset-4 transition-colors" to="/services#realEstate">
                                    <span dangerouslySetInnerHTML={{ __html: t('servicesPage.items.realEstate.title') }}></span>
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white hover:underline decoration-secondary underline-offset-4 transition-colors" to="/services#highTech">
                                    <span dangerouslySetInnerHTML={{ __html: t('servicesPage.items.highTech.title') }}></span>
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white hover:underline decoration-secondary underline-offset-4 transition-colors" to="/services#infrastructure">
                                    <span dangerouslySetInnerHTML={{ __html: t('servicesPage.items.infrastructure.title') }}></span>
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white hover:underline decoration-secondary underline-offset-4 transition-colors" to="/services#consulting">
                                    <span dangerouslySetInnerHTML={{ __html: t('servicesPage.items.consulting.title') }}></span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="font-display font-bold text-lg mb-4">{t('footer.contact')}</h4>
                        <div className="space-y-4 text-sm text-blue-100">
                            {/* Address VI */}
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-white text-xs">{t('footer.viAddressLabel')}</span>
                                <span className="opacity-90">{t('footer.viAddress')}</span>
                            </div>



                            {/* Contact Details */}
                            <div className="pt-2 space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="material-icons text-sm text-secondary">phone</span>
                                    <span className="font-bold">{t('footer.hotline')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-icons text-sm text-secondary">email</span>
                                    <a href={`mailto:${t('footer.email')}`} className="hover:text-white transition-colors">{t('footer.email')}</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-icons text-sm text-secondary">language</span>
                                    <a href={t('footer.website')} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">adventureocean.vn</a>
                                </div>
                            </div>

                            {/* Social Links (Moved here for better visibility with contact info, or keep in Col 1?) -> Let's put Social Icons in Col 1 or keep distinct.
                               Request says "Mạng xã hội" section. The current layout has 4 cols.
                               Col 1: Brand
                               Col 2: Nav
                               Col 3: Services
                               Col 4: Contact
                               Maybe add Social to Col 1 or Col 4. 
                               The prompt separates "Contact" and "Social". 
                               I will add Social links to Col 1 as per original design but updated links.
                            */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-blue-900/50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300">
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-center md:text-left">
                        <span>{t('footer.copyright')}</span>
                        <span className="hidden md:inline mx-1 opacity-50">|</span>
                        <span>
                            {t('footer.designedByLabel')} <a href="https://vuottroi.vn" target="_blank" rel="noreferrer" className="font-bold hover:text-white transition-colors">SOGA JSC</a>
                        </span>
                    </div>
                    <div className="space-x-4 mt-2 md:mt-0">
                        <a className="hover:text-white transition-colors" href="#">
                            {t('footer.privacy')}
                        </a>
                        <a className="hover:text-white transition-colors" href="#">
                            {t('footer.terms')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
