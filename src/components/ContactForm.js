import React, { Component } from 'react';
import axios from 'axios';
import {CONFIG_URL} from '../config/config';

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


  const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

  export default  class ContactForm extends Component {

    
    constructor(props){
        super(props);
    }

    state = {
        isLoading: false,
        name :'',
        email :'',
        subject :'',
        message :'',
        errors: {
            name: '',
            email: '',
            subject: '',
            message: ''
          },
          successMsg:'',
          errorMsg:'',
          all_field_err :''
    };

    
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
      
        switch (name) {
          case 'name': 
            errors.name = 
              value.length < 5
                ? 'Name must be 5 characters long!'
                : '';
            break;
          case 'email': 
            errors.email = 


            validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'subject': 
            errors.subject = 
              value.length < 8
                ? 'Subject must be 8 characters long!'
                : '';
            break;
            case 'message': 
            errors.message = 
              value.length < 30
                ? 'Message must be 30 characters long!'
                : '';
            break;
          default:
            break;
        }
      
        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })
      }



    handleSubmit = event => {
        event.preventDefault();
        
        
        let errors = this.state.errors;
      
        const todos = this.validate(this.state.name, this.state.email, this.state.subject,this.state.message);

        if(todos.length>0){
            console.log(todos);

            this.setState({all_field_err:'Please Fill All Fields'});
            return;

        }else{


            if(validateForm(this.state.errors)) {
                console.info('Valid Form')
                let bodyFormData = {
                    name : this.state.name,
                    email : this.state.email,
                    subject : this.state.subject,
                    message : this.state.message
                }

                axios.post(CONFIG_URL+"/send_mail", bodyFormData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }})
                .then(result => {
                    if (result.data.status==200) {
                        this.setState
                        (
                            {isLoading: false,
                            successMsg:"Thanks for Contacting Us",
                            errorMsg:undefined,
                            all_field_err:undefined,
                            name :'',email :'',subject :'',message :''});
                         
    
                    }else{
                        this.setState({ errorMsg: result.data.message, isLoading: false});
                    }
                })
                .catch(error => {
                    this.setState({ toDashboard: true });
                    console.log(error);
                });

            }else{
            console.error('Invalid Form')
            }

        
        
    }
};


    validate(name, email, subject,message) {
        const errors_aa = [];

        let errors = this.state.errors;

        if (name.length === 0) {
            errors_aa.push({'name' : "Name can't be empty"});
            // this.setState ({errors:{name :'Name canst be empty'}})
        }
        if (email.length == 0) {

            errors_aa.push({'email': "Email can't be empty"});
        }
        if (subject.length == 0) {
            errors_aa.push({'subject': "Subject can't be empty"});
        }

        if (message.length == 0) {
            errors_aa.push({'message': "Message can't be empty"});

            
        }
      
        return errors_aa;
      }



    render() {

        const {errors ,successMsg ,errorMsg ,all_field_err} = this.state;


      return <div className="col-sm-12">
      
      <section class="mb-4">
      
          
          <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
          <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
              a matter of hours to help you.</p>
      
          <div class="row">
      
              <div class="col-md-9 mb-md-0 mb-5">

              {successMsg.length > 0 && 
  <div class="alert alert-success" role="alert" >{successMsg}</div>}

    {errorMsg &&
  <div class="alert alert-danger" role="alert" style={{display: errorMsg ? 'block' : 'none' }}>{errorMsg}</div>}

{all_field_err &&
  <div class="alert alert-danger" role="alert" style={{display: all_field_err? 'block' : 'none' }}>{all_field_err}</div>}


   

              <form id="contact-form" onSubmit={(event) => this.handleSubmit(event)} name="contact-form">
              <div class="row">

<div class="col-md-6">
    <div class="md-form mb-0">
        <input type="text" id="name" name="name" placeholder="Your name" class="form-control" value={this.state.name} onChange={(event) => this.handleChange(event)} />
       
        {errors.name.length > 0 && 
  <small id="passwordHelp" class="text-danger">{errors.name}</small>}
    </div>
</div>
<div class="col-md-6">
    <div class="md-form mb-0">
        <input type="text" id="email" name="email" placeholder="Your Email" class="form-control" value={this.state.email} onChange={(event) => this.handleChange(event)}/>
        

        {errors.email.length > 0 && 
 <small id="passwordHelp" class="text-danger">{errors.email}</small>}

    </div>
</div>

<div class="row" style={{"width":"100%"}}>
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject"  placeholder="Subject" value={this.state.subject} class="form-control" onChange={(event) => this.handleChange(event)}/>
                           
                        </div>

                        {errors.subject.length > 0 && 
 <small id="passwordHelp" class="text-danger">{errors.subject}</small>}

                    </div>
</div>
                
                
                <div class="row" style={{"width":"100%"}}>

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" placeholder="Message" id="message" name="message" rows="2"  value={this.state.message}  class="form-control md-textarea" onChange={(event) => this.handleChange(event)}></textarea>
                            
                        </div>

                        {errors.message.length > 0 && 
  <small id="passwordHelp" class="text-danger">{errors.message}</small>}

                    </div>
                </div>



</div>

                <div class="text-center text-md-left">
                      <input type="submit" class="btn btn-primary" value="Send"/>
                  </div>              
           
            </form>
      
               
                  <div class="status"></div>
              </div>
              
              <div class="col-md-3 text-center">
                  <ul class="list-unstyled mb-0">
                      <li><p></p>
                      </li>

                            {/* <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                                    <p>livesupdates@gmail.com</p>
                                                </li> */}

                      <li><p></p>
                      </li>
      
                     
                  </ul>
              </div></div></section></div>
    }
  }






