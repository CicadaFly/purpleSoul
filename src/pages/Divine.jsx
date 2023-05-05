import { useDispatch } from "react-redux"
import { addCard } from "../store"
import { useNavigate } from "react-router-dom"
import CardRow from "../components/divineAtoms/CardRow"
import cardPic from "../assets/Normal.jpg"
import cardPic2 from "../assets/Magic.jpg"
import cardPic3 from "../assets/Synchro.jpg"
import { useState } from "react"
// 可行作法
// 1.我有三行幾乎長一樣的<CardLine />
// 2.他們的差別在於 -張數 -背景色 -陣列內容
// 3.我要把資料傳入Redux中
// 主星 14 輔星 18 十二神牌 12
const Divine = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data, setData] = useState([0,0,0])
  const createRow = (length, count) => {
   let arr = Array.from({ length }, (x, i) => i + count)
   return arr.sort(() => Math.random()-0.5)};
  const firstRow = createRow(14, 1)
  const secondRow = createRow(18, 15)
  const thirdRow = createRow(12, 33)
  const cardSelectedHandler = (rowNumber,card) =>{
    let cardFile = data
    cardFile.splice(rowNumber-1,1,card)
    setData(cardFile)
  }
  const submitCardHandler = () =>{
    console.log(data,firstRow,secondRow,thirdRow)
    dispatch(addCard(data))
    dispatch(addRow(secondRow))
    navigate('/result')
  }


  return (
    <>
    <h3 className="text-center mt-2">主星牌 - 14張</h3>
      <div className="flex flex-row flex-wrap">
        <CardRow rowArray={firstRow} cardImage={cardPic} cardSelected={(card)=>cardSelectedHandler(1,card)}/>
      </div>
    <h3 className="text-center mt-2">輔星牌 - 18張</h3>
      <div className="flex flex-row flex-wrap">
        <CardRow rowArray={secondRow} cardImage={cardPic2} cardSelected={(card)=>cardSelectedHandler(2,card)}/>
      </div>
    <h3 className="text-center mt-2">十二神牌 - 12張</h3>
      <div className="flex flex-row flex-wrap">
        <CardRow rowArray={thirdRow} cardImage={cardPic3} cardSelected={(card)=>cardSelectedHandler(3,card)}/>
      </div>
    {/* <ExampleCard/> */}
    <div className="flex justify-center my-3">
    <button className="bg-yellow-700 rounded p-2"
            onClick={submitCardHandler}>
              我選好了
            </button>
    </div>
    </>
  )
}

export default Divine