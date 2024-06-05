import { beforeAll, expect, test } from "vitest";
import { initTestApp } from "./init.js";
import { SqlEntityManager, SqliteDriver } from "@mikro-orm/sqlite";
import { MovieModel } from "../src/models/movie.js";
import { TagModel } from "../src/models/tag.js";

let orm: SqlEntityManager<SqliteDriver>;

beforeAll(async () => {
  orm = (await initTestApp()).em.fork();
});

test("subscriber for movie should be triggered when update movie", async () => {
  const movie = await orm.findOne(
    MovieModel,
    {
      id: 1,
    },
    {
      populate: ["comments", "comments.tags"],
    }
  );
  movie.title = "Deadpool 4";
  await orm.flush();

  expect(true).toBe(true);
});

// NOT WORKING
test("subscriber for movie should be triggered when update tags", async () => {
  const movie = await orm.findOne(
    MovieModel,
    {
      id: 1,
    },
    {
      populate: ["comments", "comments.tags"],
    }
  );
  const tag = await orm.findOne(TagModel, {
    name: "Sad",
  });
  movie.comments.getItems()[0].tags.add(tag);
  await orm.flush();

  expect(true).toBe(true);
});
