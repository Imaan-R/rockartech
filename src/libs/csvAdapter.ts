import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import { determineFilePath } from "./determineFilePath";
import { Type } from "./types";

export const csvAdapter = (type: Type) => {
  const filePath = path.join(
    process.cwd(),
    `./src/data/${determineFilePath(type)}`
  );

  return parse(fs.readFileSync(filePath, "utf8"), {
    columns: true,
    skip_empty_lines: true,
  });
};
