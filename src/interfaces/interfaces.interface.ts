import { Document } from "mongoose";

interface _restaurant extends Document {
    name_restaurant: string;
    dishes: {
        name_dishe: string;
        ingredients: string[];
    }
}

export {
    _restaurant
}