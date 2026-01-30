// Adventure Ocean - Dark Mode Toggle

document.addEventListener('DOMContentLoaded', function () {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the saved theme
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Update toggle button state if it exists
    updateToggleButton(currentTheme);

    // Dark mode toggle button event
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function () {
            document.documentElement.classList.toggle('dark');

            // Save preference
            const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);

            updateToggleButton(theme);
        });
    }
});

function updateToggleButton(theme) {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('.material-icons');
        if (icon) {
            icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
        }
    }
}

// Create and inject dark mode toggle button
function createDarkModeToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'dark-mode-toggle fixed bottom-6 right-6 w-14 h-14 bg-primary dark:bg-gray-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center z-40';
    toggle.setAttribute('aria-label', 'Toggle dark mode');
    toggle.innerHTML = '<span class="material-icons">dark_mode</span>';

    document.body.appendChild(toggle);
}

// Auto-create toggle button if it doesn't exist
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        if (!document.querySelector('.dark-mode-toggle')) {
            createDarkModeToggle();
        }
    });
} else {
    if (!document.querySelector('.dark-mode-toggle')) {
        createDarkModeToggle();
    }
}
