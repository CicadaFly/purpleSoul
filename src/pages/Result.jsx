import { useSelector } from "react-redux"
import border from "../assets/result.png"

const Result = () =>{
  const {name, question, id, card, secondRow} = useSelector((state)=>(
    {
      name: state.data.userName,
      question: state.data.userText,
      id: state.data.userId,
      card: state.data.Card,
      secondRow: state.data.secondRow
    }
  ))
  const resultCard = ["紫微","天府","太陽","太陰","七殺","破軍","貪狼","天機","天同","天梁","武曲","天相","廉貞","巨門",
                       "文昌","文曲","左輔","右弼","天魁","天鉞","化祿","化權","化科","化忌","擎羊","陀螺","火星","鈴星","地空","地劫","祿存","天馬",
                      "一","二","三","四","五","六","七","八","九","十","十一","十二"]

  return (
    <>
    <div className="container flex justify-center bg-[#fdfefd]">
      <img src={border} className="absolute max-h-[70vh] bg-[#88bad9] rounded-md mt-2"/>
     
        <div className="py-[4rem] break-words" style={{zIndex: 20,width: "20em",marginLeft:" 3rem",marginTop: "2rem",marginRight: "3rem"}}>
          <h1 className="text-lg text-center font-semibold">占卜結果</h1>
          <p className="my-1">你的名字是: {name}</p>
          <p className="my-1 text-ellipsis">你的問題是: {question}</p>
          <hr className="my-3"/>
          <p className="my-1 text-lg text-center font-semibold">你選的三張卡片是</p>
          <p className="my-1">主星卡: {resultCard[card[0]-1]}</p>
          <p className="my-1">輔星卡: {resultCard[card[1]-1]}</p>
          <p className="my-1">十二神牌卡: {resultCard[card[2]-1]}</p>
        </div>


    </div>
    </>

  )
}

export default Result