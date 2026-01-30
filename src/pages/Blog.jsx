import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    const { t } = useTranslation();

    const articles = [
        {
            id: 1,
            title: "Redefining Coastal Luxury: The Launch of Sea Flower Resort Phase II",
            date: "Oct 24, 2023",
            category: "Real Estate",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD62j1fBRJF5J1l4FfaIewHhzKTmaDPWkBUDzWt1bXQgPcOpFmXwcjukUQDgUl99BoUT1KW53hSHIiyrwEwGxXrZCZDTTAzH38zfTMpAsawo6NkFzOXtWzuFQiSe_j8XypNwBVPhtXYY4tPhncVaIcY0S2DcPCORjNF2l9mWm7ONQ0lNfYqvFgaMHqV671NIAJ1RHT1ZpHYX4wAUEzMd18Rhe2MGKldMESsk_ibwjOeaDDXjM9o5qENeu4khyOO6EKlW9JYorrmMA4",
            excerpt: "Adventure Ocean announces the groundbreaking of the new luxury wing, integrating state-of-the-art sustainable architecture with traditional Vietnamese heritage design."
        },
        {
            id: 2,
            title: "Semiconductor Expansion: New CNC Hub Opens in Central Region",
            date: "Oct 18, 2023",
            category: "High-Tech",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaD4tbaauCin1uP-n-zcD5HP9i2OI-KCYHOWcqpzZbiW0J9Cg0ROVpG7KDtU1OkAVgjIw3pilDeAD3SP--SFP5S2h16Y_NwsdbMD79THYCro7pCpCAsFhOcwH2sGUDougyXlK14F5zYiWAkEuIW7FqWICOmpOwrWXXy8dhqDr8PZ-UHaDKZ_hxIxvk40LDO-V2nK-0AgpH-7TddcrLzncJtl4CKsPZ3l6fLbSlxmNrApctizpbwEZ4LJSXzMCDsNA7_0w_0B2MbRQ",
            excerpt: "A strategic move to bolster the national supply chain, our newest facility promises to deliver precision components for the global aerospace and medical sectors."
        },
        {
            id: 3,
            title: "Green Certification Awarded to Quang Phu Eco-Tourism Zone",
            date: "Oct 10, 2023",
            category: "Sustainability",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0URIAyGJgoz-DUPuY1wd5mrUWgXsdJ2xCnIYP2ovsBrBiWdwVP7TNYknav3kjrOS0embB10GhBUwYmi-MTHbctjczyfo9hdhya3vVdvwf5LmOR6SMhEywz__79oDPdjAahp4PBKEXeeCJKly2pNz5gt_b5Qeo_oWAgL1nWWU8FqaAElw_a40E0GzigwutfTbTYJe971HOQM2QX_tjep49cxpZBi1bnLHJEed5MGTEw9y7q7nBNC8EJuvcmls_BF1CNO9IenAG_vM",
            excerpt: "Recognized for excellence in waste management and energy efficiency, the project sets a new benchmark for responsible tourism development in Vietnam."
        },
        {
            id: 4,
            title: "Q3 Financial Report: Dual-Ecosystem Resilience",
            date: "Sep 28, 2023",
            category: "Market Analysis",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYpCI-WKhleMm4DuQUDlAlBVIlvVG2yic6rNuZ1p3oYpPf0__hJ_GkbldYoAes3duqbOt6EDYlTBA2a5udYm84B9f-zMnP9AT21pCOh8etC2_yyn1tHaN4D6_YPVpior6owBMvmLvXOO6Hy2-rVKPr_phrDQ_LxYSv_kR3rJeCu0EZyxhV3uyuxtwzDpWWX-AiAZcdg00SV1aSBXE89isKIdXnDst0ohFgOMJ20Al1wyVsvL7s5XJF46nSZNzBvJ4xFbu7i7CXgvA",
            excerpt: "Despite global market volatility, Adventure Ocean's diversified portfolio in real estate and manufacturing shows robust growth and stability."
        }
    ];

    const popularPosts = [
        { id: 1, title: "Top 5 Investment Trends in Coastal Vietnam for 2024", date: "Oct 20, 2023" },
        { id: 2, title: "Understanding the Global Chip Shortage", date: "Sep 15, 2023" },
        { id: 3, title: "Sea Flower Resort: Architectural Walkthrough", date: "Aug 22, 2023" }
    ];

    return (
        <>
            <Helmet>
                <title>Adventure Ocean - Insights & Market Trends</title>
                <meta name="description" content="Latest news and insights from Adventure Ocean" />
            </Helmet>

            <main className="pt-32 pb-24 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-16 border-b border-gray-200 dark:border-gray-800 pb-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                            <div>
                                <h1 className="font-display text-4xl md:text-6xl font-bold text-primary dark:text-white leading-tight" dangerouslySetInnerHTML={{ __html: t('blog.headerTitle') }}>
                                </h1>
                            </div>
                            <div className="md:text-right max-w-md">
                                <p className="text-gray-500 dark:text-gray-400 font-light text-lg">{t('blog.headerSubtitle')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* Main Articles */}
                        <div className="lg:col-span-8">
                            {articles.map(article => (
                                <article key={article.id} className="flex flex-col md:flex-row gap-8 mb-16 group cursor-pointer border-b border-gray-100 dark:border-gray-800 pb-16 last:border-0">
                                    <div className="w-full md:w-5/12 aspect-[4/3] overflow-hidden rounded-lg relative shadow-md">
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="w-full md:w-7/12 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-3 text-xs font-medium text-gray-400">
                                            <span className="text-secondary uppercase tracking-wider font-bold">{article.category}</span>
                                            <span>•</span>
                                            <span>{article.date}</span>
                                        </div>
                                        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary dark:text-white mb-4 group-hover:text-secondary transition-colors leading-tight">
                                            {article.title}
                                        </h2>
                                        <p className="text-gray-500 dark:text-gray-400 mb-6 line-clamp-3 font-light leading-relaxed">
                                            {article.excerpt}
                                        </p>
                                        <span className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                                            {t('blog.readMore')} <span className="material-icons text-base ml-1">arrow_forward</span>
                                        </span>
                                    </div>
                                </article>
                            ))}

                            {/* Pagination (Visual Only) */}
                            <div className="flex items-center justify-center pt-8">
                                <nav aria-label="Pagination" className="flex items-center gap-2">
                                    <a className="p-2 text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons">chevron_left</span></a>
                                    <a className="w-10 h-10 flex items-center justify-center bg-primary text-white font-bold rounded shadow-lg" href="#">1</a>
                                    <a className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors" href="#">2</a>
                                    <a className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors" href="#">3</a>
                                    <span className="text-gray-400 px-2">...</span>
                                    <a className="p-2 text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons">chevron_right</span></a>
                                </nav>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-12">
                            {/* Search */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={t('blog.sidebar.searchPlaceholder')}
                                    className="w-full pl-4 pr-12 py-4 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors">
                                    <span className="material-icons">search</span>
                                </button>
                            </div>

                            {/* Most Read */}
                            <div className="bg-white dark:bg-surface-dark rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                                <h3 className="font-display font-bold text-xl text-primary dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">{t('blog.sidebar.mostRead')}</h3>
                                <div className="space-y-6">
                                    {popularPosts.map((post, idx) => (
                                        <a key={post.id} href="#" className="flex gap-4 group items-start">
                                            <span className="text-4xl font-display font-bold text-gray-200 group-hover:text-accent transition-colors leading-none">0{idx + 1}</span>
                                            <div>
                                                <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm leading-snug group-hover:text-primary transition-colors mb-1">
                                                    {post.title}
                                                </h4>
                                                <span className="text-xs text-gray-400">{post.date}</span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Subscribe */}
                            <div className="bg-primary rounded-xl p-8 shadow-lg relative overflow-hidden text-center text-white">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                <div className="relative z-10">
                                    <span className="material-icons text-4xl mb-4 text-accent">mark_email_unread</span>
                                    <h3 className="font-display font-bold text-xl mb-2">{t('blog.sidebar.subscribeTitle')}</h3>
                                    <p className="text-blue-100 text-sm mb-6 font-light">{t('blog.sidebar.subscribeDesc')}</p>
                                    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                                        <input
                                            type="email"
                                            placeholder={t('blog.sidebar.emailPlaceholder')}
                                            className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all text-sm"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-secondary hover:bg-red-700 text-white font-bold rounded shadow-md transition-colors text-sm tracking-wider uppercase"
                                        >
                                            {t('blog.sidebar.subscribeButton')}
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="pt-4">
                                <h3 className="font-display font-bold text-xl text-primary dark:text-white mb-6">{t('blog.sidebar.categories')}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Real Estate', 'High-Tech', 'Sustainability', 'Press Release', 'Events'].map((cat, idx) => (
                                        <a key={idx} href="#" className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white text-gray-600 dark:text-gray-400 text-xs font-bold uppercase tracking-wider rounded transition-colors">
                                            {cat}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Blog;
