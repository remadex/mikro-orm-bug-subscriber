import { Entity, ManyToOne } from "@mikro-orm/core";
import { CommentModel } from "./comment.js";
import { TagModel } from "./tag.js";

@Entity()
export class CommentTagModel {
  @ManyToOne({ primary: true, entity: () => CommentModel })
  comment: CommentModel;

  @ManyToOne({ primary: true, entity: () => TagModel })
  tag: TagModel;
}
