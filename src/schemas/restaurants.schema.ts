import { Schema } from "mongoose";

import { _restaurant } from "src/interfaces/interfaces.interface";

export const RestaurantSchema = new Schema<_restaurant>({
    name_restaurant: {
        type: String,
        required: true
    },
    dishes: {
        type: {
            name_dishe: {
                type: String,
                required: true
            },
            ingredients: {
                type: [String],
                required: true
            }
        }
    }
})

export type RestaurantDoc = _restaurant & Document