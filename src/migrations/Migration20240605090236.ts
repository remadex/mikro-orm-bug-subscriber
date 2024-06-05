import { Migration } from '@mikro-orm/migrations';

export class Migration20240605090236 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `movies` (`id` integer not null primary key autoincrement, `title` text not null);');
    this.addSql('create unique index `movies_title_unique` on `movies` (`title`);');

    this.addSql('create table `comments` (`id` integer not null primary key autoincrement, `content` text not null, `movie_id` integer not null, constraint `comments_movie_id_foreign` foreign key(`movie_id`) references `movies`(`id`) on update cascade);');
    this.addSql('create index `comments_movie_id_index` on `comments` (`movie_id`);');

    this.addSql('create table `tags` (`id` integer not null primary key autoincrement, `name` text not null);');

    this.addSql('create table `comments_tags` (`comment_model_id` integer not null, `tag_model_id` integer not null, constraint `comments_tags_comment_model_id_foreign` foreign key(`comment_model_id`) references `comments`(`id`) on delete cascade on update cascade, constraint `comments_tags_tag_model_id_foreign` foreign key(`tag_model_id`) references `tags`(`id`) on delete cascade on update cascade, primary key (`comment_model_id`, `tag_model_id`));');
    this.addSql('create index `comments_tags_comment_model_id_index` on `comments_tags` (`comment_model_id`);');
    this.addSql('create index `comments_tags_tag_model_id_index` on `comments_tags` (`tag_model_id`);');
  }

}
