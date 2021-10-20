//Defining Constants & Attributes
const bookmark = document.querySelector('.bookmark');
const buttonMenu = document.querySelector('.btn--menu');
const buttonMenuIcon = document.querySelector('.menu-icon');
const navigation = document.querySelector('.navigation__list');
const overlay = document.querySelector('.overlay');

//Bookmark Button Active State
function bookmarkToggle() {
    bookmark.classList.toggle('bookmark--active');

    if (bookmark.classList.contains('bookmark--active')) {
        bookmark.setAttribute('aria-pressed', 'true');
    } else {
        bookmark.setAttribute('aria-pressed', 'false');
    }
}
bookmark.addEventListener('click', bookmarkToggle);

//Overlay Section
function overlayClose() {
    if (overlay.classList.contains('overlay--modal')) {
        closeModal();
    } else {
        menuToggle();
    }
}

//Mobile Hamburger Menu Toggle
function menuToggle() {
    navigation.classList.toggle('navigation__list--hidden');
    overlay.classList.toggle('overlay--hidden');
    document.body.classList.toggle('disable-scroll');

    if (navigation.classList.contains('navigation__list--hidden')) {
        buttonMenuIcon.src = './assets/images/icon-hamburger.svg';
        buttonMenu.setAttribute('aria-expanded', 'false');
    } else {
        buttonMenuIcon.src = './assets/images/icon-close-menu.svg';
        buttonMenu.setAttribute('aria-expanded', 'true');
    }
}
buttonMenu.addEventListener('click', menuToggle);
