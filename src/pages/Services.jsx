import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Services = () => {
    const { t } = useTranslation();

    const items = t('servicesPage.items', { returnObjects: true });
    // Maintain strict order
    const serviceKeys = ['realEstate', 'highTech', 'infrastructure', 'consulting'];
    const services = serviceKeys.map(key => items[key]).filter(Boolean);

    return (
        <>
            <Helmet>
                <title>{t('nav.services')} - Adventure Ocean JSC</title>
                <meta name="description" content={t('servicesPage.hero.description')} />
            </Helmet>

            <main className="pt-24">
                {/* Hero */}
                <section className="py-20 md:py-28 bg-white dark:bg-background-dark text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 dark:bg-blue-900/5 -skew-x-12 transform origin-top translate-x-1/4 -z-10"></div>
                    <div className="max-w-4xl mx-auto px-4">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block animate-fade-in-up">
                            {t('servicesPage.hero.badge')}
                        </span>
                        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            {t('servicesPage.hero.title')}
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {t('servicesPage.hero.description')}
                        </p>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
                        {/* Sidebar Navigation */}
                        <aside className="hidden lg:block lg:col-span-3 relative">
                            <div className="sticky top-32">
                                <nav aria-label="Services navigation">
                                    <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-6">
                                        {t('servicesPage.sidebar.title')}
                                    </h3>
                                    <ul className="space-y-1 border-l border-gray-200 dark:border-gray-700">
                                        {services.map(service => (
                                            <li key={service.id}>
                                                <a href={`#${service.id}`} className="group flex items-center pl-4 py-2 text-sm font-medium border-l-2 border-transparent hover:border-secondary hover:text-primary text-gray-500 transition-all duration-300">
                                                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-secondary">•</span> {service.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <div className="mt-12 p-6 bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-100 dark:border-gray-700">
                                    <h4 className="font-display font-bold text-primary dark:text-blue-300 mb-2">{t('servicesPage.sidebar.consultationTitle')}</h4>
                                    <p className="text-xs text-gray-500 mb-4">{t('servicesPage.sidebar.consultationDesc')}</p>
                                    <a href="/contact" className="text-xs font-bold text-secondary uppercase tracking-wider hover:underline">{t('servicesPage.sidebar.contactSupport')} →</a>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="col-span-12 lg:col-span-9 space-y-32">
                            {services.map(service => (
                                <section key={service.id} id={service.id} className="scroll-mt-32">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-4xl text-gray-200 dark:text-gray-700 font-display font-bold">{service.number}</span>
                                        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
                                    </div>
                                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-10" dangerouslySetInnerHTML={{ __html: service.title }}></h2>

                                    {/* Sub Items / Sub Services */}
                                    {service.subServices && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                            {service.subServices.map((sub, idx) => (
                                                <div key={idx} className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                                                    <h4 className="font-bold text-lg text-primary dark:text-white mb-3">{sub.title}</h4>
                                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{sub.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Special: Highlights */}
                                    {service.highlight && (
                                        <div className="bg-gradient-to-r from-secondary/10 to-transparent p-6 rounded-xl border-l-4 border-secondary">
                                            <span className="font-bold text-secondary uppercase tracking-wider text-xs block mb-2">{service.highlight.label}</span>
                                            <p className="text-lg font-medium text-gray-800 dark:text-white">{service.highlight.text}</p>
                                        </div>
                                    )}

                                    {/* Special: Vision & Goal */}
                                    {service.vision && service.goal && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                                            <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                                                <span className="font-bold text-primary dark:text-blue-300 uppercase tracking-wider text-xs block mb-2">{service.vision.label}</span>
                                                <p className="text-gray-800 dark:text-gray-200 font-medium">{service.vision.text}</p>
                                            </div>
                                            <div className="bg-secondary/5 dark:bg-secondary/10 p-6 rounded-xl border border-secondary/10 dark:border-secondary/20">
                                                <span className="font-bold text-secondary uppercase tracking-wider text-xs block mb-2">{service.goal.label}</span>
                                                <p className="text-gray-800 dark:text-gray-200 font-medium">{service.goal.text}</p>
                                            </div>
                                        </div>
                                    )}
                                </section>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Ecosystem Synergy */}
                <section className="py-24 bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-secondary font-bold tracking-widest uppercase text-xs">{t('servicesPage.synergy.badge')}</span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white mt-3 mb-6">{t('servicesPage.synergy.title')}</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t('servicesPage.synergy.description')}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            <div className="p-8 bg-white dark:bg-background-dark rounded-xl shadow-sm text-center border-t-4 border-primary">
                                <span className="material-icons text-5xl text-primary mb-4">domain</span>
                                <h3 className="font-display text-xl font-bold mb-3">{t('servicesPage.synergy.left.title')}</h3>
                                <p className="text-sm text-gray-500">
                                    {t('servicesPage.synergy.left.desc')}
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center text-secondary">
                                <span className="material-icons text-4xl animate-pulse">sync_alt</span>
                                <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-4 md:hidden"></div>
                                <span className="text-xs font-bold uppercase tracking-widest mt-2">{t('servicesPage.synergy.middle.label')}</span>
                            </div>
                            <div className="p-8 bg-white dark:bg-background-dark rounded-xl shadow-sm text-center border-t-4 border-secondary">
                                <span className="material-icons text-5xl text-secondary mb-4">memory</span>
                                <h3 className="font-display text-xl font-bold mb-3">{t('servicesPage.synergy.right.title')}</h3>
                                <p className="text-sm text-gray-500">
                                    {t('servicesPage.synergy.right.desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Services;
