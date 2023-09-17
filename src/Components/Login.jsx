import Footer from './Footer';
import NavigationBar from './navigation_bar/BaseNav.jsx';

function Login() {
  return (
    <div className="Home flex flex-col min-h-screen">
      {/* Navigation bar and main content */}
      <div className='NavBar'>
        <NavigationBar/ >
      </div>
      <div className="flex-grow">
          {/* All your other components and content go here */}
      </div>
      
      {/* Footer */}
      <div className='Footer'>
        <Footer/ >
      </div>
    </div>
  );
}
  
export default Login;