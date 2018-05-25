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