export interface Talleres {
    _id?:            string;
    NombreTaller:   string;
    direccion:      string;
    telefonoTaller: string;
    representante:  string;
    servicios:      string[];
    __v?:            number;
}

export interface Cliente {
    _id?:      string;
    Nombre:   string;
    Correo:   string;
    ci:       string;
    telefono: string;
    __v?:      number;
}
export interface Existe {
    ci:String;
}

export interface Cita {
    _id?:           string;
    idcliente?:     Idcliente;
    idtaller?:      Idtaller;
    vehiculo:      Vehiculo;
    trabajo:       string[];
    estado:        boolean;
    eliminado?:     boolean;
    fechaCreacion: Date;
    v?:             number;
}

export interface Idcliente {
    _id?:    string;
    Nombre: string;
}

export interface Idtaller {
    _id?:          string;
    NombreTaller: string;
}

export interface Vehiculo {
    _id?:       string;
    idcliente?: string;
    placa:     string;
    Marca:     string;
    Color:     string;
    Modelo:    string;
    eliminado?: boolean;
    v?:         number;
}