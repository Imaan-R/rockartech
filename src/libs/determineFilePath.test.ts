import { determineFilePath } from "./determineFilePath";

describe("determineFilePath", () => {
  it('should return "product.csv" for input "product"', () => {
    const result = determineFilePath("product");
    expect(result).toBe("product.csv");
  });

  it('should return "customer.csv" for any input other than "product"', () => {
    const result = determineFilePath("customerType");
    expect(result).toBe("customer.csv");
  });
});
