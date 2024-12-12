import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { MetaController } from './meta/meta.controller';
import { MetaService } from './meta/meta.service';
import { MetaModule } from './meta/meta.module';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'pguser',
            password: 'password',
            database: 'nestjs',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
            autoLoadEntities: true,
        }),
        CategoriesModule,
        ProductsModule,
        MetaModule,
    ],
    controllers: [AppController, MetaController],
    providers: [AppService, MetaService],
})
export class AppModule {
}
