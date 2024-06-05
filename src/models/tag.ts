import {
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
  Reference,
  types,
} from "@mikro-orm/core";
import { MovieModel } from "./movie.js";
import { CommentModel } from "./comment.js";

@Entity({
  tableName: "tags",
})
export class TagModel {
  @PrimaryKey({
    type: types.integer,
    autoincrement: true,
  })
  public declare id: number;

  @Property({
    type: types.text,
  })
  public declare name: string;

  @ManyToMany({
    entity: () => CommentModel,
    mappedBy: "tags",
  })
  public declare comments: Reference<CommentModel>;
}
