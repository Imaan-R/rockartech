import { getData } from "../../libs/getData";

export const resolvers = {
  Query: {
    customer: () => getData("customer"),
    product: () => getData("product"),
  },
};
