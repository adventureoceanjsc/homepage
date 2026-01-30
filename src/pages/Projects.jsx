import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
    ];

    const filters = [
        { key: 'all', label: t('projects.filters.all') },
        { key: 'resort', label: t('projects.filters.resort') },
        { key: 'residential', label: t('projects.filters.residential') },
        { key: 'industrial', label: t('projects.filters.industrial') }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <>
            <Helmet>
                <title>{t('projects.pageTitle')}</title>
                <meta name="description" content={t('projects.metaDescription')} />
            </Helmet>

            <main className="pt-24">
                {/* Hero */}
                <section className="py-20 md:py-24 bg-white dark:bg-background-dark text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10"></div>
                    <div className="max-w-5xl mx-auto px-4 relative z-10">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-fade-in-up">{t('projects.hero.badge')}</span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white mb-6 leading-tight uppercase animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            {t('projects.hero.title')}
                        </h1>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
                        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            {t('projects.hero.description')}
                        </p>
                    </div>
                </section>

                {/* Filters */}
                <section className="py-12 pb-32 bg-surface-light dark:bg-surface-dark relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-center mb-16 space-x-2 md:space-x-8 overflow-x-auto py-2">
                            {filters.map(filter => (
                                <button
                                    key={filter.key}
                                    onClick={() => setActiveFilter(filter.key)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap shadow-sm hover:shadow-md ${activeFilter === filter.key
                                        ? 'bg-primary text-white shadow-blue-900/20'
                                        : 'bg-white dark:bg-background-dark text-gray-600 dark:text-gray-300 hover:text-primary border border-gray-200 dark:border-gray-700'
                                        }`}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {filteredProjects.map(project => (
                                <div
                                    key={project.id}
                                    className="group bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 flex flex-col"
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
                                    <div className="p-8 flex-1 flex flex-col">
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
                                            <button className="w-full py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors uppercase text-xs font-bold tracking-widest rounded flex items-center justify-center gap-2 group-hover:border-secondary group-hover:text-secondary group-hover:hover:bg-secondary group-hover:hover:text-white">
                                                {t('projects.viewDetails')} <span className="material-icons text-sm">arrow_forward</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                    <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">{t('projects.cta.badge')}</span>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8">{t('projects.cta.title')}</h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-light">
                            {t('projects.cta.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://drive.google.com/file/d/1YhY2grZTP-lNsyPucLEPKh5jvD7hD3To/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-primary hover:bg-gray-100 font-bold rounded shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                                <span className="material-icons">download</span>
                                {t('projects.cta.download')}
                            </a>
                            <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-bold rounded shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                                <span className="material-icons">support_agent</span>
                                {t('projects.cta.contact')}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Projects;
