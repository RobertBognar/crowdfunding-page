//Defning Variables & Constants For Updating Number After Pledge
const amount = 100000;
let totalBacked = 89914;
let totalBackers = 5007;
let focusedElement;
//Buttons Trigger
const modalTriggerButton = document.querySelectorAll('.modal-trigger');
const buttonPrimary = document.querySelector('.btn--primary');
const buttonSelectReward = document.querySelectorAll('.btn--reward');
//Modal Containers 
const modalContainer = document.querySelector('.modal-container');
//Selection Modal Start
const modalSelection = document.querySelector('.modal--selection');
const buttonCloseModal = document.querySelector('.btn--close-modal');
const radioInputs = document.querySelectorAll('.radio__input');
const pledgeForms = document.querySelectorAll('.pledge__form');
//Success Modal Container
const modalSuccess = document.querySelector('.modal--success');
const buttonCloseSuccess = document.querySelector('.btn--success');
