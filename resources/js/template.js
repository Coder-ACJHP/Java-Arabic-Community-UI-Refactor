let isShown = false;
let openedLetterIcon = "far fa-envelope-open";
let envelopedLetterIcon = "fas fa-envelope";
let trigger = document.getElementById('trigger');

if (trigger) {
    trigger.addEventListener('click', () => {

        if (isShown) {
            trigger.setAttribute('class', envelopedLetterIcon);
            document.getElementById('popover').style.display = 'none';
            document.querySelector('.popover-arrow').style.display = 'none';
            isShown = false;
        } else {
            trigger.setAttribute('class', openedLetterIcon);
            document.getElementById('popover').style.display = 'block'
            document.querySelector('.popover-arrow').style.display = 'block';
            isShown = true;
        }
    
    });
}

/** Toogle navigation bar with toggle button */
var clickCount = 0;
var navigationBar = document.querySelector('.nav-bar');
var togglerBtn = document.querySelector('.toggler-btn');
var collapsibleNavbar = document.querySelector('#collapsibleNavbar');

function showCollapseNav() {
    togglerBtn.setAttribute('id', 'toggler-btn-rotated');
    collapsibleNavbar.style.display = "block";
    navigationBar.setAttribute('id', 'nav-bar-border');
    clickCount = 1;
}

function hideCollapseNav() {
    togglerBtn.setAttribute('id', '');
    collapsibleNavbar.style.display = "none";
    navigationBar.setAttribute('id', '');
    clickCount = 0;
}

if(togglerBtn) {
    togglerBtn.addEventListener('click', () => {

        if (clickCount == 0) {
            showCollapseNav();
        } else {
            hideCollapseNav();
        }

    });
}

/** Close sticker, banner */
function closeTheSticker(triggerEl, element) {
    if(triggerEl != null && element != null) {

        const el = document.getElementById(triggerEl);
        if (el) {
            el.addEventListener('click', ()=> {
                document.querySelector(element).remove();
            });
        }

    } else {
        return false;
    }
}
/** Ask question sticker */
closeTheSticker('closer', '.info-sticker');

/** Edit answer sticker */
closeTheSticker('switcher', '.answer-info-sticker');


/** Submit forms */
function submitTheForm(submitterEl, formName) {
    if(submitterEl != null && formName != null) {

        const el = document.getElementById(submitterEl);
        if (el) {
            el.addEventListener('click', ()=> {
                document.getElementById(formName).submit();
            });
        }
    }
}

/** Comment input */
submitTheForm('submitter', 'add-comment-form');

/** Find user input */
submitTheForm('founder', 'find-user-form');


/** Change css for buttons */
function animateButtonIcon(buttonName) {
    if(buttonName != null) {

        const el = document.querySelector(buttonName);
        if (el) {
            el.addEventListener('click', ()=> {
                document.querySelector('.fas.fa-spinner').style.display = 'inline-block';
                if (el.id === 'go-to-suggestion-form') {
                    window.location.href = 'sendSuggestion.html';
                }
            });
        }
    }
}

/** Post suggestion button */
animateButtonIcon('.postSuggestion-button');

/** Sign up button */
animateButtonIcon('.signUp-button');

/** Log in button */
animateButtonIcon('.loginBtn');

/** Edit answer button */
animateButtonIcon('.saveChanges-button');

/** Post question button */
animateButtonIcon('.postQuestion-button');


/** Sign up form */
var nickName = document.getElementById('nickName');
if (nickName) {
    nickName.addEventListener('input', () => {
        document.getElementById('user-nickName').innerHTML = nickName.value;
    });
}

let profilePicEl = document.getElementById('profilePic');
let loadImage = document.querySelector('.loading-overlay');
if (profilePicEl) {
    profilePicEl.addEventListener('change', () => {
        const profilePicFile = profilePicEl.files[0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
            document.querySelector('.big-prof-img').setAttribute('src', fileReader.result);
        }
        fileReader.readAsDataURL(profilePicFile);
    });
}
/** Sign up form */
/** Login modal functions */
let closeX = document.querySelector('.close');
let closeBtn = document.querySelector('.modal-close-button');

if (closeX && closeBtn) {
    function closeModal(params) {
        params.addEventListener('click', ()=> {
            document.querySelector('.login-modal-container').style.display = "none";
        });
    }
    closeModal(closeX);
    closeModal(closeBtn);
}