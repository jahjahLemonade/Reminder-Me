import Footer from './Footer';
import NavigationBar from './navigation_bar/BaseNav.jsx';
import Background2 from '../images/contact/contact_rectangle11.png';
import ContactImage from '../images/contact/contact_us.png';
import ContactBackground1 from '../images/contact/contact_background_light.png';
import vector from '../images/contact/contact_vector.png'

function Contact() {
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
                backgroundImage: `url(${vector})`,
              }}
          ></div>
  
          {/* ContactBackground1 div that overlays vector */}
          <div 
              className="contact mt-5 mb-5 px-4 bg-center bg-no-repeat bg-cover rounded-custom z-30 relative"
              style={{ 
                backgroundImage: `url(${Background2})`,
              }}
          >
              {/* Content inside ContactBackground1 */}
              <div className="flex flex-col pl-2.5 space-y-2 px-2.5"> 
                  <img src={ContactImage} alt="Contact Us" className="w-[236px] h-[236px]" />
                  <div className="text-black text-xl font-semibold font-poppins">Contact us</div>
  
                  <div className="text-black text-xs font-light font-poppins">Email address</div>
                  <input type="email" className="w-full h-[54px] bg-white rounded-lg border border-violet-100 px-3" />
  
                  <div className="text-black text-xs font-light font-poppins">Contact</div>
                  <input type="text" className="w-full h-[54px] bg-white rounded-lg border border-violet-100 px-3" />
  
                  <div className="text-black text-xs font-light font-poppins">Message</div>
                  <textarea className="w-full h-[120px] bg-white rounded-lg border border-violet-100 p-3 resize-none"></textarea>
  
                  <div className="w-[186px] h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow border border-white" />
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
