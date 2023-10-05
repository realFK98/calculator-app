export default function Container({ children }) {
  return (
    <div className="App-calculator w-full h-[1024px] bg-[#C5E4E7] flex flex-col items-center">
      {children}
    </div>
  );
}
