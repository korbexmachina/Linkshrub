// Check the user's preferred theme from localStorage
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Apply the user's preferred theme initially
if (userPrefersDark) {
    body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
}

// Toggle between light and dark themes
themeToggle.addEventListener('click', function() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Set the new theme
    body.setAttribute('data-theme', newTheme);
    updateToggleIcon(newTheme);
});

// Function to update the toggle button icon
function updateToggleIcon(theme) {
    const icon = theme === 'light' ? 'fa-moon' : 'fa-sun';
    themeToggle.innerHTML = `<i class="fa-regular ${icon}"></i>`;
}
