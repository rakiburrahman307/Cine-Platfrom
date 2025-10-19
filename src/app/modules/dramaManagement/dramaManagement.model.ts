import mongoose from "mongoose";
import { IDrama } from "./dramaManagement.interface";

const dramaSchema = new mongoose.Schema<IDrama>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
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

// Query Middleware
dramaSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

dramaSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

dramaSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
});
export const DramaModel = mongoose.model<IDrama>('Drama', dramaSchema);