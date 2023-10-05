export default function Button({onHandleClick, content}) {
  return (
    <button
      onClick={onHandleClick}
      className={`bn-reset h-1/4 mt-auto  bg-[#3098A1] rounded-[8px] text-[#00494D]`}
    >
      {content}
    </button>
  );
}
