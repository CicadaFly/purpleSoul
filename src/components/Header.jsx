import cardImg from '../assets/card.svg'
// 可能會出現一個神奇bug，在於填寫完form之後又跳回首頁，變成重複提交使用者資料，post資料會變得很複雜
// 解法應該是要在dispatch那直接指定陣列或是userName，不要用迭代的

const Header = () => {
return(
  <nav className="flex items-center justify-between flex-wrap bg-amber-300 p-4">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <img src={cardImg} alt='Nav_Icon' className="max-h-12"/>
        <a href='/' className="font-semibold text-xl tracking-wider ml-3 text-zinc-950">洋羽紫靈</a>
    </div>
  </nav>
)}

export default Header