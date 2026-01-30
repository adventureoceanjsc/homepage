import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Notification from '../components/shared/Notification';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [notification, setNotification] = useState(null);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setNotification({ type: 'error', message: t('contact.form.error') });
            return;
        }

        if (!validateEmail(formData.email)) {
            setNotification({ type: 'error', message: t('common.invalidEmail') });
            return;
        }

        // Simulate API call
        console.log('Form submitted:', formData);
        setNotification({ type: 'success', message: t('common.thankYou') });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <>
            <Helmet>
                <title>{t('nav.contact')} - Adventure Ocean JSC</title>
                <meta name="description" content={t('contact.description')} />
            </Helmet>

            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}

            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs">{t('contact.badge')}</span>
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary dark:text-white mt-2 mb-6">
                            {t('contact.title')}
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                            {t('contact.description')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                                <h2 className="font-display text-2xl font-bold text-primary dark:text-white mb-6">{t('contact.form.title')}</h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">{t('contact.form.name')}</label>
                                            <input
                                                className="w-full px-4 py-3 bg-surface-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                id="name"
                                                placeholder={t('contact.form.namePlaceholder')}
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">{t('contact.form.email')}</label>
                                            <input
                                                className="w-full px-4 py-3 bg-surface-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                id="email"
                                                placeholder={t('contact.form.emailPlaceholder')}
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="phone">{t('contact.form.phone')}</label>
                                            <input
                                                className="w-full px-4 py-3 bg-surface-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                id="phone"
                                                placeholder={t('contact.form.phonePlaceholder')}
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="subject">{t('contact.form.subject')}</label>
                                            <select
                                                className="w-full px-4 py-3 bg-surface-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                id="subject"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            >
                                                <option value="">{t('contact.form.subjectPlaceholder')}</option>
                                                <option value="investment">{t('contact.form.subjects.investment')}</option>
                                                <option value="partnership">{t('contact.form.subjects.partnership')}</option>
                                                <option value="real-estate">{t('contact.form.subjects.realEstate')}</option>
                                                <option value="high-tech">{t('contact.form.subjects.highTech')}</option>
                                                <option value="other">{t('contact.form.subjects.other')}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">{t('contact.form.message')}</label>
                                        <textarea
                                            className="w-full px-4 py-3 bg-surface-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                            id="message"
                                            placeholder={t('contact.form.messagePlaceholder')}
                                            rows="6"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>

                                    <button
                                        className="w-full md:w-auto px-8 py-4 bg-primary hover:bg-blue-800 text-white font-bold rounded shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                                        type="submit"
                                    >
                                        <span className="material-icons">send</span>
                                        {t('contact.form.submit')}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            {/* Contact Details Card */}
                            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                                <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-6">{t('contact.info.title')}</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="material-icons text-primary">location_on</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{t('contact.info.address')}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                C10/68 ấp 5, Đường Phạm Hùng, Xã Bình Hưng, <br />
                                                Thành phố Hồ Chí Minh, Việt Nam
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="material-icons text-primary">phone</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{t('contact.info.hotline')}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">028.77758.666</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="material-icons text-primary">email</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{t('contact.info.email')}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">info@adventureocean.vn</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="material-icons text-primary">language</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{t('contact.info.website')}</h4>
                                            <a href="http://adventureocean.vn" target="_blank" rel="noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">adventureocean.vn</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Card */}
                            <div className="bg-primary text-white p-8 rounded-xl shadow-lg">
                                <h3 className="font-display text-xl font-bold mb-4">{t('contact.follow.title')}</h3>
                                <p className="text-blue-100 text-sm mb-6">{t('contact.follow.description')}</p>
                                <div className="flex gap-3">
                                    <a className="w-12 h-12 bg-white/10 hover:bg-white hover:text-primary rounded-lg flex items-center justify-center transition-all" href="https://facebook.com/AdventureOceanJSC" target="_blank" rel="noreferrer">
                                        <span className="material-icons">facebook</span>
                                    </a>
                                    <a className="w-12 h-12 bg-white/10 hover:bg-white hover:text-primary rounded-lg flex items-center justify-center transition-all" href="http://adventureocean.vn" target="_blank" rel="noreferrer">
                                        <span className="material-icons">language</span>
                                    </a>
                                    <a className="w-12 h-12 bg-white/10 hover:bg-white hover:text-primary rounded-lg flex items-center justify-center transition-all" href="https://youtube.com/@AdventureOceanJSC" target="_blank" rel="noreferrer">
                                        <span className="material-icons">smart_display</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mt-16">
                        <div className="bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden h-96 flex items-center justify-center shadow-inner relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.026566412497!2d106.68536831411598!3d10.73243526293673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9c4d9a5b3f%3A0x4a4d9c4d9a5b3f!2sC10%2F68%20Pham%20Hung%2C%20Binh%20Hung%2C%20Ho%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1625631234567!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Adventure Ocean Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contact;
