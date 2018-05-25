let isShown = false;
let openedLetterIcon = "far fa-envelope-open";
let envelopedLetterIcon = "fas fa-envelope";
let trigger = document.getElementById('trigger');

trigger.addEventListener('click', () => {

    if (isShown) {
        trigger.setAttribute('class', envelopedLetterIcon);
        document.getElementById('popover').style.display = 'none';
        isShown = false;
    } else {
        trigger.setAttribute('class', openedLetterIcon);
        document.getElementById('popover').style.display = 'block'
        isShown = true;
    }

});


