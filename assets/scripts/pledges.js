//Updating Pledges

pledgeForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (form.dataset.group != 'noreward') {
            updateRemains(form);
        }

        totalBackers++;
        document.getElementById('num-backers').innerHTML = totalBackers.toLocaleString();

        totalBackedUpdated(form);
        successModal();
    });
});

function updateRemains(form) {

    let numberRemaining = parseInt(document.querySelector(`.number--${form.dataset.group}`).innerHTML);

    if (numberRemaining > 0) {
        numberRemaining--;
        document
            .querySelectorAll(`.number--${form.dataset.group}`)
            .forEach((item) => {
                item.innerHTML = numberRemaining;
            });
    }
}

// Parsing Amount Pledged, Adding To Total, Updating Existing Dom With New Value
// Calculating New % For Slider Update
function totalBackedUpdated(form) {

    const amountPledged = parseInt(
        document.getElementById(`amount-${form.dataset.group}`).value
    );

    totalBacked += amountPledged;

    document.getElementById(
        'total-backed'
    ).innerHTML = `$${totalBacked.toLocaleString()}`;

    const percentageBacked = Math.floor((totalBacked / amountGoal) * 100);

    document.querySelector(
        '.statistics__slider-inner'
    ).style.width = `${percentageBacked}%`;
}