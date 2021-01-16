import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/users/dto/User';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { IUserService } from './user';

@Injectable()
export class UserService implements IUserService {
    constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) { }

    async create(userDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(userDto);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    private users: UserDto[] = [];

    createUser(user: UserDto) {
        return this.users.push(user);
    }
    getUser(): UserDto[] {
        return this.users;
    }
    updateUser() {
        throw new Error('Method not implemented.');
    }
    deleteUser() {

    }
    getUserByUserName(userName: string): UserDto | undefined {
        return this.users.find((user) => user.userName === userName);
    }
}
