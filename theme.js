// theme.js
document.addEventListener("DOMContentLoaded", () => {
    const currentTheme = localStorage.getItem('theme') || 'style.css'; // 默认为白天模式
    document.getElementById('theme-style').href = currentTheme;
    updateIcon(currentTheme);
});

function toggleTheme() {
    var themeLink = document.getElementById('theme-style');
    var icon = document.getElementById('theme-icon');
    let newTheme;

    if (themeLink.href.includes('style.css')) {
        newTheme = 'night.css';
        icon.src = 'Images/night.png';
    } else {
        newTheme = 'style.css';
        icon.src = 'Images/day.png';
    }
    themeLink.href = newTheme;
    localStorage.setItem('theme', newTheme);
}

function updateIcon(currentTheme) {
    var icon = document.getElementById('theme-icon');
    if (currentTheme === 'style.css') {
        icon.src = 'Images/day.png';
    } else {
        icon.src = 'Images/night.png';
    }
}
