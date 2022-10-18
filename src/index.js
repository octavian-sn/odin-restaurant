import './style.css';
import home from './home.js';
import { body, homePage } from './home.js';

const display = document.getElementById('content');
export default display;

const buttons = home();
const content = document.getElementById('text');

buttons.home.addEventListener('click', function(){
    this.classList.add('active');
    homePage(content);
})


console.log(buttons);