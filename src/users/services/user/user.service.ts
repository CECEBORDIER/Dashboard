import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/users/dto/User';
import { IUserService } from './user';

@Injectable()
export class UserService implements IUserService {
    
    
    private users: UserDto[]= [];

    createUser(user: UserDto) {
        return this.users.push(user);
    }
    getUser(): UserDto[]{
        return this.users;
    }
    updateUser() {
        throw new Error('Method not implemented.');
    }
    deleteUser() {
       
    }
    getUserByUserName(userName: string): UserDto | undefined {
        return this.users.find((user) => user.userName===userName);
    }
}
