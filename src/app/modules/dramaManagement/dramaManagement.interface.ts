export interface IDrama {
    title: string;
    description: string;
    thumbnail: string;
    genre: string[];
    releaseDate: Date;
    duration: number;
    language: string;
    country: string;
    rating: number;
    views: number;
    status: 'ongoing' | 'completed';
    isDeleted: boolean;
}