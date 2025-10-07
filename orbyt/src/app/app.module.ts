import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/modules/auth/constrants';


@Module({
  imports: [
    PrismaModule,
    AuthModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }
    })],
  controllers: [],
  providers: [],
})
export class AppModule { }
