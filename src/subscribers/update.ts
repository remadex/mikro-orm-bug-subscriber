import { EventArgs, EventSubscriber } from "@mikro-orm/core";
import { TagModel } from "../models/tag.js";
import { MovieModel } from "../models/movie.js";
import { CommentModel } from "../models/comment.js";
import { CommentTagModel } from "../models/comment-tag.js";

export class UpdateSubscriber implements EventSubscriber {
  getSubscribedEntities() {
    return [TagModel, MovieModel, CommentModel, CommentTagModel];
  }
  async afterUpdate(
    args: EventArgs<TagModel | MovieModel | CommentModel | CommentTagModel>
  ): Promise<void> {
    console.log("Entity updated:", args.entity.constructor.name, args.entity);
  }
  // async afterCreate(
  //   args: EventArgs<TagModel | MovieModel | CommentModel | CommentTagModel>
  // ): Promise<void> {
  //   console.log("Entity created:", args.entity.constructor.name, args.entity);
  // }
}
