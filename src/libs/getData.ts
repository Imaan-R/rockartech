import { databaseAdapter } from "./databaseAdapter";
import { csvAdapter } from "./csvAdapter";
import { Customer, Product, Type } from "./types";

export const getData = async (type: Type): Promise<Customer | Product> => {
  if (process.env.DATA_SOURCE_TYPE === "CSV") {
    return await csvAdapter(type);
  }

  if (process.env.DATA_SOURCE_TYPE === "DB_CONNECTION") {
    return await databaseAdapter(type);
  }
};
