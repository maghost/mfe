import faker from 'faker/locale/pt_BR';

let products = '<ul>';

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<li>${name}</li>`;
}

products += '</ul>';

document.getElementById('dev-products').innerHTML = products;
