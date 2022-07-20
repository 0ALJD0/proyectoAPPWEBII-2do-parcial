import type { NextPage } from 'next'
import Head from 'next/head'
import { VerTaller } from '../services/Services';




const TresComponentes: NextPage = () =>{
    return(
        <div>
        <Head> 
            <title>Lista de cosas</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
        </Head>
        <section>
            <div className='container'>
                <div className='row'>
                    <div>
                        {Taller.map.length === 0? (
                            <div className= "">Cargando...</div>
                        ):(
                            Taller?.map((taller) => {
                                return ( 
                                    <div key={taller.id} className= "">
                                        <h2>{taller.NombreTaller}</h2>
                                        <p>{taller.direccion}</p>
                                        <p>{taller.telefonoTaller}</p>
                                        <p>{taller.representante}</p>
                                        <p>{taller.servicios}</p>
                                    </div>)
                            })
                        )}
                    </div>
                    <div>
                        {Cita.map.length === 0? (
                            <div className= "">Cargando...</div>
                        ):(
                            Cita?.map((cita) => {
                                return ( 
                                    <div key={cita.id} className= "">
                                        <h2>{cita.vehiculo}</h2>
                                        <p>{cita.trabajo}</p>
                                        <p>{cita.fechaCreacion}</p>
                                    </div>)
                            })
                        )}
                    </div>
                    <div>
                        {Vehiculo.map.length === 0? (
                            <div className= "">Cargando...</div>
                        ):(
                            Vehiculo?.map((vehiculo) => {
                                return ( <div key={vehiculo.id} className= "">
                                        <h2>{vehiculo.placa}</h2>
                                        <p>{vehiculo.Marca}</p>
                                        <p>{vehiculo.Color}</p>
                                        <p>{vehiculo.Modelo}</p>
                                </div>)
                            })
                        )}
                    </div>
                </div>
            </div> 
        </section>
        </div>
    );
}


export default TresComponentes;




















/*
     {{#each taller}}
            con los daatos del taller, el nombre, servicios
            }y un boton para crer una cita 
            <tr>
                <td>{{this.nombre}}</td>
                <td>{{this.precio}}</td>
                <td>{{this.costo}}</td>
                <td> <a href="/producto/modificar/{{this._id}}">Modificar</a>  </td>
                <td> <a href="/producto/eliminar/{{this._id}}">Elliminar</a> </td>
            </tr>

*/
/*
     {{#each citasdelcliente}}
            con los daatos del nombretaller, el nvehiculo, servicios
            y boton para eliminar cita
            <tr>
                <td>{{this.nombre}}</td>
                <td>{{this.precio}}</td>
                <td>{{this.costo}}</td>
                <td> <a href="/producto/modificar/{{this._id}}">Modificar</a>  </td>
                <td> <a href="/producto/eliminar/{{this._id}}">Elliminar</a> </td>
            </tr>

*/
/*
     <div>
        <div>
            {#each vehiculo}}
            con los daatos del modelo, matricula
            }y un boton para modificar, eliminar.
            <tr>
                <td>{{this.nombre}}</td>
                <td>{{this.precio}}</td>
                <td>{{this.costo}}</td>
                <td> <a href="/producto/modificar/{{this._id}}">Modificar</a>  </td>
                <td> <a href="/producto/eliminar/{{this._id}}">Elliminar</a> </td>
            </tr>
        </div>
        boton aañadir vehiculo
     </div>

*/