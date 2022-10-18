export default function menuPage(arg) {
    arg.innerHTML = '';

    const menu = document.createElement('div');
    menu.id = 'menu';

    products.forEach(item => {
        const frame = document.createElement('div');
        frame.classList.add('dish');
        const title = document.createElement('h2');
        title.textContent = item.name;
        frame.appendChild(title);
        const info = document.createElement('p');
        info.textContent = item.description;
        frame.appendChild(info);
        const price = document.createElement('p');
        price.textContent = item.price;
        frame.appendChild(price);
        const picture = document.createElement('img');
        picture.src = item.picture;
        frame.appendChild(picture);

        menu.appendChild(frame);
    })

    arg.appendChild(menu);

}

const products = [
    {
        'name': 'Le Grand Salmon',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'picture': '../src/images/salmon.jpg',
        'price' : '399.99$'
    },
    {
        'name': 'Sizzlering Sandwich',
        'description': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'picture': '../src/images/sandwich.jpg',
        'price' : '26.99$'
    },
    {
        'name': 'The Perverted Pancake',
        'description': 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'picture': '../src/images/pancake.jpg',
        'price' : '128.99$'
    }
]

