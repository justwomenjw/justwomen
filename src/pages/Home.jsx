import NavBar from "../components/layout/NavBar";
import headerImage from '../assets/images/headerImage.jpg';

export default function Home(){
    return(
       <>
       <div>
        <NavBar/>
       </div>
       <header className="relative text-[#080808]">
            <img className="bg-cover w-full h-120 brightness-50" src={headerImage} alt="" />
            <div className="absolute top-20 md:mx-40 mx-10 pb-10 md:w-150 w-100 ">
               <hr className="bg-[#D4AF63] h-1  w-12"/>
               <p className="text-[#D4AF63] my-5">JUST WOMEN . Can Change Society</p>
               <h1 className="text-2xl font-serif my-3">Amplifying Women’s Voices for a Brighter Future</h1>
               <p>Just Women is a women-led media and storytelling initiative creating opportunities for Afghan women and girls through journalism, education, storytelling and digital media.</p>
                   <div className="py-10">
                     <button className="bg-[#D4AF63] p-2 mr-5">Explore Stories</button>
                     <button className="border-2 border-[#D4AF63] text-[#FFFFFF]  p-2">Join Our Team</button>
                   </div>
            </div>
            
       </header>
       {/* ---bottom header */}
            <div className="text-[#080808] grid md:grid-cols-2 bg-[#F8F7F4] py-10 px-15 md:px-25 items-center">
               <div className="md:pl-15">
                  <h2 className="text-[#D4AF63] text-2xl font-serif ">OUR PURPOSE </h2>
                   <hr className="bg-[#D4AF63] my-3 h-1  w-12"/>
               </div>
               <div>
                  <h2 className="text-2xl py-2 font-serif">Stories matter when women tell them.</h2>
                  <p>Just Women brings together journalism,education,storytelling and digital media to create space for Afghan women's voices.
                      We believe women should shape the stories told about thier  lives and communities.</p>
               </div>
            </div>
       </>

        
        
        
    );
}