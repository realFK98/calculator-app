export default function Model({children}) {
  return (
    <div
      className="container-app bg-white w-[80%] min-w-[375px] h-[80%] rounded-[30px] 
  font-bold p-9  text-[#5E7A7D] text-[20px] flex flex-col"
    >
      {children}
    </div>
  );
}
