import './style.css';
import home from './home.js';
import { body, homePage } from './home.js';
import menuPage from './menu';
import contactPage from './contact';

const display = document.getElementById('content');
export default display;

const buttons = home();
const content = document.getElementById('text');

buttons.home.addEventListener('click', function(){
    remove()
    this.classList.add('active');
    homePage(content);
})

buttons.menu.addEventListener('click', function(){
    remove();
    this.classList.add('active');
    menuPage(content);
})

buttons.contact.addEventListener('click', function(){
    remove();
    this.classList.add('active');
    contactPage(content);
})

function remove() {
    for (const property in buttons) {
        buttons[property].classList.remove('active');
    }
}

// console.log(buttons);