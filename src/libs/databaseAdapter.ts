import sqlite3 from "sqlite3";
import { promisify } from "util";
import { Type } from "./types";

export const databaseAdapter = async (tableName: Type) => {
  const db = new sqlite3.Database(process.env.DATABASE);

  const query = promisify(db.all).bind(db);

  return await query(`SELECT * FROM ${tableName}`);
};
