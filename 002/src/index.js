const {getFullName} = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");



async function main() {
  //   console.log("Sua lista de produto:");
    getFullName("1", "carro");
  //   p.getFullName("2", "computador");
  //   p.getFullName("3", "mousepad");
  //   p.getProductLabel("Computador");

  console.log(config);
  database.connectToDatabase("Estudar");
}

main();
