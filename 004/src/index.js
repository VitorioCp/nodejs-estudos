import * as cartService from "./services/cart.js";
import { createItem } from "./services/item.js";
const cart = [];

const item1 = await createItem("sabonete", 20.99, 1);
const item2 = await createItem("desodorante", 20, 4);
const item3 = await createItem("desodorante", 20, 4);

async function Main() {
  const cart = [];
  console.log("Welcome to the your Shoppe Cart!");
  console.log(item1.subtotal());
  await cartService.addItem(cart, item1);
  await cartService.addItem(cart, item2);
  await cartService.addItem(cart, item3);

  console.log(cart);
  console.log("O total do seu carrinho é:");
  await cartService.calculaeTotal(cart);
  await cartService.deleteItem(cart, "sabonete");
  console.log("Novo total é:");
  await cartService.calculaeTotal(cart);

  await cartService.displayCart(cart);
  await cartService.removeItem(cart, item3);
  await cartService.removeItem(cart, item3);
  await cartService.removeItem(cart, item3);

  await cartService.removeItem(cart, item3);

  await cartService.removeItem(cart, item3);

  await cartService.displayCart(cart);
}

Main();
