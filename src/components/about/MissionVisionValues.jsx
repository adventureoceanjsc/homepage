import React from 'react';
import { useTranslation } from 'react-i18next';

const MissionVisionValues = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-surface-light dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-widest uppercase text-xs">{t('about.values.title')}</span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-primary dark:text-white mt-2">
                        {t('about.values.title')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* Vision */}
                    <div className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-lg border-l-4 border-secondary hover:-translate-y-1 transition-transform">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                <span className="material-icons text-2xl">visibility</span>
                            </div>
                            <h3 className="font-display text-2xl font-bold text-primary dark:text-white">
                                {t('about.values.vision.title')}
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            {t('about.values.vision.content')}
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-lg border-l-4 border-primary hover:-translate-y-1 transition-transform">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-icons text-2xl">flag</span>
                            </div>
                            <h3 className="font-display text-2xl font-bold text-primary dark:text-white">
                                {t('about.values.mission.title')}
                            </h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-gray-800 dark:text-white mb-2 text-sm uppercase tracking-wide opacity-80">
                                    {t('about.values.mission.customers.title')}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {t('about.values.mission.customers.content')}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 dark:text-white mb-2 text-sm uppercase tracking-wide opacity-80">
                                    {t('about.values.mission.partners.title')}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {t('about.values.mission.partners.content')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="font-display text-3xl font-bold text-primary dark:text-white">
                            {t('about.values.coreValues.title')}
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: "verified",
                                title: t('about.values.coreValues.integrity.title'),
                                desc: t('about.values.coreValues.integrity.content'),
                                color: "text-blue-500",
                                bg: "bg-blue-50 dark:bg-blue-900/10"
                            },
                            {
                                icon: "favorite",
                                title: t('about.values.coreValues.dedication.title'),
                                desc: t('about.values.coreValues.dedication.content'),
                                color: "text-red-500",
                                bg: "bg-red-50 dark:bg-red-900/10"
                            },
                            {
                                icon: "lightbulb",
                                title: t('about.values.coreValues.vision.title'),
                                desc: t('about.values.coreValues.vision.content'),
                                color: "text-purple-500",
                                bg: "bg-purple-50 dark:bg-purple-900/10"
                            },
                            {
                                icon: "speed",
                                title: t('about.values.coreValues.speed.title'),
                                desc: t('about.values.coreValues.speed.content'),
                                color: "text-amber-500",
                                bg: "bg-amber-50 dark:bg-amber-900/10"
                            }
                        ].map((value, idx) => (
                            <div key={idx} className={`p-6 rounded-xl ${value.bg} hover:shadow-lg transition-transform hover:-translate-y-1`}>
                                <span className={`material-icons text-4xl mb-4 ${value.color}`}>{value.icon}</span>
                                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                                    {value.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionValues;
