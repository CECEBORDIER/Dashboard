import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { PostsController } from './controllers/posts/posts.controller';
import { UserService } from './services/user/user.service';
import { PostService } from './services/post/post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema,  } from './schemas/user.schema';

@Module({
  // bug to User.name if I put something else than name. 
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],

  controllers: [UsersController, PostsController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
    PostService],
})
export class UsersModule { }
