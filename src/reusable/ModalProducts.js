import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import GitpdfReader from './GitpdfReader'



const ModalProducts = ({ modal, setModal, data }) => {
    
const toggle = () => setModal(!modal);

    console.log(data)

return (
<div>
    
    <Modal isOpen={modal} fade={false} toggle={toggle}>
        <GitpdfReader setModal={setModal} />
    </Modal>
</div>
);
}

export default ModalProducts;