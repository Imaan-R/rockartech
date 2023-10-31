import { getData } from "./getData";
import { csvAdapter } from "./csvAdapter";
import { databaseAdapter } from "./databaseAdapter";

jest.mock("./csvAdapter");
jest.mock("./databaseAdapter");

describe("getData function", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should call csvAdapter when DATA_SOURCE_TYPE is CSV", async () => {
    process.env.DATA_SOURCE_TYPE = "CSV";

    const expectedData = { csvData: "data" };
    (csvAdapter as jest.Mock).mockResolvedValue(expectedData);

    const result = await getData("customer");

    expect(result).toEqual(expectedData);
    expect(csvAdapter).toHaveBeenCalledWith("customer");
  });

  it("should call databaseAdapter when DATA_SOURCE_TYPE is DB_CONNECTION", async () => {
    process.env.DATA_SOURCE_TYPE = "DB_CONNECTION";
    const expectedData = { dbData: "data" };
    (databaseAdapter as jest.Mock).mockResolvedValue(expectedData);

    const result = await getData("product");
    expect(result).toEqual(expectedData);
    expect(databaseAdapter).toHaveBeenCalledWith("product");
  });
});
