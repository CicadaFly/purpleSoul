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
    let arr = Array.from({ length }, (x, i) => i + count);  
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }    
    return arr;};
  const firstRow = createRow(14, 1)
  const secondRow = createRow(18, 15)
  const thirdRow = createRow(12, 33)
  const cardSelectedHandler = (rowNumber,card) =>{
    let cardFile = data
    cardFile.splice(rowNumber-1,1,card)
    setData(cardFile)
  }
  const submitCardHandler = () =>{
    if (data.some((e)=>e===0)){
      alert("請在各區域都挑選一張")
    } else if (data[1] === 32) {
      data[1] = Math.round(Math.random() * (31 - 15)) + 15 
      dispatch(addCard(data))
      navigate('/result')
    } else {
    dispatch(addCard(data))
    navigate('/result')
  }
  }
  console.log(secondRow)

  return (
    <>
    <div className="flex flex-row flex-wrap bg-[#fdfefd]">
      <h3 className="text-center mt-2 w-full text-lg font-semibold">主星牌 - 14張</h3>
      <CardRow rowArray={firstRow} cardImage={cardPic} cardSelected={(card)=>cardSelectedHandler(1,card)}/>
    </div>
    <div className="flex flex-row flex-wrap bg-[#e7edf1]">
      <h3 className="text-center mt-2 w-full text-lg font-semibold">輔星牌 - 18張</h3>
      <CardRow rowArray={secondRow} cardImage={cardPic} cardSelected={(card)=>cardSelectedHandler(2,card)}/>
    </div>
    <div className="flex flex-row flex-wrap bg-[#b6c7d1]">
      <h3 className="text-center mt-2 w-full text-lg font-semibold">十二神牌 - 12張</h3>
      <CardRow rowArray={thirdRow} cardImage={cardPic} cardSelected={(card)=>cardSelectedHandler(3,card)}/>
      <div className="flex justify-center my-3 w-full">
    <button className="bg-[#8fbfdc] hover:bg-slate-500 text-black font-bold p-3 rounded-md"
            onClick={submitCardHandler}>
              我選好了
    </button>
    </div>
    </div>

    </>
  )
}

export default Divine