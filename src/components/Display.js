export default function DisplayAns({ titel, show }) {
  return (
    <div className="tip-amount h-1/3 flex">
      <p className="text-white text-[16px] w-1/2">
        {titel} <br />
        <spen className="text-[14px] text-zinc-300">/ person</spen>
      </p>
      <p className="w-1/2 text-[30px] text-right text-[#3098A1]">${show}</p>
    </div>
  );
}
