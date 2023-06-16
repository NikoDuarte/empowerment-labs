// restaurant.model.ts
import { Model, Document } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RestaurantDoc } from 'src/schemas/restaurants.schema';

@Injectable()
export class RestaurantModel {
    constructor(
        @InjectModel('Restaurant') private restaurantModel: Model<RestaurantDoc>,
    ) { }

    async getRecommendation(preferences: string[]): Promise<RestaurantDoc[]> {
        const query = {
            "dishes.ingredients": { $in: preferences },
        };
        const recommendation = await this.restaurantModel.find(query).exec();
        return recommendation;
    }
}
