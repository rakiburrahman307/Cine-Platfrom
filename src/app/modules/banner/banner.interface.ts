import { Model } from 'mongoose';

export type IBanner = {
     name: string;
     videoUrl: string;
     thumbnailUrl: string;
};

export type BannerModel = Model<IBanner>;
