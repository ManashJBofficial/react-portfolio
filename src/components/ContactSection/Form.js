import React from "react";
import { Button } from "./ButtonElement2.js";
// import emailjs from 'emailjs-com'
// import toast, { Toaster } from "react-hot-toast";
import { NameInput, EmailInput, MessageInput } from "./FormStyle.js";

const Form = () => {
  // const notify = () => toast.success('Mail Sent Successfully !');
  // function sendEmail(e){
  //     e.preventDefault();

  //     emailjs.sendForm('gmail', 'template_id_mjb', e.target, 'user_6NVfcYOPSNthhz4JmL3fC')
  //     .then((result) => {
  //         console.log(result.text);
  //         // alert('Message Sent Successfully !');
  //         notify();
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset();

  // }
  return (
    <div>
      <form name="contact_form" method="POST" netlify>
        <input type="hidden" name="contact_form" value="contact_form" />
        <NameInput>
          <label htmlFor="nameInput">Name</label>
          <input type="text" id="nameInput" name="name" required></input>
        </NameInput>
        <EmailInput>
          <label htmlFor="emailInput">Email</label>
          <input type="email" id="emailInput" name="email" required></input>
        </EmailInput>
        <MessageInput>
          <label htmlFor="messageInput">Message</label>
          <textarea
            type="text"
            id="messageInput"
            name="message"
            required
          ></textarea>
        </MessageInput>
        <Button type="submit" value="Send">
          Submit
        </Button>
        {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
      </form>
    </div>
  );
};

export default Form;
