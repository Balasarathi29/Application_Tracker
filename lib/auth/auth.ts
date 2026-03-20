import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { redirect } from "next/dist/server/api-utils";
import { headers } from "next/headers";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is not set");

const client = new MongoClient(uri);
await client.connect();          // top-level await is supported in Next routes
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db ,{
    client,
  }),
  emailAndPassword :{
    enabled : true,
  }
});

export async function getSession() {
  const result = await auth.api.getSession({
    headers : await headers(),
  });
  return result
}

export async function signOut() {
  const result = await auth.api.signOut({
    headers : await headers(),
  });
  if (result.success) {
    redirect("/sign-in");
  }
}