/* Navigation input */
const searchInput = document.getElementById('searchInput');

document.getElementById('searchBtn').addEventListener('click', e => {
    if (!searchInput.classList.contains('active-input')) {
        searchInput.classList.add('active-input');
    } else {
        searchInput.classList.remove('active-input');
    }
});

/* Navigation Bar */

const barsElement = document.getElementById('bars');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const asideNav = document.getElementById('asideNav');
const asideNavContainer = document.getElementById('aside-container');

barsElement.addEventListener('click', sidebarToggler);
window.addEventListener('resize', () => {
    console.log("Hello");
    if (window.innerWidth > 767 && bar1.classList.contains('bar1') && asideNav.classList.contains('nav-temp')) sidebarToggler();
});

function sidebarToggler() {
    if (!bar1.classList.contains('bar1')) {
        asideNavContainer.style.minWidth = '100%';
        bar1.classList.add('bar1');
        bar2.classList.add('bar2');
        bar3.classList.add('bar3');
        asideNav.classList.add('nav-temp');
    } else {
        bar1.classList.remove('bar1');
        bar2.classList.remove('bar2');
        bar3.classList.remove('bar3');
        asideNav.classList.remove('nav-temp');
        asideNavContainer.style.minWidth = '0';
    }
}
