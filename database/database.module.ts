import { Module } from '@nestjs/common';
// import { DatabaseResolver } from './database.resolver';
import { DatabaseService } from './database.service';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
