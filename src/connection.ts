import { MikroORM } from "@mikro-orm/sqlite";
import { MovieModel } from "./models/movie.js";
import { Migrator } from "@mikro-orm/migrations";
import { CommentModel } from "./models/comment.js";
import { TagModel } from "./models/tag.js";
import { UpdateSubscriber } from "./subscribers/update.js";

export async function createConnection() {
  const orm = await MikroORM.init({
    dbName: "mikro-orm-bug-subscriber.sqlite",
    entities: [MovieModel, CommentModel, TagModel],
    extensions: [Migrator],
    subscribers: [new UpdateSubscriber()],
    debug: true,
  });

  const migration = orm.getMigrator();

  // await migration.createInitialMigration();
  await migration.up();

  return orm;
}
