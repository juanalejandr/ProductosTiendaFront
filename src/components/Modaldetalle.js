import { useState, useEffect } from "react"
import { FormGroup, Modal, ModalBody,  ModalFooter, ModalHeader, Form, Input, Label, Button } from "reactstrap"
import { convertTypeAcquisitionFromJson } from "typescript";

const modeloDetalle = {
    idProduct : 0,
    marca: "",
    categoria: "",
    descripcion: ""
}

const ModalDetalle = ({mostrarModal,setMostrarModal,setEditar,editar}) => {

    const [detalle, setDetalle] = useState(modeloDetalle);
    
    const actualizarDatos = (e) => {
        console.log(e)
    }

    useEffect(() => {
        if (editar != null) {
            setDetalle(editar)
        } else {
           setDetalle(modeloDetalle) 
        }    
    },[editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (
        <Modal isOpen={mostrarModal}>
        <ModalHeader>
            {detalle.idProduct == 0 ? "Nuevo Detalle":"Ver Detalle"}
        </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Marca</Label>
                        <Input name="marca" onChange={(e)=>actualizarDatos(e)} value={detalle.marca}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Categoria</Label>
                        <Input name="categoria" onChange={(e)=>actualizarDatos(e)} value={detalle.categoria}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Descripcion:</Label>
                    </FormGroup>
                    <FormGroup>                    
                        <textarea name="descripcion" onChange={(e)=>actualizarDatos(e)} value={detalle.descripcion}>
                        </textarea>                            
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" size="sm" onChange={(e)=>actualizarDatos(e)} onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>        
    )
}

export default ModalDetalle;