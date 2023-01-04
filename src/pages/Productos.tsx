import { useEffect, useState } from "react"
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaProducto from  "../components/TablaProducto" 
import Modaldetalle from  "../components/Modaldetalle" 



const Productos = () => {

    const [productos, setProductos] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false)
    const [editar,setEditar] = useState(null)
    
    const mostrarProductos = async () => {
    
        const response = await fetch("http://localhost:5083/api/Productos/ListaProductos");

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setProductos(data)
            } else {
                console.log("error en la lista")
            }

    }

    useEffect(() => {
        mostrarProductos()
    },[])
    
    return (
        <Container style={{height: 200, width: 550}}>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5 style={{ color: "blue"} }>Ver Productos</h5>
                        </CardHeader>
                        <CardBody>
                            <hr></hr> 
                            { 
                            <TablaProducto data={productos}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                setEditar={setEditar}
                            /> 
                            }                                                     
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Modaldetalle
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}                
                editar={editar}
                setEditar={setEditar}                
            />
        </Container>
        )
}

export default Productos;

