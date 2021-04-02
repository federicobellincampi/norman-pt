export interface MuscleGroupModel {
    imgUrl: string;
    titolo: string;
    livello: CardRepsLevelModel;
    schede: LevelModel; 
    scheda1?: any;
}

export interface CardRepsLevelModel {
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