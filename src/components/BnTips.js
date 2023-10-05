export default function BnTips({percent, onHandelChange}) {
  return (
    <button
      data={percent}
      className={`bn-tip text-[#F4FAFA]  bg-[#00494D] w-[135px] mb-3  rounded-[8px] h-14 `}
      onClick={onHandelChange}
    >
      {percent}%
    </button>
  );
}
