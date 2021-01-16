import { UserDto } from "src/users/dto/User";

export interface IUserService{
    createUser(user: UserDto);
    getUser();
    updateUser();
    deleteUser();
    getUserByUserName(userName: string): UserDto | undefined;
}