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

        </Head>
        <main>
        <h1>Ingrese sus datos</h1>
        <form action="">
            <div className='row g-3 align-items-center'>
                <label className='form-label' htmlFor="first">Nombre:</label>
                <input className='form-control' type="text" id="nombre" name="nombre" />
                <label className='form-label' htmlFor="last">Correo:</label>
                <input className='form-control' type="text" id="correo" name="correo" />
                <label className='form-label' htmlFor="">Cedula</label>
                <input className='form-control' type="text" id="cedula" name="cedula" />
                <label className='form-label' htmlFor="">Numero Telefonico</label>
                <input className='form-control' type="text" id="numero" name="numero" />
                <button className='btn btn-primary' type="submit">Enviar</button>
            </div>
        </form>
        </main>
        </>
    )
};

export default RCliente