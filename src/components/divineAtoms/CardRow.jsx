import { useState } from "react"

const CardRow = ({rowArray,cardImage,cardSelected})=> {
const [selected, setSelected] = useState(-1)
const selecting = "border-4 border-indigo-700"
const selectorHandler = (i,card) =>{
  setSelected(i)
  cardSelected(card)
}

  return(
  rowArray.map((card,i)=>{
  return(
    <div className="flex basis-1/4 md:basis-1/6 h-auto items-center justify-center my-2" key={i} >
      <div className={selected === i ? selecting : "border-4 border-transparent"} onClick={()=>selectorHandler(i,card)} id={card}>
        <img src={cardImage} alt="card" className='h-40' id={card}/>
      </div>
    </div>
  )
}))}

export default CardRow