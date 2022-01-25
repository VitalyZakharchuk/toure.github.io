import React, { useState }  from "react";
import './Toures.css';
import { Button,Modal } from 'react-bootstrap';
import ModalBuy from "../modal/modal-buy";
import ModalAbout from "../modal/modal-about";


const Tour = ({ toures }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let touerItem = toures.map((t) => {
        
        return (
            <div>
                <div className='toures'>
                    
                    <img src={t.img} />
                    <span className='info'>
                        <h1 className='name'>{t.name}</h1>
                        <p>Дні: {t.days}</p>
                        <p>Ціна: {t.price} грн</p>
                        <div className="modala">
                        <ModalBuy/>
                        <ModalAbout name={t.name} about={t.about}/>
                        </div>
                        
                        
                    </span>
                    
                    
                </div>
            </div>
        )
    })
    return (
        <div>
            {touerItem}
            
        </div>

    )
}


export default Tour;