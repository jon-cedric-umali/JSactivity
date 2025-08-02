// Starter data
const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];

// Start coding here...
const cartWithTotal = cart.map(item => ({...item, totalPrice: item.price * item.quantity}));
console.log("Cart items with total price:");
cartWithTotal.forEach(item => console.log(`${item.name}: ₱${item.price} x ${item.quantity} = ₱${item.totalPrice}`));

const itemDescriptions = cart.map(item => `${item.name} - ₱${item.price}`);
console.log("Item descriptions:", itemDescriptions);

const totalCartValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log(`Total cart value: ₱${totalCartValue}`);

