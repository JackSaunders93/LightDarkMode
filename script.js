const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const darkTheme = 'dark';
const lightTheme = 'light';

//  Dark or Light Images

function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_conceptual_idea_${color}.svg`;
    image3.src = `img/undraw_feeling_proud_${color}.svg`;
}

// Dark or Light Theme

function dataTheme(color) {
    document.documentElement.setAttribute('data-theme', `${color}`);
}

// Toggle dark or light mode

function toggleTheme (isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode(darkTheme) : imageMode(lightTheme);
    isDark ? dataTheme(darkTheme) : dataTheme(lightTheme);
}

// Switch Theme Dynamically

function switchTheme (event) {
    if (event.target.checked) {
        localStorage.setItem('theme', darkTheme);
        toggleTheme (darkTheme);
    } else {
        localStorage.setItem('theme', lightTheme);
        toggleTheme (lightTheme);
    }
}

// Event Listener

toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    if (currentTheme === darkTheme) {
        toggleSwitch.checked = true;
        toggleTheme (darkTheme);
    }
}