import React from 'react';
import { Modal } from 'reactstrap';

const ModalProducts = ({ modal, setModal, data }) => {
    
const toggle = () => setModal(!modal);

return (
<div>
    
    <Modal isOpen={modal} fade={false} toggle={toggle}>
        
    </Modal>
</div>
);
}

export default ModalProducts;