import faker from 'faker/locale/pt_BR';

const mount = (el) => {
  let products = '<ul>';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<li>${name}</li>`;
  }

  products += '</ul>';

  el.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-products');

  // Assuming our container doesn't have an element
  // with id 'dev-products'
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

export { mount };
