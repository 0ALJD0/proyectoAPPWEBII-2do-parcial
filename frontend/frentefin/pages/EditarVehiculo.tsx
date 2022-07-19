/**
    Formulario 
    input text de todos los datos inportates
    input hidden text idcliente
    input hidden text _id
    input hidden booolean  eliminado
    input hidden number __v
    boton submit Actualizar 
 */

    import type { NextPage } from 'next'
    import Head from 'next/head'

    const Cvehiculo: NextPage = () =>{
        return(<>
            <Head> 
                <title>Editar Vehiculo</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
            </Head>
            <section className='h-100 h-custom'>
                <div className='container'>
                    <div className='ol-lg-8 col-xl-6'>
                        <div className='card-body p-4 p-md-4'>
                            <p className='h2'>Editar vehiculo</p>
                            <form action="" className='form-horizontal'>
                                <div className='row mt-5'></div>
                                <div className='row mt-5'></div>
                                <div className='row mt-5'></div>
                                <div className='row mt-5'></div>
                                <div className='row mt-5'></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>)
    }