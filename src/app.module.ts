import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    // ObserveModule.forRoot({
    //   appKey: 'YOUR_APP_KEY',
    //   appSecret: 'YOUR_APP_SECRET',
    //   serviceId: 'taskflow-api',
    // }),
    PrismaModule,
    TasksModule,
    AuthModule,
    UsersModule,
    ProjectsModule,
    HealthModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
