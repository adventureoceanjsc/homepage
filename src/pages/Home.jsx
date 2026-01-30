import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Adventure Ocean JSC - Real Estate & High-Tech Innovation</title>
                <meta name="description" content="Pioneering the dual ecosystem of Real Estate Development and High-Tech Innovation (Semiconductors & CNC) in Vietnam since 2003." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Coastal Skyline and Modern Architecture"
                        className="w-full h-full object-cover"
                        src="https://soga-ads.s3.ap-southeast-1.amazonaws.com/adventureocean-media/compressed-4K_01.jpeg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left mt-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            <span className="text-white text-xs font-bold tracking-widest uppercase">{t('hero.badge')}</span>
                        </div>

                        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-shadow">
                            {t('hero.title')} <br />
                            <span className="text-blue-200">{t('hero.subtitle')}</span>
                        </h1>

                        <p
                            className="text-xl md:text-2xl text-gray-100 font-light mb-10 max-w-2xl leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: t('hero.description') }}
                        />

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                to="/about"
                                className="px-8 py-3 bg-secondary hover:bg-red-700 text-white font-medium rounded shadow-lg shadow-red-900/20 transition-all transform hover:-translate-y-1"
                            >
                                {t('hero.cta1')}
                            </Link>
                            <Link
                                to="/services"
                                className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white font-medium rounded transition-all"
                            >
                                {t('hero.cta2')}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <span className="material-icons text-white/70 text-4xl">keyboard_arrow_down</span>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 bg-white dark:bg-background-dark relative overflow-hidden" id="story">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 dark:bg-surface-dark -z-10 skew-x-12 transform origin-top translate-x-32"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-px w-12 bg-secondary"></div>
                                <span className="text-secondary font-bold tracking-widest uppercase text-xs">{t('story.badge')}</span>
                            </div>

                            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
                                {t('story.title')}
                            </h2>

                            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
                                <p className="italic font-medium">{t('story.salutation')}</p>
                                <p dangerouslySetInnerHTML={{ __html: t('story.p1') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('story.p2') }} />
                                <p className="italic mt-4">{t('story.closing')}</p>
                                <p className="mt-2 text-primary font-bold">{t('story.signoff')}</p>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                                <p className="text-base font-bold text-primary dark:text-white uppercase">{t('story.signature')}</p>
                                <p className="text-sm text-secondary font-bold uppercase tracking-wider">{t('story.signatureTitle')}</p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                <img
                                    alt="Ocean and Technology Fusion"
                                    className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    src="https://soga-ads.s3.ap-southeast-1.amazonaws.com/adventureocean-media/anh-du-an-slide.jpeg"
                                />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>

                                <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-surface-dark/90 backdrop-blur p-6 rounded-lg shadow-lg max-w-xs border-l-4 border-secondary">
                                    <span className="material-icons text-secondary text-3xl mb-2">auto_graph</span>
                                    <p className="font-display text-xl font-bold text-primary dark:text-white mb-1">
                                        {t('story.yearsBadge')}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('story.yearsBadgeDesc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold font-display mb-2">{t('stats.years')}</div>
                            <div className="text-blue-200 text-sm uppercase tracking-wider">{t('stats.yearsLabel')}</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold font-display mb-2">{t('stats.projects')}</div>
                            <div className="text-blue-200 text-sm uppercase tracking-wider">{t('stats.projectsLabel')}</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold font-display mb-2">{t('stats.industries')}</div>
                            <div className="text-blue-200 text-sm uppercase tracking-wider">{t('stats.industriesLabel')}</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold font-display mb-2">{t('stats.clients')}</div>
                            <div className="text-blue-200 text-sm uppercase tracking-wider">{t('stats.clientsLabel')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Preview */}
            <section className="py-24 bg-surface-light dark:bg-surface-dark/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs">{t('home.servicesSection.badge')}</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white mt-2 mb-4">
                            {t('home.servicesSection.title')}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {t('home.servicesSection.description')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { key: 'realEstate', icon: 'domain', color: 'primary' },
                            { key: 'highTech', icon: 'memory', color: 'secondary' },
                            { key: 'infrastructure', icon: 'precision_manufacturing', color: 'primary' },
                            { key: 'consulting', icon: 'gavel', color: 'secondary' }
                        ].map((item, index) => {
                            const title = t(`servicesPage.items.${item.key}.title`);
                            const summary = t(`servicesPage.items.${item.key}.summary`);

                            return (
                                <div key={index} className={`bg-white dark:bg-background-dark p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-${item.color} group flex flex-col`}>
                                    <span className={`material-icons text-5xl text-${item.color} mb-6 group-hover:scale-110 transition-transform`}>{item.icon}</span>
                                    <h3
                                        className="text-lg font-bold text-gray-900 dark:text-white mb-3 min-h-[56px] flex items-center"
                                        dangerouslySetInnerHTML={{ __html: title }}
                                    ></h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1 line-clamp-4">
                                        {summary}
                                    </p>
                                    <Link
                                        to={`/services#${item.key}`}
                                        className={`text-${item.color} font-bold text-sm uppercase tracking-wider inline-flex items-center group-hover:translate-x-2 transition-transform mt-auto`}
                                    >
                                        {t('common.readMore')} <span className="material-icons text-sm ml-1">arrow_forward</span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/services"
                            className="inline-block px-8 py-3 bg-primary hover:bg-blue-800 text-white font-medium rounded shadow-lg transition-all"
                        >
                            {t('home.servicesSection.viewAll')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-24 bg-white dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs">{t('projects.featured.badge')}</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white mt-2 mb-4">
                            {t('projects.featured.title')}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {t('projects.featured.description')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                key: 'seaFlower',
                                category: "resort",
                                badges: [
                                    { key: "badge", type: "primary" },
                                    { text: "4", icon: "star", type: "accent" }
                                ],
                                image: "https://soga-ads.s3.ap-southeast-1.amazonaws.com/adventureocean-media/compressed-du-an-demo-1.jpeg",
                                stats: [
                                    { icon: "waves", key: "view" },
                                    { icon: "bed", key: "capacity" }
                                ]
                            },
                            {
                                key: 'songXanh',
                                category: "residential",
                                badges: [
                                    { key: "badge", type: "primary" }
                                ],
                                image: "https://soga-ads.s3.ap-southeast-1.amazonaws.com/adventureocean-media/compressed-du-an-demo2.jpeg",
                                stats: [
                                    { icon: "architecture", key: "style" },
                                    { icon: "home_work", key: "scale" }
                                ]
                            },
                            {
                                key: 'maiVang',
                                category: "residential",
                                badges: [
                                    { key: "badge", type: "primary" }
                                ],
                                image: "https://soga-ads.s3.ap-southeast-1.amazonaws.com/adventureocean-media/compressed-demo-vuon-mai.jpeg",
                                stats: [
                                    { icon: "park", key: "greenSpace" },
                                    { icon: "temple_buddhist", key: "concept" }
                                ]
                            },
                            {
                                key: 'sunrise',
                                category: "industrial",
                                badges: [
                                    { key: "badge", type: "primary" }
                                ],
                                image: "https://soga-ads.s3.ap-southeast-1.amazonaws.com/adventureocean-media/compressed-de-mo-sunrise.jpeg",
                                stats: [
                                    { icon: "factory", key: "scale" },
                                    { icon: "solar_power", key: "energy" }
                                ]
                            }
                        ].map((project, idx) => (
                            <div
                                key={idx}
                                className="group bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 flex flex-col"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                                        {project.badges.map((badge, idx) => {
                                            const badgeText = badge.key ? t(`projects.items.${project.key}.badge`) : badge.text;
                                            return (
                                                <span
                                                    key={idx}
                                                    className={`px-3 py-1 backdrop-blur text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm flex items-center ${badge.type === 'primary' ? 'bg-white/90 text-primary' : 'bg-secondary/90 text-white'
                                                        }`}
                                                >
                                                    {badgeText} {badge.icon && <span className="material-icons text-[10px] ml-1">{badge.icon}</span>}
                                                </span>
                                            )
                                        })}
                                    </div>
                                    <img
                                        alt={t(`projects.items.${project.key}.title`)}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        src={project.image}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-2 group-hover:text-secondary transition-colors">
                                        {t(`projects.items.${project.key}.title`)}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                                        {t(`projects.items.${project.key}.description`)}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mb-8 border-t border-b border-gray-100 dark:border-gray-800 py-4">
                                        {project.stats.map((stat, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <span className="material-icons text-secondary text-xl">{stat.icon}</span>
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-gray-400 uppercase">{t(`projectStats.${stat.key}`) || stat.key}</span>
                                                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{t(`projects.items.${project.key}.stats.${stat.key}`)}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-2">
                                        <Link
                                            to="/projects"
                                            className="w-full py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors uppercase text-xs font-bold tracking-widest rounded flex items-center justify-center gap-2 group-hover:border-secondary group-hover:text-secondary group-hover:hover:bg-secondary group-hover:hover:text-white"
                                        >
                                            {t('projects.viewProject')} <span className="material-icons text-sm ml-1">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}                            </div>
                    <div className="text-center mt-12">
                        <Link
                            to="/projects"
                            className="inline-block px-8 py-3 bg-secondary hover:bg-red-700 text-white font-medium rounded shadow-lg transition-all"
                        >
                            {t('projects.viewAll')}
                        </Link>
                    </div>
                </div>
            </section >

            {/* Testimonial Quote */}
            < section className="py-24 bg-primary text-white relative overflow-hidden" >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <span className="material-icons text-6xl text-white/20 mb-6">format_quote</span>
                    <blockquote className="font-display text-2xl md:text-4xl italic font-medium leading-relaxed mb-8">
                        "{t('testimonial.quote')}"
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-secondary"></div>
                        <span className="font-sans text-sm font-bold tracking-widest uppercase">{t('testimonial.source')}</span>
                        <div className="h-px w-12 bg-secondary"></div>
                    </div>
                </div>
            </section >

            {/* CTA Section */}
            < section className="py-24 bg-white dark:bg-background-dark" >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-primary dark:text-white mb-6">
                        {t('cta.title')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        {t('cta.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-primary hover:bg-blue-800 text-white font-bold rounded shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <span className="material-icons">support_agent</span>
                            {t('cta.contactUs')}
                        </Link>
                        <a
                            href="https://drive.google.com/file/d/1YhY2grZTP-lNsyPucLEPKh5jvD7hD3To/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <span className="material-icons">download</span>
                            {t('cta.viewPortfolio')}
                        </a>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Home;
