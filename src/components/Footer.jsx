import { AiFillInstagram,AiFillGithub } from "react-icons/ai"
const Footer = () =>{
return (
  <footer className="bg-[#b6c7d1] p-3 sm:block hidden h-[7vh]">
    <div className="flex justify-center mt-auto">
      <a href="https://www.instagram.com/tarot_celine/" target="_blank" className="flex flex-row">
      <AiFillInstagram size={"1.5rem"}/>
      <span className="font-light">tarot_celine</span>
      </a>
      <div className="absolute right-1 bottom-0 text-xs text-light text-gray-500">
        <a href="https://cicadafly.github.io/portfolio2023/" target="_blank" className="flex flex-row"><span>Made by Harvie</span><AiFillGithub/></a>
      </div>
    </div>

  </footer>
)
}

export default Footer