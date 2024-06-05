import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
  types,
} from "@mikro-orm/core";
import { CommentModel } from "./comment.js";

@Entity({ tableName: "movies" })
export class MovieModel {
  @PrimaryKey({
    type: types.integer,
    autoincrement: true,
  })
  public declare id: number;

  @Property({
    type: types.string,
    unique: true,
  })
  public declare title: string;

  @OneToMany({
    entity: () => CommentModel,
    mappedBy: "movie",
  })
  public comments = new Collection<CommentModel>(this);
}
