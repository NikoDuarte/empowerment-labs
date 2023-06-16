import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecommendationController } from './controllers/recommendation.controller';
import { RestaurantModel } from './models/restaurant.models';
import { RestaurantDoc, RestaurantSchema } from './schemas/restaurants.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cloud_p:az5fJ1wnEBc2eAKA@pruebas.w2ui7g2.mongodb.net/labs'),
    MongooseModule.forFeature([{ name: 'Restaurant', schema: RestaurantSchema }])
  ],
  controllers: [RecommendationController],
  providers: [ RestaurantModel ],
})
export class AppModule {
  
  constructor() {
  }
  
}
