import display from './index.js';

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
}

export function body() {
    const body = document.createElement('div');
    body.id = 'text';
    display.appendChild(body);
    return body;
}