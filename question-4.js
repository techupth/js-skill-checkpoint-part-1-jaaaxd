// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function findLowestQuantity(arr) {
  let lowestFruit = "";
  let lowestQuantity = Infinity;

  for (item of arr) {
    if (item.quantity < lowestQuantity) {
      lowestQuantity = item.quantity;
      lowestFruit = item.name;
    }
  }
  return console.log(
    `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lowestFruit} ซึ่งมี ${lowestQuantity} ชิ้น`
  );
}

findLowestQuantity(inventory);
