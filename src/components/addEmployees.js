import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/dist/style.css';


class AddEmployees extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    const {name,companyName,emailId,
      contactNo,designation,errors,
      show,handleName,handleCompanyName,handleEmailId,
      handleContactNo,handleDesignation,handleSubmit,
      handleClose,handleShow,updateEmployee,handleCancel} = this.props;
      
    return (
      <div>
        <div style={{width:'60%', margin:'0 auto', marginTop:'5%'}}>
        <Button variant="primary" size="md" block  onClick={handleShow}>Add New Employee</Button>
        </div>
        <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextName">
              <Form.Label column sm="4">
                Name
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Name" value={name} onChange={handleName} />
                <div className="errorMsg" style={{color:'red'}}>{errors.name}</div>
              </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextCompanyName">
              <Form.Label column sm="4">
                Company Name
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="CompanyName" value={companyName} onChange={handleCompanyName} />
                <div className="errorMsg" style={{color:'red'}}>{errors.companyName}</div>
              </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmailID">
              <Form.Label column sm="4">
                Email ID
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Email ID" value={emailId} onChange={handleEmailId} />
                <div className="errorMsg" style={{color:'red'}}>{errors.emailId}</div>
              </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextContactNo">
              <Form.Label column sm="4">
                Contact No
              </Form.Label>
              <Col sm="8">
                <ReactPhoneInput
                   defaultCountry="us"
                   value={contactNo}
                   onChange={handleContactNo}
                   autoFormat
                />
                <div className="errorMsg" style={{color:'red'}}>{errors.contactNo}</div>
              </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextDesignation">
              <Form.Label column sm="4">
                Designation
              </Form.Label>
              <Col sm="8">
                <Form.Control as="select" onChange={handleDesignation}>
                    <option>Software Developer</option>
                    <option>Senior Software Developer</option>
                    <option>Quality Assurance</option>
                    <option>Technical Lead</option>
                    <option>Manager</option>
                 </Form.Control>
              </Col>
          </Form.Group>
            <div className="errorMsg" style={{color:'red'}}>{errors.exists}</div>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {updateEmployee ? 'Update Employee' : 'Add Employee'}
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default AddEmployees;
