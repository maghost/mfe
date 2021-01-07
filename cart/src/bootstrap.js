import faker from 'faker/locale/pt_BR';

const totalItems = faker.random.number({ min: 2, max: 10 });
const cartText = `<p>Você possui ${totalItems} itens no carrinho</p>`;

document.getElementById('dev-cart').innerHTML = cartText;
