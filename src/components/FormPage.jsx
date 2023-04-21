import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const navigate = useNavigate()
  const formSubmitHandler = (e) =>{
    e.preventDefault()
    console.log(e.target.name.value, e.target.question.value)
    navigate('./Divine')
  }
  return (
    <form className="max-w-xl mx-auto mt-10 bg-cyan-300 rounded" onSubmit={formSubmitHandler}>
      <div className="mb-4 pt-1">
        <label className="block text-gray-700 font-bold mx-2" htmlFor="name">
          稱呼
        </label>
        <input
          className="appearance-none border rounded py-2 px-3 w-80 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="輸入您的稱呼"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mx-2"
          htmlFor="question"
        >
          想問什麼
        </label>
        <textarea
          className="resize-none appearance-none border rounded py-2 px-3 w-80 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="question"
          placeholder="輸入您想問的問題"
          rows="5"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          送出
        </button>
      </div>
    </form>
  );
};

export default FormPage;
