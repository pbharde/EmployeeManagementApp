import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function searchingFor(searchEmp){

    return function(emp){
        return emp.name.toLowerCase().includes(searchEmp.toLowerCase()) || !searchEmp;
      }

}


class EmployeeList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchEmp:''
    }
  }


  searchHandler= (e) => {
      this.setState({
        searchEmp:e.target.value
      })
    }

  render(){
    const {employees,handleDelete,handleEdit} = this.props;
    return(
      <div>
      <div>
      {
        employees.length>0?
          <Form.Control type="text" style={{width:'60%', margin:'0 auto', marginTop:'5%', marginBottom:'1%'}} className="search-input" onChange={this.searchHandler} value={this.searchEmp} placeholder="Search by Name" />
        :null
      }

      </div>
      {
          employees.filter(searchingFor(this.state.searchEmp)).map(((employee, id)=>{
          return(
            <Card key={employee.id}>
                  <Card.Body>
                           <Card.Text><span>Name:</span> {employee.name}</Card.Text>
                           <Card.Text><span>Company Name: </span> {employee.companyName}</Card.Text>
                           <Card.Text><span>Email ID: </span> {employee.emailId}</Card.Text>
                           <Card.Text><span>Contact No: </span> {employee.contactNo}</Card.Text>
                           <Card.Text><span>Designation: </span> {employee.designation}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                        <Button variant="primary"  onClick={()=>handleEdit(employee.id)}>Edit</Button>
                        &nbsp;
                        <Button variant="danger"  onClick={()=>handleDelete(employee.id)}>Delete</Button>
                  </Card.Footer>
              </Card>
          )
        }))
      }

      </div>
    )
  }
}

export default EmployeeList;
