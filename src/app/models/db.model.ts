export interface DB {
    schedeAllenamento: SchedeAllenamento;
  }
  export interface SchedeAllenamento {
    donna: Donna;
    uomo: Uomo;
  }
  export interface Donna {
    perderepeso: MuscleGroupModel[]
    tonificarsi: MuscleGroupModel[]
  }

  export interface Uomo {
    perderepeso: MuscleGroupModel[]
    massamuscolare: MuscleGroupModel[]
  }
  
  export interface MuscleGroupModel {
    imgUrl: string;
    titolo: string;
    livello: CardRepsLevelModel;
    schede: LevelModel; 
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