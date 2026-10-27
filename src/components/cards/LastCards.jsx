import imageCard from '../../assets/images/headerImage.jpg';

export default function LastCards(){

    const date =new Date().now;

    const lastStory =[
        {title:'STORYTELLING',describ:'The Stories We Carry Forward',date},
        {title:'JOURNALISM',describ:'lEARNING TO Ask Better Questions',date},
        {title:'AUDIO',describ:'Finding a Voice On Air',date},
        {title:'EDUCATION',describ:'A Place To Kepp Learning',date},
        {title:'DIGITAL MEDIA',describ:'Behind The Camera,A Head of the Story',date},
    ]
    return(
        <>
            <div className=' w-auto m-5  grid grid-cols-1 md:grid-cols-3 gap-5'>
                {lastStory.map((lastItem)=>(
                    <div className='leading-10 rounded-2xl border border-gray-500/20 p-3 overflow-hidden'>
                        <img className='h-50 w-full object-cover rounded-xl' src={imageCard} alt="" />
                        <div className=''>
                            <h2 className='text-[#D4AF63]'>{lastItem.title}</h2>
                            <h2>{lastItem.date}</h2>
                        </div>
                        <h3 className='font-serif'>{lastItem.describ}</h3>
                        <button className="underline pb-5 ">Read Summary </button>
                    </div>
                ))}
                
            </div>
        </>
    )
}