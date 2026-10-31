import { ArrowDownToLine } from "@animateicons/react/huge";
import cardImage from '../../assets/images/headerImage.jpg';


export default function HomeCard(){
    return(
        <>
            <div className="border border-black/20 w-full rounded-2xl shadow-md overflow-hidden">
             <img className="h-60 w-full object-cover" src={cardImage} alt="card" />
                <p className="text-[#D4AF63] pl-5 py-3">01/ VOICES</p>
                <h2 className="font-serif text-2xl pl-5 py-3">Media & Stories</h2>
                <p className="text-gray-600 pl-5 pb-2">A space for thoughtful reporting  and first-person perspective that place women's voices at the center.</p>
                <button className="flex underline font-bold pl-5 py-5">Explore Stories <ArrowDownToLine color='#D4AF63'/></button>
            </div>        
        </>
    );
}