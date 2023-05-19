import cardImg from '../assets/card.svg'
import { AiOutlineInstagram } from 'react-icons/ai'


const Header = () => {
return(
  <nav className="flex items-center justify-between flex-wrap bg-[#b6c7d1] min-h-[13vh]">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <a href='/purpleSoul/'>
        <img src={cardImg} alt='Nav_Icon' className="max-h-12 px-3"/>
      </a>
        <a href='/purpleSoul/' className="font-semibold text-xl tracking-wider ml-1 text-zinc-950">
          洋羽紫靈
          </a>
      <a href="https://www.instagram.com/tarot_celine/" target="_blank" className="absolute right-[3rem]">
      <AiOutlineInstagram size={"2rem"} className='text-black ml-8'/>
      </a>
    </div>
  </nav>
)}

export default Header