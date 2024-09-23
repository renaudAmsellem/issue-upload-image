import Medusa from "@medusajs/medusa-js";
import path from "path";

const medusa = new Medusa({
  baseUrl: "http://localhost:9000",
  maxRetries: 2,
  apiKey: "some_token",
});

const filePath = path.resolve("./tmp", "image.jpg");

try {
  const { uploads } = await medusa.admin.uploads.create(filePath);
  console.log(uploads);
} catch (error) {
  console.log(error);
}
