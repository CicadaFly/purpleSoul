import { AiFillInstagram } from "react-icons/ai"
const Footer = () =>{
return (
  <footer className="bg-amber-300 p-3 sm:block hidden h-[7vh]">
    <div className="flex justify-center mt-auto">
      <a href="https://www.instagram.com/tarot_celine/" target="_blank" className="flex flex-row">
      <AiFillInstagram size={"1.5rem"}/>
      <span className="font-bold">洋羽紫靈</span>
      </a>
    </div>
  </footer>
)
}

export default Footer