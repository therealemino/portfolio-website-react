import React, {useState} from 'react'
import Socials from './Socials'

export default function Footer(props) {
  const [name,setName] = useState("Name")
  const [email,setEmail] = useState("Email")
  const [info,setInfo] = useState("Your message")

  function handleNameChange (e) {
    const newName = e.target.value;
    // console.log(newName);
    setName(newName);
    e.preventDefault();
  }

  function handleEmailChange (e) {
    const newEmail = e.target.value;
    // console.log(newEmail);
    setEmail(newEmail);
    e.preventDefault();
  }

  function handleInfoChange (e) {
    const newInfo = e.target.value;
    // console.log(newInfo);
    setInfo(newInfo);
    e.preventDefault();
  }

    return (
        <footer ref={props.contactRefProp} className="bg-footer bg-right bg-cover bg-fixed md:bg-footer-md text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center font-semibold font-nunito text-4xl pt-2 ">Get in Touch</div>
              <div>
                <form action="mailto:ejeiokekeemmanuel@gmail.com" method="POST" encType="multipart/form-data" name="EmailForm" className="w-5/6 md:w-96 mx-auto">
                  <input type="text" onChange={handleNameChange} value={name} className="bg-transparent py-4 text-left w-full px-3 focus:outline-none text-white"/><hr className="mb-3"/>
                  <input type="email" onChange={handleEmailChange} value={email} className="bg-transparent py-4 text-left w-full px-3 focus:outline-none text-white"/><hr className="mb-3 w-full"/>
                  <textarea name="info" id="" cols="30" rows="10" onChange={handleInfoChange} value={info} className="bg-black py-4 text-left w-full px-3 text-white bg-opacity-60 rounded-md focus:outline-none"></textarea>
                  <button type="submit" className="block text-3xl mx-auto p-8 hover:text-4xl duration-300 m-2"><span className="fa fa-paper-plane"></span></button>
                </form>
                <hr/>
              </div>
              <div className="text-center">
                <a href="mailto: ejeiokekeemmanuel@gmail.com" className="text-md md:text-xl bg-black bg-opacity-60 p-6 m-2 rounded-xl block"><span className="fa fa-envelope pr-2"></span> ejeiokekeemmanuel@gmail.com</a>
                <a href="tel: +2349032235567" className="text-md md:text-xl bg-black bg-opacity-60 p-6 m-2 rounded-xl block"><span className="fa fa-phone pr-3"></span> 09032234467</a>
              </div>
              <Socials />
            </div>
          </div>
        </footer>
    )
}
