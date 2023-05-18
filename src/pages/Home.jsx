import FormPage from "../components/FormPage"
import Intro from "../components/Intro";
import { useState } from "react";
import {AiOutlineCaretUp,AiOutlineCaretDown} from  "react-icons/ai";

const Home = () =>{
  const [intro, setIntro] = useState(false)
  return (
    <div className="container bg-[#fdfefd]">
    <div className="mt-2 flex justify-center">
      <button className="bg-[#8fbfdc] hover:bg-slate-500 text-white font-bold py-2 px-8 rounded-md flex flex-row" onClick={(e)=>{setIntro(!intro)}}>
        <span>說明</span>
        {!intro ? <AiOutlineCaretUp className="ml-1 self-center"/> : <AiOutlineCaretDown className="ml-1 self-center"/>}        
        </button>
    </div>
    {intro && <Intro/>}
    <FormPage/>
    </div>
  )
}

export default Home