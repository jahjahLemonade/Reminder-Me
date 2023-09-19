import Footer from './Footer';
import NavigationBar from './navigation_bar/BaseNav.jsx';
import Background2 from '../images/contact/contact_rectangle11.png';
import ContactImage from '../images/contact/contact_us.png';
import ContactBackground1 from '../images/contact/contact_background_light.png';
import Vector from '../images/contact/contact_vector.png'
import Email from '../images/contact/email.png'
import Note from '../images/contact/note.png'
import Phone from '../images/contact/phone.png'
import React, { useState } from 'react';


function Contact() {
    const [emailFocused, setEmailFocused] = useState(false);
    const [emailValue, setEmailValue] = useState("");

    const [contactValue, setContactValue] = useState('');
    const [contactFocused, setContactFocused] = useState(false);

    const [messageValue, setMessageValue] = useState('');
    const [messageFocused, setMessageFocused] = useState(false);

    return (
      <div className="Home flex flex-col min-h-screen">
        {/* Navigation bar */}
        <div className='NavBar'>
          <NavigationBar />
        </div>
        
        {/* Main content with the two backgrounds */}
        <div className="flex-grow relative bg-center bg-cover" style={{ backgroundImage: `url(${ContactBackground1})` }}>
          
          {/* Vector image overlay */}
          <div 
              className="absolute inset-0 bg-no-repeat bg-cover z-10 items-center"
              style={{ 
                backgroundImage: `url(${Vector})`,
              }}
          ></div>
  
          {/* ContactBackground1 div that overlays vector */}
          <div 
              className="contact mt-[4.5%] mb-[9%] px-[2%] mx-[4.5%] bg-center bg-no-repeat bg-cover rounded-custom z-30 relative"
              style={{ 
                backgroundImage: `url(${Background2})`,
              }}
          >
              {/* Content inside ContactBackground1 */}
              <div className="flex flex-col pl-2.5 space-y-2 px-2.5 pb-[10%]">  {/* Added pb-[5%] here */}
                <img src={ContactImage} alt="Contact Us" className="w-[236px] h-[236px]" />
                <div className="text-black text-xl font-semibold font-poppins mb-2">Contact us</div>
                <div className="relative flex flex-col">
                    <div className="text-black text-xs font-light font-poppins mb-2 md:text-[1.0001rem] md:mt-3">Email address</div>
                    <div className="relative flex items-center">
                        <img src={Email} alt="Email Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input 
                            type="email"
                            className="w-full h-[54px] bg-white rounded-lg border border-violet-100 pl-10" 
                            onFocus={() => setEmailFocused(true)}
                            onBlur={() => setEmailFocused(false)}
                            onChange={(e) => setEmailValue(e.target.value)}
                        />
                        <div 
                            className={`absolute left-10 transform transition-all duration-300 ${emailFocused || emailValue ? 'top-2 text-xs opacity-50' : 'text-sm top-1/2 -translate-y-1/2 opacity-100'} text-neutral-300 font-light font-poppins`}
                        >
                            Enter email
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col mb-4">
                    <div className="text-black text-xs font-light font-poppins mb-2 md:text-[1.0001rem]">Contact</div>
                    <div className="relative flex items-center">
                        <img src={Phone} alt="Phone Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input 
                            type="text"
                            className="w-full h-[54px] bg-white rounded-lg border border-violet-100 pl-10"
                            onFocus={() => setContactFocused(true)}
                            onBlur={() => setContactFocused(false)}
                            onChange={(e) => setContactValue(e.target.value)}
                        />
                        <div 
                            className={`absolute left-10 transform transition-all duration-300 ${contactFocused || contactValue ? 'top-2 text-xs opacity-50' : 'text-sm top-1/2 -translate-y-1/2 opacity-100'} text-neutral-300 font-light font-poppins`}
                        >
                            Enter phone number
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col">
                    <div className="text-black text-xs font-light font-poppins mb-2 md:text-[1.0001rem]">Message</div>
                    <div className="relative">
                        <img src={Note} alt="Note Icon" className="absolute left-3 top-4" />
                        <textarea
                            className="w-full h-[120px] bg-white rounded-lg border border-violet-100 pl-10 p-3 resize-none"
                            onFocus={() => setMessageFocused(true)}
                            onBlur={() => setMessageFocused(false)}
                            onChange={(e) => setMessageValue(e.target.value)}
                        ></textarea>
                        <div 
                            className={`absolute left-10 transform transition-all duration-300 ${messageFocused || messageValue ? 'top-1 text-xs opacity-50' : 'top-4 text-sm opacity-100'} text-neutral-300 font-light font-poppins`}
                        >
                            Write message
                        </div>
                    </div>
                </div>
                <button className="w-[186px] h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow border border-white flex items-center justify-center mb-5">  {/* Added mb-5 here */}
                <span className="text-neutral-50 text-xs font-semibold font-poppins leading-7 md:text-[1.1rem]">Submit</span>
                </button>
              </div> 
          </div>
        </div>
        
        {/* Footer */}
        <div className='Footer'>
          <Footer />
        </div>
      </div>
    );
}

export default Contact;
