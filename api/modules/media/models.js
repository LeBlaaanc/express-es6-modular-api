import mongoose, { Schema } from 'mongoose';

export const Media = mongoose.model('Media', 
    new Schema({
        filename: { type: String, required: true },
        location: { type: String, required: true },
        tags: Array,
        created_at: Date,
        updated_at: Date
    })
);