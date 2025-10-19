import mongoose from "mongoose";
import { IDrama } from "./dramaManagement.interface";

const DramaSchema = new mongoose.Schema<IDrama>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
    },
    genre: {
        type: [String],
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: false,
    },
    rating: {
        type: Number,
        required: false,
    },
    views: {
        type: Number,
        required: false,
    },
    status: {
        type: String,
        enum: ['ongoing', 'completed'],
        default: 'ongoing',
        required: false,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});


export const DramaModel = mongoose.model<IDrama>('Drama', DramaSchema);