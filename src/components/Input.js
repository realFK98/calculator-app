export default function Input({ labal, logo, onHandelChange, value }) {
  return (
    <label className="h-[170px] mt-2 mb-14">
      <p>{labal}</p>
      <div className="bg-[#F4FAFA] h-full mt-2 rounded-[8px]  flex ">
        <img src={logo} className="scale-[50%] ml-4 " />
        <input
          value={value}
          onChange={onHandelChange}
          className="h-full pr-5 text-end bg-[#F4FAFA] w-full rounded-[8px]"
          type="text"
        />
      </div>
    </label>
  );
}
