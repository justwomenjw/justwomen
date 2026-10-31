import NavBar from "../components/layout/NavBar";
import imageAbout from '../assets/images/Women in colorful headscarves gathered outdoors in sunlight.jpg';
import { LocateFixedIcon,TelescopeIcon ,GemIcon  } from "@animateicons/react/lucide";
export default function About(){
    
    const aboutDataCard =[
        {title:'Mission',desc:`To amplify women's voices and expand opportunities for
                 Afghan women and girls through media, education, and storytelling`,icon:<LocateFixedIcon/>},
        {title:'Vision',desc:`A future where women can tell their own stories, access learning opportunities, and participate meaningfully in society`,icon:<TelescopeIcon />},
        {title:'Values',desc:`editorial integrity, dignity, inclusion, respect, safety, transparency, and accountability`,icon:<GemIcon />}
    ]
    return(
        <>
            <div className="">
                <NavBar/>
            </div>
        <header className="relative text-[#F8F7F4]">
                <img className="bg-cover w-full h-120 brightness-50" src={imageAbout} alt="" />
                <div className="absolute top-20 md:mx-40 mx-10 pb-10 md:w-150 w-100 ">
                <hr className="bg-[#D4AF63] h-1  w-12"/>
                <p className="text-[#D4AF63] my-5 font-bold">JUST WOMEN . FOR SOCIAL CHANGES</p>
                <h1 className="text-6xl font-serif my-9">About Just Women</h1>
                <h4>Creating space for Women’s,Voices,Stories and Oppurtunities.</h4><br />
                <p>illustrative documentary photograph; subjects are not identified as members of Just Women.</p>
                <div className="py-10">
           </div>
         </div>
    </header>
     {/* ---bottom header */}
            <div className="text-[#080808] grid md:grid-cols-2 bg-[#F8F7F4] py-10 px-15 md:px-25 items-center">
               <div className="md:pl-15">
                  <h2 className="text-[#D4AF63] text-2xl font-serif ">WHO WE ARE </h2>
                   <hr className="bg-[#D4AF63] my-3 h-1  w-12"/>
               </div>
               <div>
                  <h2 className="text-2xl py-2 font-serif">Our Story</h2>
                  <p>Just Women is a a women-led initiative working to strengthen the voice of Afghan women
                    and girls through independent storytelling,journalism,education and digital media.We believe women should
                    have space to tell thier own stories and shape the conversation that affect thier lives.Our work is 
                    guided by careful listening,respect for each person's choices, and a commitmentto making room for  learning and participation.</p>
               </div>
            </div>
            {/* ------- */}
            <div className="">
            <div className=" md:pl-47 pl-15 my-10">
                <h3 className="text-[#D4AF63] font-bold">WHAT GUIDES US</h3><br />
                 <h2 className="font-serif text-2xl">Mission, Vision & Values</h2>
            </div>
            <div  className="grid md:grid-cols-3 gap-5 m-auto w-[75%] ">

                {aboutDataCard.map((aboutData)=>(
                    <div className="border border-[#D4AF63]/50 p-6 md:my-10 hover:-translate-y-3 duration-100 transition-all shadow-sm shadow-amber-100">
                        <p className="pb-5 text-[#D4AF63]">{aboutData.icon}</p>
                        <p className="pb-5 font-serif font-bold">{aboutData.title}</p>
                        <h3>{aboutData.desc}</h3>
                    </div>
                ))}
                
            </div>
            </div>
            {/* ---------- */}
        <div className="bg-[#F8F7F4] py-2">
            <div className="mx-15 mt-20 pt-10">
                <h2 className="text-[#D4AF63] pb-3">LOOKING HEAD</h2>
                <h2 className="font-serif text-2xl">Our Goals</h2>
            </div>
            <div className="grid md:grid-cols-2 m-5">
                
                <div className=" border-t-2 border-[#D4AF63] m-10 py-5">
                    <h3 className="font-serif pb-3 font-bold">Short-Term Goals</h3>
                    <p>We aim to build a media presence,publish stories with care, welcome 
                        volunteers,and Develop learning oppurtunities.Each step depends on the 
                        people resources, and safeguards needed to do it responsibly.
                    </p>
                </div>
                <div className="border-t-2 border-[#D4AF63] m-10 py-5">
                    <h3 className="font-serif pb-3 font-bold">Long-Term Goals</h3>
                    <p>Over time , we hope to establish thoughtful partnerships and gradually expand
                        educational programs. we intend to grow at a pace that keeps participants' needs
                         and safety at the center.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}