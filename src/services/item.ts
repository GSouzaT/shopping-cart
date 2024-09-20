import { IItem } from "../interfaces";

export async function createItem(
  name: string,
  price: number,
  quantity: number
): Promise<IItem> {
  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
  };
}
