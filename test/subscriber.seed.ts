import type { EntityManager } from "@mikro-orm/sqlite";
import { Seeder } from "@mikro-orm/seeder";
import { MovieModel } from "../src/models/movie.js";
import { TagModel } from "../src/models/tag.js";
import { CommentModel } from "../src/models/comment.js";

export class SubscriberSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const movie = em.create(MovieModel, {
      id: 1,
      title: "Deadpool 3",
    });
    const tag = em.create(TagModel, {
      name: "Happy",
    });
    const tag2 = em.create(TagModel, {
      name: "Fun",
    });
    const tag3 = em.create(TagModel, {
      name: "Sad",
    });

    const comment = em.create(CommentModel, {
      content: "Damn, so funny",
      tags: [tag, tag2],
    });

    movie.comments.add(comment);
  }
}
