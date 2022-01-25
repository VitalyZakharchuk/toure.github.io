import React, { useState } from "react";
import { Button,Modal } from 'react-bootstrap';


const ModalBuy = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <Button onClick={handleShow} variant="primary">Замовити тур</Button>
            <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Дякуємо за вибір.Введіте ваше імя та номер телефну і ми з вами зв'яжемося.</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input placeholder="Ваше ім'я?"/>
                            <input placeholder="Ваше номер телефона?"/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Закрити
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Надіслати
                            </Button>
                        </Modal.Footer>
            </Modal>  
        </div>
          
    )
}

export default ModalBuy;