/* The purpose of this script is to clear the input field upon focus after submitting kilometers to the app */

/* Making sure script only runs when the entire DOM has loaded */
document.addEventListener('DOMContentLoaded', () => {

    /* Saving of the required DOM element */
    const kilometerInput = document.querySelector('#kilometer-input');

    /* Setting up of an event listener to listen for focus events on the input field and then to set the field
    *  to an empty string */
    kilometerInput.addEventListener('focus', (e) => {
        e.preventDefault();
        kilometerInput.value = '';
    })

})
