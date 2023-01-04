import { Button, Table } from "reactstrap"

const TablaProducto = ({ data, mostrarModal, setMostrarModal, setEditar  }) => {

   const enviarDatos = (detalle) => {
        setEditar(detalle)
        setMostrarModal(!mostrarModal)
    }  

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>imagen</th>                    
                    <th>producto</th>
                    <th>precio</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">Sin Registros</td>
                        </tr>
                    ) : (
                            data.map((item) => (
                            
                                <tr key={item.idProduct}>
                                    <td><img src={item.foto} width="100px" height="100px"/></td>
                                    <td>{item.precio}</td>
                                    <td>{item.nombre}</td>
                                    <td>
                                        <Button color="primary" size="sm" className="me-2"
                                            onClick={()=> enviarDatos(item)}
                                        >Detalle</Button>
                                     </td>
                                </tr>
                            ))
                        )
                }
            </tbody>
        </Table>
    )
}

export default TablaProducto;