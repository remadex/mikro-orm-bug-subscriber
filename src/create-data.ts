import { MikroORM } from "@mikro-orm/sqlite";
import { MovieModel } from "./models/movie.js";
import { CommentModel } from "./models/comment.js";
import { TagModel } from "./models/tag.js";

export async function createData(orm: MikroORM) {
  const emFork = orm.em.fork();
  const movie = emFork.create(MovieModel, {
    title: "Deadpool 3",
  });
  const tag = emFork.create(TagModel, {
    name: "Happy",
  });
  const tag2 = emFork.create(TagModel, {
    name: "Fun",
  });

  const comment = emFork.create(CommentModel, {
    content: "Damn, so funny",
    tags: [tag, tag2],
  });

  movie.comments.add(comment);

  await emFork.flush();
}
