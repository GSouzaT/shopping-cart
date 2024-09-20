import { IItem } from "../interfaces";

export async function addItem(userCart: IItem[], item: IItem): Promise<void> {
  const index = userCart.findIndex((cartItem) => cartItem.name === item?.name);
  if (index === -1 && item) {
    userCart.push(item);
    return;
  }

  userCart[index].quantity += 1;
}

export async function removeItem(userCart: IItem[], itemName: string) {
  const index = userCart.findIndex((item) => item.name === itemName);
  if (index !== -1) {
    console.log("Item not found");
    return;
  }

  if (userCart[index].quantity > 1) {
    userCart[index].quantity -= 1;
    return;
  }

  userCart.splice(index, index + 1);
}

export async function deleteItem(userCart: IItem[], itemName: string) {
  return userCart.filter((item) => item.name !== itemName);
}

export async function sumTotal(userCart: IItem[]) {
  const total = userCart.reduce(
    (total: number, item) => total + item.subtotal(),
    0
  );
  console.log("\n ------------");
  console.log(`Total: R$ ${total}`);
}

export async function displayCart(userCart: IItem[]) {
  console.log("-------------------------");
  console.log("Shopping cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | x${
        item.quantity
      } | Subtotal: R$ ${item.subtotal} \n`
    );
  });
}

export async function shippingPrice() {}
