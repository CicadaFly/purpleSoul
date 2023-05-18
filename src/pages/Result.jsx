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
    <div className="container flex justify-center">
      <div style={{
        position:"absolute",
        zIndex: 99,
        backgroundImage: `url(${border})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
        className="w-[50vw] sm:max-w-lg sm:min-h-40">
        <div className="py-20 px-10 break-words">
          <h1>Here is Result</h1>
          <p>你的名字是: {name}</p>
          <p className="text-ellipsis">你的問題是: {question}</p>
          <p>你的占卜結果如下:</p>
          <p>主星卡: {resultCard[card[0]-1]}</p>
          <p>輔星卡: {resultCard[card[1]-1]}</p>
          <p>十二神牌卡: {resultCard[card[2]-1]}</p>
        </div>
    </div>
    </div>
    </>

  )
}

export default Result