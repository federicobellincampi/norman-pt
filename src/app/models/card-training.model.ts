export interface CardTraining {
    exercises: Exercise[]
}

export interface Exercise {
    id?: number;
    reupero: string;
    ripetizioni: number;
    serie: number;
    url: string;
}