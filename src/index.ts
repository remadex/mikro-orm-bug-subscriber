import { createConnection } from "./connection.js";
import { createData } from "./create-data.js";

const orm = await createConnection();
// createData(orm);

console.log("Connected to the DB");
