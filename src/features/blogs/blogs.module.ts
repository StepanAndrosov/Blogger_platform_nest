import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsService } from './application/blogs.service';
import { BlogsRepository } from './infrastructure/blogs.repository';
import { BlogsQueryRepository } from './infrastructure/blogs.query-repository';
import { BlogsController } from './api/blogs.controller';
import { Blog, BlogSchema } from './domain/blog.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
  controllers: [BlogsController],
  providers: [BlogsService, BlogsRepository, BlogsQueryRepository],
  exports: [BlogsRepository, MongooseModule],
})
export class BlogsModule {}
