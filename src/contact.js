import address from './images/address.png';
export default function contactPage(arg) {
    arg.innerHTML = '';

    const contact = document.createElement('div');
    contact.id = 'contact';

    const ul = document.createElement('ul');
    for (const item in details) {
        const li = document.createElement('li');
        li.textContent = item + ': ' + details[item];
        ul.appendChild(li);
    }
    contact.appendChild(ul);

    const map = document.createElement('img');
    map.src = address;
    contact.appendChild(map);

    arg.appendChild(contact);
}

const details = {
    'Address': '1568 Feathers Hooves Drive',
    'City': 'Hicksville',
    'State': 'New York',
    'Zipcode': '11612',
    'Telephone': '631-627-6307',
    'E-mail': 'thisaddress@looksreal.com'
};