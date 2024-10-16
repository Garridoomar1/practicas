export type PacienteTypes={
    id:string;
    nameMascota:string;
    nameDueño:string;
    sintomas:string;
    fechaIngreso:Date;
    fechaAlta:Date;
    email:string
}
export type PacienteForm = Omit<PacienteTypes,'id'>