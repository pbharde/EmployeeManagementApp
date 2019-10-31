import React from 'react';
import Button from 'react-bootstrap/Button';

class clearList extends React.Component {
  render(){
    const {length, clearList} = this.props;

    if(length>0){
      return(
        <div style={{width:'60%', margin:'0 auto', marginTop:'5%'}}>
          <Button variant="danger"  size="md" block onClick={clearList}>Clear Employee List</Button>
        </div>
      )
    }
    else{
      return(
        null
      )
    }
  }
}

export default clearList;
