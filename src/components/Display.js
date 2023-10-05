export default function Display({children}) {
  return (
    <div className="display h-full rounded-[20px]  bg-black flex flex-col p-5 overflow-hidden">
      {children}
    </div>
  );
}
