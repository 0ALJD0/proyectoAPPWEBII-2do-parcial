import{Request, Response} from 'express'
import {Usuario} from '../models'
const crearCliente = async (req: Request ,res: Response )=>{
    try {
    const {...dato} =  req.body;

    const clienteExiste= await Usuario.findOne({ ci:dato.ci });
    if (!clienteExiste)
    {
        const cliente = new Usuario(dato);
        const clientenuevo =  await cliente.save();
        res.status(201).json(clientenuevo);//envialo por el cuerpo con axios
        //lo guardas con una variable y luego lo envías
    } 
    
    res.status(400).json({
        message:
        `Ya existe un cliente con esa cedula ${clienteExiste!.ci}`
    })
    } catch (error) {
        res.json(error);
    }
   
}
const existClient = async (req: Request, res: Response)=>{
    try {
        const {id}= req.params;
        const clienteExiste= await Usuario.findOne({ ci:id });
        if (!clienteExiste)
        {
            const respuesta = {
                existe : false,
                ci: id
            }
            res.status(201).json(respuesta);//envialo por el cuerpo con axios
            //lo guardas con una variable y luego lo envías
        } 
        res.status(201).json({
            existe:true,
            cliente: clienteExiste
        });
    } catch (error) {
        res.json(error);
    }
}
export {
    crearCliente,
    existClient
}