import React from 'react';
import { FormControl, FormLabel, Input, Textarea, Button, Image } from "@chakra-ui/react";
import contact_image from './images/contact-page.jpg'
// import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  return (
    <div className='contact-container'>
        <div className='contact-image-container'>
          <Image
            className='contact_image'
            src={contact_image}
            alt='contact_image'
            borderRadius='lg'
          />
          </div>
        <div className='contactme-text'>Contact Me</div>
        {/* Contact Me Form */}
        <div className='touch-text'> If you have any questions or wish to get in touch send me a message! </div>


        <form style={{ width: "60%", margin: "0 auto"}}>
          <FormControl id="name">
            <FormLabel className="contact-text">Name</FormLabel>
            <Input className="contact-input" type="text" style={{ width: "100%" }} />
          </FormControl>

          <FormControl id="email" mt={4}>
            <FormLabel className="contact-text">E-Mail Address</FormLabel>
            <Input className="contact-input" type="email" style={{ width: "100%" }} />
          </FormControl>

          <FormControl id="message" mt={4}>
            <FormLabel className="contact-text">Message</FormLabel>
            <Textarea className="contact-input" style={{ width: "100%" }} />
          </FormControl>

          <Button className="contact-button"type="submit">Submit</Button>
        </form>
      </div>
  );
}

export default Contact;
