import NavBar from "../components/layout/NavBar";
import headerImage from '../assets/images/headerImage.jpg';
// import image1 from '../assets/images/Woman writing notes at a table.jpg'
import image2 from '../assets/images/Women in colorful headscarves gathered outdoors in sunlight.jpg';
import HomeCard from "../components/cards/HomeCard";
import LastCards from "../components/cards/LastCards";
import { ArrowDownToLine } from "@animateicons/react/lucide";

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
               <p className="text-[#D4AF63] my-5 font-bold">JUST WOMEN . Can Change Society</p>
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
            {/* ----------cards----- */}
            <div className="mx-7 pt-15">
              <h3 className="text-[#D4AF63] text-xl">What We Do</h3>
              <p className="font-serif text-2xl">A Platform for voices  and posibility</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 m-5 gap-6 max-w-max max-w-5xl ">
               <HomeCard/>
               <HomeCard/>
            </div>
               {/* --------latest card-------- */}
               
               <div className="bg-[#fff5de70] py-15 my-30 leading-10">
                  <div className=" px-10">
                     <h3 className="text-[#D4AF63]">FROM THE EDITORIAL DESK</h3>
                     <h2 className="font-serif text-xl">Latest Stories</h2>
                     <p className="text-gray-700">Editorial themes and illustrative summaries;photographs depict stock subjects, not the people described.</p>
               </div>
                  <LastCards/>
               </div>
               {/* --------- */}
                  <div >
                     <img className="h-90  w-full opacity-80 relative " src={image2} alt="" />
                     <div className="absolute md:top-690 md:ml-40 ml-10 top-1150 ">
                        <hr className="bg-[#D4AF63] h-1  w-12 my-3"/>
                        <h2 className=" font-serif text-white text-2xl mb-6">Be Part of the Change</h2>
                      <button className=" bg-[#D4AF63]   p-2">Join Our Team</button>
                     </div>
                  </div>
                  {/* ========== */}
                  <div className="grid md:grid-cols-3 my-15 justify-between ml-10 md:ml-40 ">
                     <div>
                        <h3 className="text-[#D4AF63] pb-2">YOUR VOICE MATTER</h3>
                        <h2 className="font-serif pb-2">Share Your Story</h2>
                        <p className="max-w-sm">Have prespective you would like to share? Start a conversation with our team by email.</p>
                        <button className="flex underline font-bold  py-5">Explore Stories <ArrowDownToLine color='#D4AF63'/></button>
                     </div>
                     <hr className="md:rotate-90 h-10 md:mt-10 mt-5 w-50 text-[#D4AF63]" />
                     <div>
                        <h3 className="text-[#D4AF63] pb-2">YOUR VOICE MATTER</h3>
                        <h2 className="font-serif pb-2">Sharer Your Story</h2>
                        <p className="max-w-sm">Have prespective you would like to share? Start a conversation with our team by email.</p>
                        <button className="flex underline font-bold  py-5">Explore Stories <ArrowDownToLine color='#D4AF63'/></button>
                     </div>
                  </div>
            
       </>

        
        
        
    );
}