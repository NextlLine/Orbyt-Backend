import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/util/constrants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/util/guard';


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
  providers: [
  {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },
],
})
export class AppModule { }
