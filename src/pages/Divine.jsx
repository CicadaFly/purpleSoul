import { useDispatch } from "react-redux"
import { addCard } from "../store"
import { useNavigate } from "react-router-dom"
import CardRow from "../components/divineAtoms/CardRow"
import cardPic from "../assets/cardback.png"
import { useState } from "react"

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
    console.log(data.some((e)=>e===0))
    if (data.some((e)=>e===0)){
      alert("請在各區域都挑選一張")
    } else {
    dispatch(addCard(data))
    navigate('/result')
  }
  }


  return (
    <>
    <div className="flex flex-row flex-wrap bg-sky-50">
      <h3 className="text-center mt-2 w-full">主星牌 - 14張</h3>
      <CardRow rowArray={firstRow} cardImage={cardPic} cardSelected={(card)=>cardSelectedHandler(1,card)}/>
    </div>
    <div className="flex flex-row flex-wrap bg-sky-100">
      <h3 className="text-center mt-2 w-full">輔星牌 - 18張</h3>
      <CardRow rowArray={secondRow} cardImage={cardPic} cardSelected={(card)=>cardSelectedHandler(2,card)}/>
    </div>
    <div className="flex flex-row flex-wrap bg-sky-200">
      <h3 className="text-center mt-2 w-full">十二神牌 - 12張</h3>
      <CardRow rowArray={thirdRow} cardImage={cardPic} cardSelected={(card)=>cardSelectedHandler(3,card)}/>
      <div className="flex justify-center my-3 w-full">
    <button className="bg-yellow-700 rounded p-2"
            onClick={submitCardHandler}>
              我選好了
    </button>
    </div>
    </div>

    </>
  )
}

export default Divine