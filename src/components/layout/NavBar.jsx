import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.jpg';
import { MenuIcon, XIcon } from '@animateicons/react/lucide';
import { useState } from 'react';

//----navbar menu item
const menu = [
    {title:'Home', path:'/'},
    {title:'About Us', path:'/about'},
    {title:'Media & Stories', path:'/story'},
    {title:'Education & Training', path:'/education'},
    {title:'Join our Team', path:'/team'},
    {title:'Share Your Story', path:'/yourStory'},
    {title:'Partners & Support', path:'/support'},
    {title:'Contact', path:'/contact'},
];

export default function NavBar() {

//state
const [isOpen,setIsOpen]=useState(false);



  return (
    <nav className="w-full bg-black text-white">
      <div className="flex items-center justify-between px-5 py-5">
        <div className="flex shrink-0 items-center gap-3">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={Logo}
            alt="Just Women logo"
          />
          <div>
            <h1 className="font-bold">Just Women</h1>
            <p className="text-[#D4AF63]">Can Change Society</p>
          </div>
        </div>
         <button onClick={()=>setIsOpen(!isOpen)} className='md:hidden'>
            {isOpen ?(<XIcon size={40} duration={1} color="#D4AF63"/>):(<MenuIcon size={40} duration={1} color="#D4AF63"/>)}
         </button>

            {/* ---menu in desktop---- */}
        <div className=" items-center gap-4 hidden md:flex">
          <ul className="flex items-center gap-5 text-[18px]">
            {menu.map((menuItem) => (
              <li key={menuItem}>
                <Link
                  to={menuItem.path}
                  className="transition-colors hover:text-amber-400 hover:underline"
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>
          <button type="button" className="shrink-0 rounded-2xl bg-[#D4AF63] px-4 py-2 text-black hover:bg-amber-300">
             En / دری</button>
        </div>
      </div>
      
            {/* ---menu in Mobile---- */}
            <div className='md:hidden'>
                {isOpen && (
                <div className="md:hidden flex flex-col gap-4 border-t border-white/20 px-5 py-4">
                    <ul className="flex flex-col gap-5">
                        {menu.map((menuItem) => (
                        <li key={menuItem.path}>
                            <Link
                            to={menuItem.path}
                            className="transition-colors hover:text-amber-400 hover:underline"
                            >
                            {menuItem.title}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    <button type="button" className="shrink-0 rounded-2xl bg-amber-400 px-4 py-2 text-black hover:bg-amber-300">
                        En / دری</button>
                  </div>
            )}
            </div>
            
    </nav>
  );
}
