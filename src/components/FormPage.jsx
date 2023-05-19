import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store";
const FormPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formSubmitHandler = (e) =>{
    e.preventDefault()
    console.log(e.target.name.value, e.target.question.value)
    const userName = e.target.name.value
    const userText = e.target.question.value
    if (userName && userText !== ""){
    dispatch(addUser({userName,userText}))
    navigate('/divine')} else {
      alert("請填寫完整資料")
    }
  }
  return (
    <form className="max-w-xl mx-auto mt-7 bg-[#98afbd] rounded mb-2" onSubmit={formSubmitHandler}>
      <div className="mb-4 pt-1">
        <label className="block text-black font-bold mx-2 mb-1" htmlFor="name">
          稱呼
        </label>
        <input
          className="w-[90%] border rounded py-2 px-3 w-80 ml-2 text-gray-700 leading-tight"
          id="name"
          type="text"
          placeholder="輸入您的稱呼(必填)"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-black font-bold mx-2 mb-1"
          htmlFor="question"
        >
          想問什麼
        </label>
        <textarea
          className="w-[90%] resize-none border rounded py-2 px-3 w-80 ml-2 text-gray-700 leading-tight"
          id="question"
          placeholder="輸入您想問的問題(必填)"
          rows="5"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-[#8fbfdc] hover:bg-slate-500 text-black font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          送出
        </button>
      </div>
    </form>
  );
};

export default FormPage;
