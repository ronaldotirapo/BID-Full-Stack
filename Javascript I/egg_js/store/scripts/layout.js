navSelector = document.getElementById('nav');
const optionsNav = [
  { title: 'Ofertas', linkTo: './ofertas.html' },
  { title: 'Cómo comprar', linkTo: './como-comprar.html' },
  { title: 'Costos y tarifas', linkTo: './costos-tarifas.html' },
  { title: 'Mis pedidos', linkTo: './mis-pedidos.html' },
  { title: 'Garantía', linkTo: './garantia.html' },
];

//Eliminación del ul anterior del header
navSelector.querySelector('ul').remove();

/* 
//Agregar objetos al header con map
navSelector.innerHTML = optionsNav
  .map((option) => `<a href="${option.linkTo}">${option.title}</a>`)
  .join(''); 
*/

//Agregar objetos al header con for of
navSelector.appendChild(document.createElement('ul'));
for (const option of optionsNav) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = option.title;
  a.setAttribute('href', option.linkTo);
  li.appendChild(a);
  navSelector.querySelector('ul').appendChild(li);
}

//Eliminando el contenedor anterior del div .columns-container del footer
footerSelector = document.querySelector('.columns-container');
footerSelector.innerHTML = '';

const optionsFooter = [
  ['Ofertas', 'Laptops', 'Audio', 'Auriculares'],
  ['Cómo comprar', 'Formas de pago', 'Envíos', 'Devoluciones'],
  ['Costos y tarifas', 'Impuestos', 'Facturación', ''],
  ['Mis pedidos', 'Pedir nuevamente', 'Lista de deseos', ''],
  ['Garantía', '', '', ''],
];

//Agregar objetos al footer con for of
for (const columna of optionsFooter) {
  const col = document.createElement('div');
  col.className = 'col';
  const ul = document.createElement('ul');
  for (const elemento of columna) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = elemento;
    li.appendChild(a);
    ul.appendChild(li);
  }
  col.appendChild(ul);
  footerSelector.appendChild(col);
}
