import homeImage from '../images/home.png';


function Home() {
    return (
      <div className="Home">
        <div className="w-[991px] h-[266px]">
            <span className="text-zinc-900 text-[65px] font-bold leading-[82px]">Don't Miss Out On <br/>The </span>
            <span className="text-green-700 text-[65px] font-bold leading-[82px]">Important <br/>Things</span>
            <span className="text-zinc-900 text-[65px] font-bold leading-[82px]">.</span>
        </div>
        <div className="w-[545px] h-[227px]">
            <span className="text-black text-xl font-normal leading-[37px]">Do you or someone you know have a habit of forgetting stuff? Don't worry!!! here's </span>
            <span className="text-green-700 text-xl font-bold leading-[37px]">Reminder Me</span>
            <span className="text-green-700 text-xl font-normal leading-[37px]"> </span>
            <span className="text-black text-xl font-normal leading-[37px]">to the rescue. Reminder Me is a reminder management application that lets you send reminders through text message.</span>
        </div>
        <div className="w-[297px] h-[77px] bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow border border-white flex items-center justify-center">
        <div className="text-center text-neutral-50 text-2xl font-medium leading-7">Get Started</div>
        </div>
        <img className="w-[653px] h-[653px]" src={homeImage} alt="HomeImage"/>
      </div>
    );
  }
  
  export default Home;