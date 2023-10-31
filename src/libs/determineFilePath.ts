export const determineFilePath = (type: string) => {
  if (type === "product") {
    return "product.csv";
  }
  return "customer.csv";
};
