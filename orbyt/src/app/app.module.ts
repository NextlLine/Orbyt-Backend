import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/util/jwt.constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/util/jwt.guard';
import { FinanceModule } from 'src/modules/financeWallet/finance.wallet.module';
import { UserModule } from 'src/modules/user/user.module';
import { TransactionModule } from 'src/modules/transaction/transaction.module';


@Module({
  imports: [
    PrismaModule,
    AuthModule,
    FinanceModule,
    TransactionModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: jwtConstants.signOptions
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
