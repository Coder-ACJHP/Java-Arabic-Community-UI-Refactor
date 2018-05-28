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