import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { Db, MongoClient } from "mongodb";
import { mongodbUrl } from "../config/keys";

const client = new MongoClient(mongodbUrl);
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db ,{
    client,
  }),
  emailAndPassword :{
    enabled : true,
  }
});
