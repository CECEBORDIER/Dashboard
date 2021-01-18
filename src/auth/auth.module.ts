import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { DicordStrategy } from './strategies';
import { FacebookStrategy } from './strategies/IndexFb';

@Module({
  controllers: [AuthController],
  providers: [AuthService, DicordStrategy, FacebookStrategy]
})
export class AuthModule { }


// 48