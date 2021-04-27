const shoppingCartList = [
  { product: 'pillow', price: 10, category: 'rooms' },
  { product: 'carpet', price: 50.3, category: 'living room' },
  { product: 'desk', price: 130, category: 'home' },
  { product: 'bed', price: 230, category: 'rooms' },
];

const total = shoppingCartList.reduce((accum, element) => {
  const subtotal = accum + element.price;
  return subtotal;
}, 0);

console.log('total', total);

/* const elementsCategoryRooms = shoppingCartList.filter(
  (el) => el.category === 'rooms'
);
const totalCategoryRooms = elementsCategoryRooms.reduce((accum, el) => {
  const subtotal = accum + el.price;
  return subtotal;
}, 0); */

const getTotalByCategoryRooms = (accum, el) => {
  const subtotal = accum + el.price;
  return subtotal;
};

const totalCategoryRooms = shoppingCartList
  .filter((el) => el.category === 'rooms')
  .reduce(getTotalByCategoryRooms, 0);

console.log('totalCategoryRooms', totalCategoryRooms);
