import { Time } from "@angular/common";

export class Ocorrencia {
    id!: number;
    idUsuario!: number;
    numeroTalao!: number;
    boGcm!: number;
    dataCadastro!: string;
    dataOcorrencia!: string; 
    codOcorrencia!: string;
    viatura!: string;
    endereco!: string;
    encarregadoVtr!: string;    
    motorista!: string;
    
    kmInicial!: string;
    kmFinal!: string;

    horaInicial!: Time;
    horaFinal!: Time;

    auxiliar1!: string;
    auxiliar2!: string;
    auxiliar3!: string;
    auxiliar4!: string;

    obs!: string;

}
    