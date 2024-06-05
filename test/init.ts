import { MikroORM } from "@mikro-orm/sqlite";
import { CommentModel } from "../src/models/comment.js";
import { MovieModel } from "../src/models/movie.js";
import { TagModel } from "../src/models/tag.js";
import { UpdateSubscriber } from "../src/subscribers/update.js";
import { SubscriberSeeder } from "./subscriber.seed.js";
import { SeedManager } from "@mikro-orm/seeder";
import { CommentTagModel } from "../src/models/comment-tag.js";

export async function initTestApp() {
  const orm = await MikroORM.init({
    debug: false,
    dbName: ":memory:",
    entities: [MovieModel, CommentModel, TagModel, CommentTagModel],
    subscribers: [new UpdateSubscriber()],
    extensions: [SeedManager],
  });
  await orm.schema.createSchema();
  await orm.seeder.seed(SubscriberSeeder);
  return orm;
}
