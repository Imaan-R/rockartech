import fs from "fs";
import { csvAdapter } from "./csvAdapter";
import { determineFilePath } from "./determineFilePath";
import { Type } from "./types";
import path from "path";

jest.mock("fs");
jest.mock("./determineFilePath");
const mockedReadFileSync = fs.readFileSync as jest.Mock;

describe("csvAdapter function", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should read and parse CSV data", () => {
    const sampleData = `forename,email
John,john@gmail.co.uk
Jane,jane@gmail.co.uk`;

    const type: Type = "customer";

    const filePath = path.join(process.cwd(), `./src/data/${type}`);

    // Mock the determineFilePath function to return the file path
    // jest.spyOn(determineFilePath, "").mockReturnValue(filePath);

    (determineFilePath as jest.Mock).mockResolvedValue(filePath);

    // Mock the fs.readFileSync to return the sample data when called with the sample file path
    mockedReadFileSync.mockImplementation((path) => {
      console.log("filepath", path, filePath);
      if (path === filePath) {
        return sampleData;
      }
      return "";
    });

    // Call the csvAdapter function with the sample type
    const result = csvAdapter(type);

    // Define the expected parsed data
    const expectedData = [
      { name: "John", email: "john@gmail.co.uk" },
      { name: "Jane", email: "jane@gmail.co.uk" },
    ];

    // check the csvAdapter function returns the expected data
    expect(result).toEqual(expectedData);
  });
});
