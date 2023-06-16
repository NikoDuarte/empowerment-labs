import { Controller, Body, Post } from '@nestjs/common';
import { RestaurantModel } from 'src/models/restaurant.models';

@Controller('recommendation')
export class RecommendationController {
    constructor(private restaurantModel: RestaurantModel) { }

    @Post()
    async getRecommendation(@Body() preferences: any): Promise<any> {
        const { likes } = preferences
        const recommendation = await this.restaurantModel.getRecommendation(
            likes,
        );
        const restaurantNames = recommendation.map(restaurant => restaurant.name_restaurant);
        if (recommendation) {
            return `Segun los gustos inscritos te recomendamos estos restaurantes: ${restaurantNames.join(", ")}`;
        } else {
            return 'No se encontró ninguna recomendación';
        }
    }
}
