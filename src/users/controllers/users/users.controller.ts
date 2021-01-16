import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, Patch, Post } from '@nestjs/common';
import { throws } from 'assert';
import { UserDto } from 'src/users/dto/User';
import { UserService } from 'src/users/services/user/user.service';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UserService) {

    }

    @Get()
    getUsers() {
        return this.userService.getUser();
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    createUser(@Body() user: UserDto) {
        this.userService.createUser(user);
    }
    @Patch()
    updateUser() {
    }

    @Delete()
    deleteUser() {
        this.userService.deleteUser();
    }
    @Get(':userName')
    @HttpCode(HttpStatus.OK)
    getUserByUserName(@Param('userName') userName: string) {
        const user =  this.userService.getUserByUserName(userName);
        return user ? user :{};
    }
}
