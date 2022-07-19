/**
    Formulario 
    input text de todos los datos inportates
    input hidden text idcliente}

    boton submit Guardar
 */

    import type { NextPage } from 'next'
    import Head from 'next/head'

    const Cvehiculo: NextPage = () =>{
        return(<>
            <Head> 
                <title>Crear vehiculo</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
            </Head>
            <main>
                <div className='container-fluid'>
                    <div className='row'>
                        <form action="">
                            <div className='col-md-5'>
                                <label htmlFor="">Placa </label>
                                <input className='form-control' type="text" name="placa" id="placa" />
                            </div>
                            <input type="hidden" name="idcliente" id="idcliente"/>
                            <div className='col-md-5'>
                                <label htmlFor="">Marca</label>
                                <input className='form-control' type="text" name="marca" id="marca" />
                            </div>
                            <div className='col-md-5'>
                                <label htmlFor="">Color</label>
                                <input className='form-control' type="text" name="color" id="color" />
                            </div>
                            <div className='col-md-5'>
                                <label htmlFor="">Modelo</label>
                                <input className='form-control' type="text" name="modelo" id="modelo" />
                            </div>
                            <button className='btn btn-primary'>Crear vehiculo</button>
                        </form>
                    </div>
                </div>
            </main>
        </>)
    }

export default Cvehiculo