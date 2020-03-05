const title = document.querySelector('#h1');

const CLICKED_CLASS = 'clicked';

function handleClick() {
    
    title.classList.toggle(CLICKED_CLASS);
    /* const hasClass = h1.classList.contains(CLICKED_CLASS);
    if (hasClass) {
        h1.classList.remove(CLICKED_CLASS);
    } else {
        h1.classList.add(CLICKED_CLASS);
    }
 */
}


function init() {
    title.addEventListener("click", handleClick);
}
init();