import React from 'react';

class AddElement extends React.Component{
 constructor(props){
     super(props)
     this.defaultinput={
        button:""
     }
 }
    render(){

        return(
        <div>
  <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Welcome to Save data</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr></hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  </div>
  <div class="input-group"><div class="input-group-prepend">
    <span class="input-group-text" id="">Enter turbine data</span>
  </div>
  <input type="text" class="form-control"></input>
  <input type="text" class="form-control"></input>
  <input type="text" class="form-control"></input>
  <input type="text" class="form-control"></input>
  </div>
  <br/>
        <button type="button" class="btn btn-primary">Add Row</button>
        </div>
        );
    }

}

export default AddElement;