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

    // CONTENT
    const body = document.createElement('div');
    body.id = 'text';
    display.appendChild(body);

    return {home, menu, contact};
}



export let homePage = (arg)=> {
    arg.innerHTML = '';
    let text = document.createElement('p');
    text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis aliquam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Dignissim diam quis enim lobortis scelerisque. Cursus metus aliquam eleifend mi in. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Vel risus commodo viverra maecenas accumsan lacus vel. Amet venenatis urna cursus eget nunc scelerisque viverra. Maecenas ultricies mi eget mauris pharetra et ultrices. Auctor eu augue ut lectus arcu bibendum at varius vel. Morbi tristique senectus et netus et malesuada fames ac. Ut venenatis tellus in metus vulputate. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Ultricies tristique nulla aliquet enim. Nibh venenatis cras sed felis. Fringilla ut morbi tincidunt augue interdum velit euismod.'
    arg.appendChild(text);
}