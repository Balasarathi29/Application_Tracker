
if (!process.env.MONGODB_URL) {
  throw new Error("MONGODB_URL is not set");
}
export const mongodbUrl = process.env.MONGODB_URL;