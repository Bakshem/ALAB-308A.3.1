// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  return new Promise((resolve, reject) => {
    if (id < 1 || id > 10) {
      return reject(new Error("Invalid id!"));
    }
    central(id);
  });
}
