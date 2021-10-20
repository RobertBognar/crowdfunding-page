//Bookmark Button Active State
const bookmark = document.querySelector('.bookmark');

function bookmarkToggle() {
    bookmark.classList.toggle('bookmark--active');

    if (bookmark.classList.contains('bookmark--active')) {
        bookmark.setAttribute('aria-pressed', 'true');
    } else {
        bookmark.setAttribute('aria-pressed', 'false');
    }
}

bookmark.addEventListener('click', bookmarkToggle);