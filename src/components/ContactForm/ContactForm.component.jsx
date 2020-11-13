import React, { Component } from "react";
import "./ContactForm.styles.scss";
import apiKeys from "../../assets/emailAPI";




class ContactForm extends Component{

    state={
        fullName:"",
        email:"",
        subject:"",
        message:""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    };

    handleSubmit = (event) =>{
        this.sendeMail(
            apiKeys.TEMPLATE_ID,
            {
                fullName:this.state.fullName,
                message:this.state.message,
                subject:this.state.subject,
                email:this.state.email
            }
        )
    }

    sendeMail(TemplateID, variables){
        window.emailjs.send(
            "gmail", TemplateID,
            variables
        ).then(res => {
            this.setState({
                fullName:"",
                email:"",
                subject:"",
                message:""
            })
            alert("Thanks for the email. I will get back to you ASAP!")
          })
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render(){
        const {fullName, email, subject, message} = this.state;

        return(
            <div className="contactFormContainer mt-5 mb-5 text-center">
                <h1 className="contactFormTitle mb-5">Let's get in contact!</h1>
                <form onSubmit={e => e.preventDefault()}>
                    <div className="form-group mx-auto col-12 col-lg-4">
                        <input 
                        onChange={this.handleChange} 
                        name="fullName" type="text" 
                        className="form-control" 
                        value={fullName} 
                        placeholder="Full Name">
                        </input>
                    </div>
                    <div className="form-group mx-auto col-12 col-lg-4">
                        <input 
                        onChange={this.handleChange} 
                        name="email" 
                        type="email" 
                        className="form-control" 
                        value={email} 
                        placeholder="Your email">
                      </input>
                    </div>
                    <div className="form-group mx-auto col-12 col-lg-4">
                        <input 
                        onChange={this.handleChange} 
                        name="subject" 
                        type="text" 
                        className="form-control" 
                        value={subject} 
                        placeholder="Subject">
                        </input>
                    </div>
                    <div className="form-group mx-auto col-12 col-lg-4">
                        <textarea 
                        onChange={this.handleChange} 
                        name="message" 
                        type="text" 
                        className="form-control message" 
                        value={message} 
                        placeholder="Message">
                        </textarea>
                    </div>
                    <button type="submit" onClick={this.handleSubmit} className="formButton" >Send Message!</button>
                </form>
            </div>
        )
    } 
} 

export default ContactForm;