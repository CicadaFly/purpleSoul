import { AiFillInstagram } from "react-icons/ai"
const Footer = () =>{
return (
  <footer className="bg-[#b6c7d1] p-3 sm:block hidden h-[7vh]">
    <div className="flex justify-center mt-auto">
      <a href="https://www.instagram.com/tarot_celine/" target="_blank" className="flex flex-row">
      <AiFillInstagram size={"1.5rem"}/>
      <span className="font-light">tarot_celine</span>
      </a>
    </div>
  </footer>
)
}

export default Footer