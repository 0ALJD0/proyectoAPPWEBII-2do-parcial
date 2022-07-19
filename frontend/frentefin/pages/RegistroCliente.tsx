import type { NextPage } from 'next'
import Head from 'next/head'
//import  from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'


//Parte hecha con client side render
const RCliente: NextPage = () => {
    return(
        <>
        <Head>
            <title>Registro de Usuario</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />

        </Head>
        <main>
        <h1>Ingrese sus datos</h1>
        <div className='@media (min-width: @screen-sm-min)'>
            <div className='row'>
            <form action="">
            <div className='mb-3'>
                <label className='formfile' htmlFor="first">Nombre:</label>
                <input className='form-control' type="text" id="nombre" name="nombre" />
            </div>
            <div className='mb-3'>
                <label className='formfile' htmlFor="last">Correo:</label>
                <input className='form-control' type="text" id="correo" name="correo" />    
            </div>
            <div className='mb-3'>
                <label className='formfile' htmlFor="">Cedula</label>
                <input className='form-control' type="text" id="cedula" name="cedula" />    
            </div>
            <div className='mb-3'>
                <label className='formfile' htmlFor="">Numero Telefonico</label>
                <input className='form-control' type="text" id="numero" name="numero" />    
            </div>
                <button className='btn btn-primary' type="submit">Enviar</button>
        </form>
            </div>
        </div>
        </main>
        </>
    )
};

export default RCliente