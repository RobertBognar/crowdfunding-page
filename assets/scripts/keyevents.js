const firstTab = focusableElements[0];
const lastTab = focusableElements[focusableElements.length - 1];

function tabSkipKey(e) {
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstTab) {
                e.preventDefault();
                lastTab.focus();
            }
        } else {
            if (document.activeElement === lastTab) {
                e.preventDefault();
                firstTab.focus();
            }
        }
    }
}

//Function For Exiting On Esc Keyboard Press
function escapeExit() {
    document.addEventListener('keydown', (e) => {
        if (e.key == 'Escape' && overlay.classList.contains('overlay--modal')) {
            closeModal();
        }
    });
}

//Function For Exiting On Blank Click Outside Modal Box
function escapeBlankClick() {
    modalContainer.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) {
            return;
        } else {
            closeModal();
        }
    });
}

//Function For Exiting On X Button Click
function escapeX() {
    [buttonCloseModal, buttonCloseSuccess].forEach((button) => {
        button.addEventListener('click', closeModal);
    });
}
