import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const ModalProducts = ({ modal, setModal, data }) => {
    
const toggle = () => setModal(!modal);

    console.log(data)

return (
<div>
    
    <Modal isOpen={modal} fade={false} toggle={toggle}>
    <ModalHeader toggle={toggle}><h4>{data.title}</h4></ModalHeader>
    <ModalBody>
        <div>
            <img src={data.img} alt={`imagen la seccion ${data.title}`} className="img-responsive" />
            <p>{data.text}</p>
        </div>
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
    </ModalFooter>
    </Modal>
</div>
);
}

export default ModalProducts;