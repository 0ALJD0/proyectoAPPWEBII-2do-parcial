import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { VerTaller } from '../services/Services';

const Taller = [
    { "_id" : "62d39b9564fed552ba9ef5a1", 
    "NombreTaller" : "Mecanica Aqua", 
    "direccion" : "Costa Azul", 
    "telefonoTaller" : "NA", 
    "representante" : "Mirando Flores", 
    "servicios" : [ "Limpieza a", "Limpieza b", "limpieza c" ], 
    "__v" : 0 }, 
    { "_id" : "62d39c4b64fed552ba9ef5a5", 
    "NombreTaller" : "Mecanica Darkness", 
    "direccion" : "Noshe", 
    "telefonoTaller" : "NA", 
    "representante" : "Darkness Nomeacuerdo",
    "servicios" : [ "Limpieza masoquismo", "Limpieza masoquista", 
    "Adora que la maltraten" ], 
    "__v" : 0}    
];


const Cita = [
    { "_id" : "62d3c05dc842d691a6abe6f7", 
    "idcliente" : "62d39db264fed552ba9ef5a9", 
    "idtaller" : "62d39c4b64fed552ba9ef5a5", 
    "vehiculo" : { "_id" : "62d3b374410fb07e5c01d3bf", 
                    "idcliente" : "62d39b9564fed552ba9ef5a1", 
                    "placa" : "SADSADSADSA", 
                    "Marca" : "Hola", 
                    "Color" : "Agua", 
                    "Modelo" : "2022", 
                    "eliminado" : false, 
                    "__v" : 0 }, 
    "trabajo" : [ "ola", "que", "hace" ], 
    "estado" : false, 
    "eliminado" : false, 
    "fechaCreacion" : "2022-07-17T07:55:09.692Z", 
    "__v" : 0 },
{ "_id" : "62d3c0ce3ef6426a4d26ffd7", 
"idcliente" : "62d39db264fed552ba9ef5a9", 
"idtaller" : "62d39c4b64fed552ba9ef5a5", 
"vehiculo" : { "_id" : "62d3b374410fb07e5c01d3bf", 
                "idcliente" : "62d39b9564fed552ba9ef5a1", 
                "placa" : "SADSADSADSA", 
                "Marca" : "Hola",
                "Color" : "Agua", 
                "Modelo" : "2022", 
                "eliminado" : false, 
                "__v" : 0 }, 
"trabajo" : [ "ola", "que", "hace" ], 
"estado" : false, 
"eliminado" : false, 
"fechaCreacion" : "2022-07-17T07:57:02.905Z", 
"__v" : 0 }
];

const Vehiculo = [
    {
        "_id": "62d3b374410fb07e5c01d3bf",
        "idcliente": "62d39b9564fed552ba9ef5a1",
        "placa": "SISI",
        "Marca": "ADA",
        "Color": "WA",
        "Modelo": "2ASDSA022",
        "eliminado": false,
        "__v": 0
    }
];

const TresComponentes: NextPage = () =>{
    return(
        <div>
        <Head> 
            <title>Lista de cosas</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
        </Head>
        <section>
            <div className='container justify-content-center'>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                    <h1 className='justify-content-center'>TALLERES</h1>
                        {Taller.map.length === 0? (
                            <div className= "">Cargando...</div>
                        ):(
                            Taller?.map((taller) => {
                                return ( 
                                    <div className = "">
                                        <ul key={taller._id} className= "list-group p-100 w-150">
                                            <div className= "list-group-item">
                                                <h2>Nombre: {taller.NombreTaller}</h2>
                                                <p>Direccion: {taller.direccion}</p>
                                                <p>Telefono: {taller.telefonoTaller}</p>
                                                <p>Representante: {taller.representante}</p>
                                                <p>Servicios: {taller.servicios[0]}</p>
                                            </div>
                                        </ul>
                                    </div>
                                    )
                            })
                        )}
                    </div>

                    <div className='col-md-4'>
                    <h1 className='justify-content-center'>Cita</h1>
                        {Cita.map.length === 0? (
                            <div className= "">Cargando...</div>
                        ):(
                            Cita?.map((cita) => {
                                return ( 
                                    <div>
                                        <ul key={cita._id} className= "list-group p-100 w-150">
                                            <div className="list-group-item">
                                                <h2>{cita.vehiculo.Marca}</h2>
                                                <p>{cita.trabajo}</p>
                                                <p>{cita.fechaCreacion}</p>
                                            </div>
                                        </ul>
                                    </div>
                                    )
                            })
                        )}
                    </div>
                    <div className = "col-md-4">
                    <h1 className='justify-content-center'>Vehiculo</h1>
                        {Vehiculo.map.length === 0? (
                            <div className= "">Cargando...</div>
                        ):(
                            Vehiculo?.map((vehiculo) => {
                                return ( 
                                <ul key={vehiculo._id} className= "list-group p-100 w-150">
                                        <div className="list-group-item">
                                            <h2>{vehiculo.placa}</h2>
                                            <p>{vehiculo.Marca}</p>
                                            <p>{vehiculo.Color}</p>
                                            <p>{vehiculo.Modelo}</p>
                                        </div>
                                </ul>)
                            })
                        )}
                    </div>
                </div>
                <Link href='/' className='justify-content-center'>
                    <a   className="btn btn-primary">Salir</a>
                </Link>
            </div> 
        </section>
        </div>
    );
}


export default TresComponentes;