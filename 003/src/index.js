import * as database from "./utils/database.js";
import { connectToDatabase, disconnectDatabase, databaseType } from "./utils/database.js";
console.log("Iniciando aplicação...\n");

database.connectToDatabase("postgres");
database.disconnectDatabase()
console.log(databaseType.typeData)
connectToDatabase("mysql");
disconnectDatabase()