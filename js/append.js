//1. Where to add
const placeslist = document.getElementById('places-list');
// 2. What to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

// 3. add the child
placeslist.appendChild(li);

// 1.where to add
const mainContainer = document.getElementById('main-container');
// What to added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Thats Good';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Thats Good job';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Thats Good Future';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
<li>T-shirt</li>
<li>Pant</li>
<li>genji</li>
</ul>
`

mainContainer.appendChild(sectionDress);