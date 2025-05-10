import fs from "fs";
import path from "path";
import ShapeFactory from "./ShapeFactory.js";
import logger from "./Logger.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import ShapeValidator from "./ShapeValidator.js";
import Warehouse from "./Warehouse.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataFilePath = path.join(__dirname, "..", "data", "shapes.txt");

const warehouse = new Warehouse();

fs.readFile(dataFilePath, "utf8", (err, data) => {
  if (err) {
    logger.error("Error reading file:", err);
    return;
  }

  const lines = data.split("\n");
  lines.forEach((line) => {
    const parts = line.trim().split(" ").filter(Boolean);
    try {
      if (parts.length === 6) {
        // Треугольник
        const [x1, y1, x2, y2, x3, y3] = parts.map(Number);

        if ([x1, y1, x2, y2, x3, y3].some(isNaN))
          throw new Error("Invalid coordinates");

        const pointA = ShapeFactory.createPoint(x1, y1);
        const pointB = ShapeFactory.createPoint(x2, y2);
        const pointC = ShapeFactory.createPoint(x3, y3);

        const triangle = ShapeFactory.createTriangle(
          pointA,
          pointB,
          pointC,
          warehouse
        );

        if (triangle.isCollinear()) {
          logger.warn(
            `Points ${line} are collinear and do not form a triangle.`
          );
          return;
        }

        logger.info(
          `Triangle created with area:${triangle.getArea()} and perimeter:${triangle.getPerimeter()}`
        );
      } else if (parts.length >= 8) {
        // Конус
        // apexX apexY apexZ baseX baseY baseZ height radius [id]
        const [apexX, apexY, apexZ, baseX, baseY, baseZ, height, radius, id] =
          parts;

        const nums = [
          apexX,
          apexY,
          apexZ,
          baseX,
          baseY,
          baseZ,
          height,
          radius,
        ].map(Number);

        if (nums.some(isNaN)) throw new Error("Invalid cone parameters");

        const coneId = id || "";

        const apex = ShapeFactory.createPoint(nums[0], nums[1], nums[2]);
        const baseCenter = ShapeFactory.createPoint(nums[3], nums[4], nums[5]);

        const cone = ShapeFactory.createCone(
          apex,
          baseCenter,
          warehouse,
          nums[6],
          nums[7],
          coneId
        );

        if (!ShapeValidator.isValidCone(cone)) {
          logger.warn(`Invalid cone parameters in line: ${line}`);
          return;
        }

        logger.info(
          `Cone created with id:${cone.id}, height:${cone.height}, radius:${cone.radius}`
        );
      } else {
        logger.warn(`Unknown shape data format in line: ${line}`);
      }
    } catch (e: any) {
      logger.error(`Error processing line "${line}": ${e.message}`);
    }
  });
});
