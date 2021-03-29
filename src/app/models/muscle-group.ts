export interface MuscleGroupModel {
    imgUrl: string;
    titolo: string;
    livello: CardDifficultyModel;
    schede: LevelModel; 
    scheda1?: any;
}

export interface CardDifficultyModel {
    facile: string;
    medio: string;
    difficile: string;
}

export interface LevelModel {
    livello1: ExerciseModel[];
    livello2: ExerciseModel[];
    livello3?: ExerciseModel[];
}

export interface ExerciseModel {
    nome: string;
    ripetizioni: string | number;
    urlVideo: string;
}