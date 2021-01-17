import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { DicordStrategy } from './strategies';

@Module({
  controllers: [AuthController],
  providers: [AuthService, DicordStrategy]
})
export class AuthModule { }


// 48