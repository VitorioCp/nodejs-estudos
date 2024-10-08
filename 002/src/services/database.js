// Export default

exports.connectToDatabase = async (dataName) => {
  console.log("Se conectando ao banco:" + dataName);
};

exports.disconnectDatabase = async () => {
  //Lógica
  console.log("Desconectado");
};
