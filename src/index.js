import './style.css';
import home from './home.js';
import { body, homePage } from './home.js';
import menuPage from './menu';

const display = document.getElementById('content');
export default display;

const buttons = home();
const content = document.getElementById('text');

buttons.home.addEventListener('click', function(){
    this.classList.add('active');
    buttons.menu.classList.remove('active');
    buttons.contact.classList.remove('active');
    homePage(content);
})

buttons.menu.addEventListener('click', function(){
    this.classList.add('active');
    buttons.contact.classList.remove('active');
    buttons.home.classList.remove('active');
    menuPage(content);
})


console.log(buttons);