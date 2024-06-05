import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryKey,
  Property,
  Reference,
  types,
} from "@mikro-orm/core";
import { MovieModel } from "./movie.js";
import { TagModel } from "./tag.js";
import { CommentTagModel } from "./comment-tag.js";

@Entity({
  tableName: "comments",
})
export class CommentModel {
  @PrimaryKey({
    type: types.integer,
    autoincrement: true,
  })
  public declare id: number;

  @Property({
    type: types.text,
  })
  public declare content: string;

  @ManyToOne({
    entity: () => MovieModel,
    ref: true,
    inversedBy: "comments",
  })
  public declare movie: Reference<MovieModel>;

  @ManyToMany({
    entity: () => TagModel,
    inversedBy: "comments",
    pivotEntity: () => CommentTagModel,
  })
  public tags = new Collection<TagModel>(this);
}
