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
            className="absolute inset-0 bg-no-repeat bg-cover z-10 items-center "
            style={{ 
              backgroundImage: `url(${vector})`,
            }}
        ></div>

        {/* ContactBackground1 div that overlays vector and Background2 */}
        <div 
            className="contact absolute inset-4 bottom-12 bg-center bg-no-repeat bg-cover rounded-custom z-20"
            style={{ 
              backgroundImage: `url(${Background2})`,
            }}
        >
          {/* Centering the ContactImage inside ContactBackground1 */}
          <div 
              className="flex items-start justify-center h-full w-full" // change items-start to items-center for vertical centering
          >
            <img src={ContactImage} alt="Contact Us" className="w-[236px] h-[236px]" />
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
