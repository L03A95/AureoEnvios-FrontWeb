export interface Credenciales {
    email: string;
    username: string;
    password: string;
    codigoDeLlamada: string;
    celular: string;
    roles: { id: number }[];
};

export class PersonaMoral {
    tipoUsuario: string;
    credenciales: Credenciales;

    constructor(tipoUsuario: string, credenciales: Credenciales) {
        this.tipoUsuario = tipoUsuario;
        this.credenciales = credenciales;
    };

};

export {};