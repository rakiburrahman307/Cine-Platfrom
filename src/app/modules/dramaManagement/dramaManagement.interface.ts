export interface IDrama {
    title: string;
    description: string;
    thumbnailUrl: string;
    genre: string[];
    releaseDate: Date;
    duration: number;
    language: string;
    country: string;
    rating: number;
    views: number;
    isDeleted: boolean;
}