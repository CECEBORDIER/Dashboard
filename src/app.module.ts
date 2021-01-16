import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
  imports: [UsersModule, AuthModule, MongooseModule.forRoot('mongodb+srv://Cedric:bordier@cluster0.lirpr.mongodb.net/users?retryWrites=true&w=majority')],
  controllers: [],
  providers: [],
})
export class AppModule {}
