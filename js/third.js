const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1> My dynamic section</h1>
<p>Extra text added inside paragraph</p>
<ul>
     <li>first Item</li>
     <li>first Item</li>
     <li>first Item</li>
     <li>first Item</li>
</ul>

`

main.appendChild(section);