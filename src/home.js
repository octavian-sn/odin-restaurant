import display from './index.js';
import dog from './images/dog.jpg';

export default function home() {
    // HEADER
    const header = document.createElement('div');
    header.id = 'header';

    const headerBackground = document.createElement('div');
    headerBackground.id = 'background';
    header.appendChild(headerBackground);
    const overlay = document.createElement('div');
    overlay.id = 'overlay'
    const title = document.createElement('h1');
    title.innerText = 'La cucina de NODE';
    overlay.appendChild(title);
    header.appendChild(overlay);

    display.appendChild(header);

    // BUTTONS
    const buttons = document.createElement('div');
    buttons.id = 'buttons';

    const home = document.createElement('button');
    home.innerText = 'HOME';
    buttons.appendChild(home);
    const menu = document.createElement('button');
    menu.innerText = 'MENU';
    buttons.appendChild(menu);
    const contact = document.createElement('button');
    contact.innerText = 'CONTACT';
    buttons.appendChild(contact);

    display.appendChild(buttons);

    // CONTENT
    const body = document.createElement('div');
    body.id = 'text';
    display.appendChild(body);

    return {home, menu, contact};
}



export let homePage = (arg)=> {
    arg.innerHTML = '';
    let text = document.createElement('p');
    text.innerText = "Initially I wanted to stuff this section with a lorem ipsum, but then I thought that it might be better if I actually wrote something useful here. :D \n\n The reason why this doesn't look too fancy is because I have been focusing mainly on clear, dry code, using modules, and creating all of this using only JavaScript. \n\n I find it rather difficult understanding exactly what should go where in modules since it appears to me as everything is intrinsically interconnected and interdependent, but I am getting there, I think it's mostly down to how I am using scope and closure. \n\n Web dev is hard, but I love it! \n Thank you for taking the time to read this! Here's a puppy! <3"
    arg.appendChild(text);
    const puppy = document.createElement('img');
    puppy.id = 'puppy';
    puppy.src = dog;
    arg.appendChild(puppy);
}