import logoInvert from '../images/footer/logoInvert.png';
import note from '../images/footer/fluent_note-28-filled.png';
import github_logo from '../images/footer/akar-icons_github-fill.png';
import linked_logo from '../images/footer/bi_linkedin.png';

function App() {
    return (
    <div className="w-[1440px] h-[90px] pl-[67px] pr-[63px] py-[25px] bg-green-700 justify-end items-start gap-[937px] inline-flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <img src={logoInvert} alt="logo" className="w-10 h-10 relative shadow"/>
            <div className="text-white text-xl font-bold">REMINDER ME</div>
        </div>
        <div className="w-[182px] justify-center items-start gap-10 inline-flex">
            <div className="w-[34px] h-[34px] relative flex-col justify-start items-start flex">
                <div className="w-[34px] h-[34px] relative">
                </div>
            </div>
            <div className="w-[34px] h-[34px] relative flex-col justify-start items-start flex" />
            <div className="w-[34px] h-[34px] relative flex-col justify-start items-start flex" />
        </div>
    </div>
    );
  }
  
  export default App;