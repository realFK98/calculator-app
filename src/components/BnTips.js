export default function BnTips({ percent, onHandelChange }) {
  return (
    <button
      data={percent}
      className="bn text-[#F4FAFA]  bg-[#00494D] w-[145px] mb-3  rounded-[8px] h-14 "
      onClick={onHandelChange}
    >
      {percent}%
    </button>
  );
}
