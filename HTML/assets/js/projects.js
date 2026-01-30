// Adventure Ocean - Projects Filtering

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.dataset.filter;

            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white', 'shadow-lg', 'shadow-blue-900/20');
                btn.classList.add('bg-white', 'dark:bg-background-dark', 'text-gray-600', 'dark:text-gray-300', 'border', 'border-gray-200', 'dark:border-gray-700');
            });

            this.classList.remove('bg-white', 'dark:bg-background-dark', 'text-gray-600', 'dark:text-gray-300', 'border', 'border-gray-200', 'dark:border-gray-700');
            this.classList.add('bg-primary', 'text-white', 'shadow-lg', 'shadow-blue-900/20');

            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = '';
                    card.classList.add('animate-fade-in-up');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
