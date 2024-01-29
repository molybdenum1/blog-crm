import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const newPost = new Post();
    newPost.title = createPostDto.title;
    newPost.content = createPostDto.content;
    newPost.userId = createPostDto.userId;

    return this.postRepository.save(newPost);
  }

  async findAll() {
    return this.postRepository.find({
      relations: ['userId'],
    });
  }

  async findOne(id: number): Promise<Post> {
    return this.postRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOne({
      where: { id },
    });
    post.title = updatePostDto.title;
    post.content = updatePostDto.content;
    post.userId = updatePostDto.userId;

    return this.postRepository.save(post);
  }

  async remove(id: number) {
    const post = await this.postRepository.findOne({
      where: { id },
    });
    return this.postRepository.remove(post);
  }
}
