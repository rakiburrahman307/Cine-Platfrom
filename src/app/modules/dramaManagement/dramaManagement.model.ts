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
        required: true,
    },
    rating: {
        type: Number,
        required: false,
    },
    views: {
        type: Number,
        required: false,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});