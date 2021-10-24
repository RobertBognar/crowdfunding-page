//Defining Variables For Pledge Update, Status Bar Update And Number Of Donations
const amountGoal = 100000;
let totalBacked = 89914;
let totalBackers = 5007;
let focusedElementBeforeModal;
//Trigger Buttons Modal
const modalTrigger = document.querySelectorAll('.modal-trigger');
const btnPrimary = document.querySelector('.btn--primary');
const btnSelectReward = document.querySelectorAll('.btn--reward');
//Modal Container
const modalContainer = document.querySelector('.modal-container');
//Selection Modal
const modalSelection = document.querySelector('.modal--selection');
const buttonCloseModal = document.querySelector('.btn--close-modal');
const radioInputs = document.querySelectorAll('.radio__input');
const pledgeForms = document.querySelectorAll('.pledge__form');
//Success Modal
const modalSuccess = document.querySelector('.modal--success');
const buttonCloseSuccess = document.querySelector('.btn--success');


//Open Modal Function
function openModal(triggerButton) {
    focusedElementBeforeModal = triggerButton;
    focusedElementBeforeModal.setAttribute('aria-expanded', 'true');
    overlay.classList.remove('overlay--hidden');
    overlay.classList.add('overlay--modal');
    document.body.classList.add('modal-open');
    modalContainer.classList.remove('display-none');
    modalContainer.classList.remove('hidden');
    modalSelection.classList.remove('hidden');
    modalSelection.addEventListener('keydown', tabSkipKey);
}

//Update Styles That Are Checked In Pledge
function updateCheckedStyles() {
    radioInputs.forEach((input) => {
        if (input.checked) {
            input.closest('.pledge').classList.add('pledge--selected');
        } else if (!input.checked) {
            input.closest('.pledge').classList.remove('pledge--selected');
        }
    });
}

radioInputs.forEach((input) => {
    input.addEventListener('change', updateCheckedStyles);
});

modalTrigger.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.target.focus();
        openModal(btn);
    });
});

// Close Modal
function closeModal() {
    modalSelection.classList.add('hidden');
    modalSuccess.classList.add('hidden');
    overlay.classList.add('overlay--hidden');
    overlay.classList.remove('overlay--modal');
    document.body.classList.remove('modal-open');
    modalContainer.classList.add('hidden');

    document.querySelectorAll('.pledge__form').forEach((form) => {
        form.reset();
    });

    radioInputs.forEach((input) => {
        input.checked = false;
    });
    updateCheckedStyles();

    setTimeout(function () {
        modalContainer.classList.add('display-none');
    }, 700);
}

// Calling Functions For Closing Modals With X Button, Pressing Exit On Keyboard & Click On Blank Outside The Modal
escapeX();
escapeExit();
escapeBlankClick();

function successModal() {
    document.activeElement.blur();
    modalSelection.classList.add('hidden');
    modalSuccess.classList.remove('hidden');
}