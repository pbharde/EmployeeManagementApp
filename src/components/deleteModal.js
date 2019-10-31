import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';


class DeleteModal extends React.Component {
  render(){
    const {confirmDelete,emailId,handleYes,handleNo,closeDeleteModal} = this.props;
    
    return(
      <Modal show={confirmDelete} onHide={closeDeleteModal}>
        <Modal.Header>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete employee with Email - {emailId}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNo}>
            No
          </Button>
          <Button variant="primary" onClick={()=>handleYes(emailId)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default DeleteModal;
