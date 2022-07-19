import type { NextPage } from 'next'
import Head from 'next/head'


//Parte hecha con client side render
const RCliente: NextPage = () => {
    return(
        <>
        <Head>
            <title>Registro de Usuario</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
        </Head>
        <main>
            <h1 className='display-4 text-center'>Ingrese sus datos</h1>
        <div className='container'>
            <div className='row bg-dark text-white '>
                <form action="">
                <div className='col-md-4  col-md-offset-3' >
                    <label className='formfile' htmlFor="first">Nombre:</label>
                    <input className='form-control' type="text" id="nombre" name="nombre" />
                </div>
                <div className='col-md-4'>
                    <label className='formfile' htmlFor="last">Correo:</label>
                    <input className='form-control' type="email" id="correo" name="correo" />    
                </div>
                <div className='col-md-4'>
                    <label className='formfile' htmlFor="">Cedula</label>
                    <input className='form-control' type="text" id="cedula" name="cedula" />    
                </div>
                <div className='col-md-4'>
                    <label className='formfile' htmlFor="">Numero Telefonico</label>
                    <input className='form-control' type="text" id="numero" name="numero" />    
                </div>
                    <br />
                    <button className='btn btn-outline-success' type="submit">Enviar</button>
                </form>
            </div>
        </div>   
        </main>
        </>
    )
};

export default RCliente