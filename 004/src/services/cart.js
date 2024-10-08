//Adicionar item ✅
async function addItem(userCart, item) {
  userCart.push(item);
}

//Deletar item do carrinho ✅
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

//Remover um item - diminui um item ✅
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound == -1) {
    console.log("Item não encontrado");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

//calcular o total do carrinho ✅
async function calculaeTotal(userCart) {
  console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}

async function displayCart(userCart) {
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      } | Subtotal ${item.subtotal()} `
    );
  });
}

export { calculaeTotal, addItem, deleteItem, displayCart, removeItem };
