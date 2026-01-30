import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import MissionVisionValues from '../components/about/MissionVisionValues';

const About = () => {
    const { t } = useTranslation();

    const team = t('about.team', { returnObjects: true });

    return (
        <>
            <Helmet>
                <title>{t('nav.about')} - Adventure Ocean JSC</title>
                <meta name="description" content="Learn about Adventure Ocean's leadership team and our vision for the future" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden mt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://soga-ads.s3.ap-southeast-1.amazonaws.com/adventureocean-media/anh-du-an-slide.jpeg"
                        alt="Corporate HQ"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <span className="block text-secondary font-bold tracking-[0.2em] mb-4 animate-fade-in-up">{t('about.hero.badge')}</span>
                    <h1
                        className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up"
                        style={{ animationDelay: '0.1s' }}
                        dangerouslySetInnerHTML={{ __html: t('about.hero.title') }}
                    >
                    </h1>
                    <p className="font-light text-xl max-w-2xl mx-auto text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {t('about.hero.description')}
                    </p>
                </div>
            </section>

            {/* Chairman's Vision */}
            <section className="py-24 bg-white dark:bg-background-dark relative overflow-hidden">
                <div className="absolute -left-20 top-20 text-[20rem] font-display font-bold text-gray-50 dark:text-gray-800/10 pointer-events-none select-none">
                    VISION
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-secondary/10 rounded-xl transform -rotate-3"></div>
                                <div className="absolute -inset-4 bg-primary/10 rounded-xl transform rotate-3"></div>
                                <img
                                    src="https://soga-ads.s3.ap-southeast-1.amazonaws.com/adventureocean-media/ChutTich.jpeg"
                                    alt="Chairman"
                                    className="relative rounded-lg shadow-2xl w-full"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">{t('story.badge')}</span>
                            <h2 className="font-display text-4xl font-bold text-primary dark:text-white mb-6">
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
                    </div>
                </div>
            </section>

            <MissionVisionValues />

            {/* Leadership Section */}
            <section className="py-24 bg-surface-light dark:bg-surface-dark/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs">{t('about.leadership.badge')}</span>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary dark:text-white mt-2">{t('about.leadership.title')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.isArray(team) && team.map((member, index) => (
                            <div key={index} className="group h-[450px] perspective-1000">
                                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                                    {/* Front */}
                                    <div className="absolute inset-0 backface-hidden bg-white dark:bg-background-dark rounded-xl shadow-lg overflow-hidden">
                                        <div className="h-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top transition-all duration-500"
                                            />
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm z-10 p-4 text-center border-t border-white/20">
                                            <h3 className="font-display text-lg font-bold text-primary dark:text-white">{member.name}</h3>
                                            <p className="text-secondary text-xs md:text-sm font-medium uppercase tracking-wider mt-1">{member.role}</p>
                                        </div>
                                    </div>

                                    {/* Back */}
                                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary text-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-center">
                                        <div className="w-16 h-1 bg-secondary mb-6"></div>
                                        <h3 className="font-display text-xl font-bold mb-2">{member.name}</h3>
                                        <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-4">{member.role}</p>
                                        <p className="text-blue-100 text-sm font-light leading-relaxed mb-6">
                                            "{member.bio}"
                                        </p>
                                        <div className="mt-auto pt-4 border-t border-white/10 w-full">
                                            <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-sm hover:text-secondary transition-colors">
                                                <span className="material-icons text-sm">email</span>
                                                <span className="truncate max-w-[200px]">{member.email}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Group Hierarchy - PMU Organizational Chart */}
            <section className="py-24 bg-white dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary dark:text-white">{t('about.orgChart.title')}</h2>
                    </div>

                    <div className="overflow-x-auto pb-12">
                        <div className="min-w-[900px] flex flex-col items-center relative">
                            {/* Level 1: Chairman - CEO */}
                            <div className="mb-16 relative z-10">
                                <div className="w-64 p-6 bg-primary text-white rounded-lg shadow-xl text-center border-t-4 border-secondary">
                                    <div className="font-display font-bold text-xl mb-1">{t('about.orgChart.level1.role')}</div>
                                    <div className="text-blue-200 text-sm">{t('about.orgChart.level1.desc')}</div>
                                </div>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gray-300 dark:bg-gray-700"></div>
                            </div>

                            {/* Level 2: Executive Board */}
                            <div className="mb-16 relative z-10 w-full flex flex-col items-center">
                                <div className="w-full max-w-4xl text-center mb-6">
                                    <h3 className="font-bold text-primary dark:text-white text-lg bg-surface-light dark:bg-surface-dark py-2 px-6 rounded-full inline-block shadow-sm">
                                        {t('about.orgChart.level2.title')}
                                    </h3>
                                </div>
                                <div className="flex gap-4 justify-center w-full">
                                    {Array.isArray(t('about.orgChart.level2.roles', { returnObjects: true })) && t('about.orgChart.level2.roles', { returnObjects: true }).map((role, idx) => (
                                        <div key={idx} className="w-48 p-4 bg-white dark:bg-surface-dark text-gray-800 dark:text-white rounded-lg shadow-lg text-center border border-gray-200 dark:border-gray-700 text-sm font-bold flex items-center justify-center">
                                            {role}
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gray-300 dark:bg-gray-700"></div>
                            </div>

                            {/* Level 3: Departments */}
                            <div className="mb-16 relative z-10 w-full flex flex-col items-center">
                                <div className="w-full max-w-4xl text-center mb-6">
                                    <h3 className="font-bold text-primary dark:text-white text-lg bg-surface-light dark:bg-surface-dark py-2 px-6 rounded-full inline-block shadow-sm">
                                        {t('about.orgChart.level3.title')}
                                    </h3>
                                </div>
                                <div className="flex gap-4 justify-center w-full flex-wrap">
                                    {Array.isArray(t('about.orgChart.level3.roles', { returnObjects: true })) && t('about.orgChart.level3.roles', { returnObjects: true }).map((role, idx) => (
                                        <div key={idx} className="w-40 p-4 bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-200 rounded-lg shadow hover:-translate-y-1 transition-transform text-center text-sm font-medium flex items-center justify-center border border-blue-100 dark:border-blue-900/50">
                                            {role}
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gray-300 dark:bg-gray-700"></div>
                            </div>

                            {/* Level 4: On-site Teams */}
                            <div className="w-full flex flex-col items-center">
                                <div className="w-full max-w-4xl text-center mb-6">
                                    <h3 className="font-bold text-primary dark:text-white text-lg bg-surface-light dark:bg-surface-dark py-2 px-6 rounded-full inline-block shadow-sm">
                                        {t('about.orgChart.level4.title')}
                                    </h3>
                                </div>
                                <div className="grid grid-cols-4 gap-6 w-full max-w-5xl">
                                    {Array.isArray(t('about.orgChart.level4.roles', { returnObjects: true })) && t('about.orgChart.level4.roles', { returnObjects: true }).map((role, idx) => (
                                        <div key={idx} className="flex flex-col items-center">
                                            <div className="w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-t-4 border-secondary shadow-md text-center">
                                                <div className="font-bold text-gray-800 dark:text-white text-sm">{role}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
