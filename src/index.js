import './style.css';
import home from './home.js';
import { body } from './home.js';

const display = document.getElementById('content');
export default display;

home();
(function changeContent() {
    let content = body();
    let text = document.createElement('p');
    text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis aliquam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Dignissim diam quis enim lobortis scelerisque. Cursus metus aliquam eleifend mi in. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Vel risus commodo viverra maecenas accumsan lacus vel. Amet venenatis urna cursus eget nunc scelerisque viverra. Maecenas ultricies mi eget mauris pharetra et ultrices. Auctor eu augue ut lectus arcu bibendum at varius vel. Morbi tristique senectus et netus et malesuada fames ac. Ut venenatis tellus in metus vulputate. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Ultricies tristique nulla aliquet enim. Nibh venenatis cras sed felis. Fringilla ut morbi tincidunt augue interdum velit euismod.'
    content.appendChild(text);
})()
