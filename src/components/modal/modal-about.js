import React, { useState } from "react";
import { Button,Modal } from 'react-bootstrap';
import './modal-about.css';

const ModalAbout = ({name,about}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="modalAbout">
            <Button onClick={handleShow} variant="info">Про тур</Button>
            <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {about}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Закрити
                            </Button>
                            
                        </Modal.Footer>
            </Modal>  
        </div>
          
    )
}

export default ModalAbout;