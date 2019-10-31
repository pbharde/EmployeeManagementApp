import React from 'react';
import AddEmployees from './addEmployees';
import EmployeeList from './employeeList';
import ClearList from './clearList';
import DeleteModal from './deleteModal';
import './style.css'



class EmployeeManagement extends React.Component {
  state={
    id:'',
    employee:'',
    updateEmployee:false,
    name:'',
    companyName:'',
    emailId:'',
    contactNo:'',
    designation:'Software Developer',
    errors:{},
    employees:[],
    show:false,
    prevEmplyoee:[],
    confirmDelete:false,
    deleteEmail:''
  }

  handleName = (e) => {
    e.preventDefault();
    this.setState({
      name:e.target.value
    },
    ()=>{})
  }

  handleCompanyName = (e) => {
    e.preventDefault();
    this.setState({
      companyName:e.target.value
    },
    ()=>{})
  }

  handleEmailId = (e) => {
    e.preventDefault();
    this.setState({
      emailId:e.target.value
    },
    ()=>{})
  }

  handleContactNo = (e,data) => {
    let code='';
    this.setState({
      contactNo:e,
      rawPhone: e.replace(/[^0-9]+/g,'').slice(data.dialCode.length)
    },
  () =>{
    code = "+"+data.dialCode;
  })
  }

  handleDesignation = (e) => {
    e.preventDefault();
    this.setState({
      designation:e.target.value
    },
    ()=>{})
  }
  validateForm = () => {
    let errorsArr = {};
    let formIsValid=true;

      if(this.state.name===null || this.state.name===''){
          errorsArr["name"] = "Please enter your Name.";
          formIsValid= false;
          this.setState({
            formIsValid: false
          });
        }
      else if(!this.state.name.match(/^[a-zA-Z ]+$/)){
        formIsValid= false;
        this.setState({
          formIsValid: false
        });
        errorsArr["name"] = "Please use only letters";
      }
      if(this.state.contactNo===null || this.state.contactNo===''){
        errorsArr["contactNo"] = "Please enter your Contact Number.";
        formIsValid= false;
        this.setState({
          formIsValid: false
        });
      }
      else if(this.state.rawPhone.length<10){
        formIsValid= false;
        this.setState({
          formIsValid: false
        });
        errorsArr["contactNo"] = "Please enter valid Contact Number.";
      }
      if(this.state.emailId===null || this.state.emailId===''){
          errorsArr["emailId"] = "Please enter your Email Id.";
          formIsValid= false;
          this.setState({
            formIsValid: false
          });
        }
        else if(!this.state.emailId.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
          formIsValid= false;
          this.setState({
            formIsValid: false
          });
          errorsArr["emailId"] = "Please enter valid Email Id.";
        }
        if(this.state.companyName===null || this.state.companyName===''){
            errorsArr["companyName"] = "Please enter Company Name.";
            formIsValid= false;
            this.setState({
              formIsValid: false
            });
          }

          if(this.state.employees.some(emp => emp.id===this.state.emailId)){
            errorsArr["exists"] = `Employee - ${this.state.emailId} already exist.`;
            formIsValid= false;
            this.setState({
              formIsValid: false
            });
          }

      this.setState({
          errors: errorsArr
      });

      return formIsValid;
  }

  handleSubmit = (e) => {

    e.preventDefault();


    if(this.validateForm() === true || this.state.errors.length===0){
      let newEmployee = {
        id:this.state.emailId,
        name:this.state.name,
        companyName:this.state.companyName,
        emailId:this.state.emailId,
        contactNo:this.state.contactNo,
        designation:this.state.designation,
        updateEmployee:false
      };

      const employeesArr = [...this.state.employees,newEmployee];
      this.setState({
        employees:employeesArr,
        updateEmployee:false
      },
    ()=>{})
    this.handleClose();
    }
  }

  handleCancel = () => {

    if(this.state.employees.length>0){
      const employeesArr = [...this.state.employees,this.state.prevEmplyoee];
      this.setState({
        employees:employeesArr,
        updateEmployee:false
      },
    ()=>{});
    }
    this.handleClose();
  }

  handleClose = () => {
    this.setState({
      show:false
    })
  }

  handleShow = () => {
    this.setState({
      show:true
    })
  }

  clearList = () => {
    this.setState({
      employees:[]
    })
  }

  handleDelete = (id) => {
    const filteredEmpl = this.state.employees.filter(emp => emp.id!==id);
    this.confirmDeleteEmp(filteredEmpl.emailId);
  }

  confirmDeleteEmp = (emailId) => {
    this.setState({
      confirmDelete:true,
      deleteEmail:emailId
    })
  }

  handleYes = (emailId) => {
      const filteredEmpl = this.state.employees.filter(emp => emp.emailId!==emailId);
      this.setState({
        employees:filteredEmpl
      })
      this.closeDeleteModal();
  }

  handleNo = () => {

      this.closeDeleteModal();
  }

  closeDeleteModal = () => {

    this.setState({
      confirmDelete:false
    })
  }

  handleEdit = (id) => {

    const filteredEmpl = this.state.employees.filter(emp => emp.id!==id);
    const selectedEmpl = this.state.employees.find(emp => emp.id===id);

    this.setState({
      prevEmplyoee:selectedEmpl,
      employees:filteredEmpl,
      id:id,
      name:selectedEmpl.name,
      companyName:selectedEmpl.companyName,
      emailId:selectedEmpl.emailId,
      contactNo:selectedEmpl.contactNo,
      designation:selectedEmpl.designation,
      updateEmployee:true
    },
  ()=>{
    if(this.state.updateEmployee){
      this.handleShow();
    }
  });

  }

  render(){
    return (
      <div>
      {
        this.state.confirmDelete ?  <DeleteModal
        confirmDelete={this.state.confirmDelete}
        emailId={this.state.emailId}
        handleYes={this.handleYes}
        handleNo={this.handleNo}
        closeDeleteModal={this.closeDeleteModal}
        /> : null
      }
      <h1 className='heading'>Employee Management App </h1>
        <AddEmployees
          name={this.state.name}
          companyName={this.state.companyName}
          emailId={this.state.emailId}
          contactNo={this.state.contactNo}
          designation={this.state.designation}
          handleName={this.handleName}
          errors={this.state.errors}
          show={this.state.show}
          updateEmployee={this.state.updateEmployee}
          handleCompanyName={this.handleCompanyName}
          handleEmailId={this.handleEmailId}
          handleContactNo={this.handleContactNo}
          handleDesignation={this.handleDesignation}
          handleSubmit={this.handleSubmit}
          handleClose={this.handleClose}
          handleShow={this.handleShow}
          handleCancel={this.handleCancel}
        />
        <EmployeeList
          employees={this.state.employees}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
        <ClearList
          length={this.state.employees.length}
          clearList={this.clearList}
        />
      </div>
    );
  }
}

export default EmployeeManagement;
