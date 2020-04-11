import React, { Component } from 'react';
import axios from 'axios';
import {CONFIG_URL} from '../config/config';
import { MDBContainer, MDBCardHeader, MDBIcon, MDBMedia ,MDBBtn, MDBPageItem, MDBPagination, MDBPageNav,MDBRating} from "mdbreact";

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


  const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

  export default  class CommentBlog extends Component {

    
    constructor(props){
        super(props);
    }

    state = {
        isLoading: false,
        name :'',
        email :'',
        comment :'',
        errors: {
            name: '',
            email: '',
            comment :''
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
            case 'comment': 
            errors.comment = 
              value.length < 30
                ? 'comment must be 30 characters long!'
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
      
        const todos = this.validate(this.state.name, this.state.email, this.state.comment);

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
                    comment : this.state.comment,
                    blog_id : this.props.blog_id
                }

                axios.post(CONFIG_URL+"/send_comment", bodyFormData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }})
                .then(result => {
                    if (result.data.status==200) {
                        this.setState
                        (
                            {isLoading: false,
                            successMsg:"Thanks for Comment Your Views",
                            errorMsg:undefined,
                            all_field_err:undefined,
                            name :'',email :'',subject :'',comment :''});
                         
    
                    }else{
                        this.setState({ errorMsg: result.data.comment, isLoading: false});
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


    validate(name, email, comment) {
        const errors_aa = [];

        let errors = this.state.errors;

        if (name.length === 0) {
            errors_aa.push({'name' : "Name can't be empty"});
            // this.setState ({errors:{name :'Name canst be empty'}})
        }
        if (email.length == 0) {

            errors_aa.push({'email': "Email can't be empty"});
        }

        if (comment.length == 0) {
            errors_aa.push({'comment': "Message can't be empty"});

            
        }
      
        return errors_aa;
      }



    render() {

        const {errors ,successMsg ,errorMsg ,all_field_err} = this.state;


      return <div className="col-sm-12">

      

     

           

        <MDBCardHeader className="border-0 font-weight-bold d-flex justify-content-between" style={{"backgroundColor":"rgb(244, 67, 54)","color":"white","marginTop":"25px"}}>
          <p className="mr-4 mb-0">Comments</p>
          
        </MDBCardHeader>
        <MDBMedia className="p-4 bg-white">
          <MDBMedia >
            <img className="card-img-100 d-flex z-depth-1" style={{"width":"50%"}} src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" alt="" />
          </MDBMedia>
          <MDBMedia body>
            <h5 className="font-weight-bold mt-0">
              Danny Newman
            </h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et
            magnam.
          </MDBMedia>


        </MDBMedia>
<hr/>

        <MDBMedia className="p-4 bg-white">
          <MDBMedia >
            <img className="card-img-100 d-flex z-depth-1" style={{"width":"50%"}} src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" alt="" />
          </MDBMedia>
          <MDBMedia body>
            <h5 className="font-weight-bold mt-0">
              Danny Newman
            </h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et
            magnam.
          </MDBMedia>
          <hr/>

          
        </MDBMedia>

        <MDBPagination className="d-flex justify-content-center mt-5">
          <MDBPageItem disabled>
            <MDBPageNav>
              <span>First</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem disabled>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem active>
            <MDBPageNav>
              1 <span className="sr-only">(current)</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              2
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              3
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              4
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              5
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              &raquo;
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              Last
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      

       
      
      <section class="mb-4">
      
          
          <h2 class="h1-responsive font-weight-bold text-center my-4">Comment Blog</h2>
          <p class="text-center w-responsive mx-auto mb-5">Do you have any Views? Please 
              Comment Your view here</p>
      
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


<div class="col-md-6">
    <div class="md-form mb-0">
        <MDBRating iconRegular />


    </div>
</div>




    
                
                <div class="row" style={{"width":"100%"}}>

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" placeholder="Comment" id="comment" name="comment" rows="2"  value={this.state.comment}  class="form-control md-textarea" onChange={(event) => this.handleChange(event)}></textarea>
                            
                        </div>

                        {errors.comment.length > 0 && 
  <small id="passwordHelp" class="text-danger">{errors.comment}</small>}

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






