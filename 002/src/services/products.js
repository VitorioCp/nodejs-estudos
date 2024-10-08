//Todas as funções que lidam com o produto
const productType = {
    version: "digital",
    tax: "x1"
}

async function getFullName(codeId, productName) {
  console.log("\n");
  console.log(codeId + " -- " + productName);
}

async function getProductLabel(productName) {
  console.log("Product: " + productName);
}

async function deadBreakLine() {
    
}

module.exports = {
  getFullName,
  getProductLabel,
  
};
