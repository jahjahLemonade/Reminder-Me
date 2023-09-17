import Footer from './Footer';
import NavigationBar from './navigation_bar/BaseNav.jsx';
import Background2 from '../images/contact/contact_rectangle11.png';
import ContactImage from '../images/contact/contact_us.png';
import ContactBackground1 from '../images/contact/contact_background_light.png';

function Contact() {
  return (
    <div className="Home flex flex-col min-h-screen">
      {/* Navigation bar */}
      <div className='NavBar'>
        <NavigationBar />
      </div>
      
      {/* Main content with the two backgrounds */}
      <div className="flex-grow relative bg-center bg-cover" style={{ backgroundImage: `url(${ContactBackground1})` }}>
        
        {/* ContactBackground1 div that overlays Background2 */}
        <div 
            className="contact absolute inset-4 bottom-12 bg-center bg-no-repeat bg-cover rounded-custom"
            style={{ 
              backgroundImage: `url(${Background2})`,
            }}
        >
          {/* Centering the ContactImage inside ContactBackground1 */}
          <div 
              className="flex items-start justify-center h-full pt-4 bg-center bg-no-repeat bg-cover w-[236px] h-[236px]"
              style={{ 
                backgroundImage: `url(${ContactImage})`,
              }}
          ></div>
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
