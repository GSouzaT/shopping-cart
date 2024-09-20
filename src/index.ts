import { createItem } from "./services/item";
import * as cartService from "./services/cart";
import { IItem } from "./interfaces";

async function main() {
  const cart: IItem[] = [];
  const whishList: IItem[] = [];

  const item1 = await createItem("hotweels - flippin fast", 18.99, 1);
  const item2 = await createItem("hotweels - monster truck", 49.99, 1);
  const item3 = await createItem("vassoura", 14.99, 1);

  console.log(item1);
  console.log(item2);
  console.log(item3);

  await cartService.addItem(cart, item1);
  await cartService.addItem(cart, item3);

  await cartService.addItem(whishList, item2);

  await cartService.displayCart(whishList);

  await cartService.displayCart(cart);

  await cartService.addItem(cart, item1);
  await cartService.removeItem(cart, item3.name);

  await cartService.displayCart(cart);
  await cartService.sumTotal(cart);
}

main();
