import faker from 'faker/locale/pt_BR';

const mount = (el) => {
  const totalItems = faker.random.number({ min: 2, max: 10 });
  const cartText = `<p>Você possui ${totalItems} itens no carrinho</p>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-cart');

  // Assuming our container doesn't have an element
  // with id 'dev-cart'
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

export { mount };
