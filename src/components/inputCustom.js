export default function InputCustom({onHandelChange, value}) {
  return (
    <input
      className="bn  bg-[#F4FAFA] w-[145px] mb-3 rounded-[8px] h-14 text-center "
      type="text"
      placeholder="custom"
      onChange={onHandelChange}
      value={value}
    ></input>
  );
}
