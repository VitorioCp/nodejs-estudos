const databaseType = {
    userType: "admin",
    typeData: "datalocal"
}

async function connectToDatabase(dataName) {
    //lógica de conexão
    console.log("conectado ao banco " + dataName);
}
async function disconnectDatabase() {
    //lógica de conexão
    console.log("desconectando do banco de dados..." );
}

export {disconnectDatabase, connectToDatabase, databaseType};