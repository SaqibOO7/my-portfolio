import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { BsFillSendFill, BsWhatsapp } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import axios from "axios";

function Contact() {

  //form states
  const[name, setName] = useState('');
  const[phone, setPhone] = useState('');
  const[email, setEmail] = useState('');
  const[description, setDescription] = useState('');

  //submit event
  const handleSubmit = (e) =>{
    e.preventDefault();

    const data = {
      Name: name,
      Phone: phone,
      Email: email,
      Description: description

    }
    axios.post('https://api.sheetbest.com/sheets/ec8639b7-1044-4bd0-8d83-b1c77695fe1f', data).then((response) => {
      alert('Your request is submitted');
      setName('');
      setPhone('');
      setEmail('');
      setDescription('');
      
    })
  }
  return (
    <section id="contact" className="h-screen pt-20 md:mt-0 mt-[36rem]">
      <h2 className="text-5xl font-extrabold text-center mb-16">
        Contact <span className="text-customBlue">Me</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-20 h-96 px-5">
        <div className="flex flex-col gap-6 w-72 mb-10 hidden md:flex">
          <div className="flex items-center gap-2">
            <BsFillSendFill className="text-2xl text-customBlue" />
            <div>peter895832@gmail.com</div>
          </div>

          <div className="flex items-center gap-2">
            <LuPhoneCall className="text-2xl text-customBlue" />
            <div>+91 8958326044</div>
          </div>

          <div className="flex items-center gap-2">
            <BsWhatsapp className="text-2xl text-customBlue" />
            <div className="ml-1">8958326044</div>
          </div>

          <a href="/resume.pdf" download="resume.pdf">
            <Button children="Download cv" className="w-44 mt-5" />
          </a>
        </div>

        <div className="w-full max-w-sm md:max-w-lg">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <Input placeholder="Your Name" className="w-full" 
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />

            <Input placeholder="Your Phone" type="number" className="mt-4 w-full" 
               onChange={(e)=>setPhone(e.target.value)}
               value={phone}
            />

            <Input placeholder="Your Email" type="email" className="mt-4 w-full" 
               onChange={(e)=>setEmail(e.target.value)}
               value={email}
            />
            <Input
              placeholder="Your Message"
              type="textarea"
              className="mt-4 w-full"
              rows="6"
              onChange={(e)=>setDescription(e.target.value)}
              value={description}
            />
            <Button
              children="Submit"
              className="mt-4 text-sm px-4 py-2 md:self-start"
              type="submit"
            />
          </form>
        </div>
      </div>
    </section>

  );
}

export default Contact;
