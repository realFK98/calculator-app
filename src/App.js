import logo from './img/logo.svg';
import person from './img/icon-person.svg';
import dollar from './img/icon-dollar.svg';
import { useState } from 'react';
import BnTips from './components/BnTips';
import Input from './components/Input';
import Container from './components/Container';

const App = function () {
  let selectTip;
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);
  let curPeople;
  const tips = [5, 10, 15, 20, 25];
  let curPrice;

  const calculator = function () {
    if (!(selectTip && curPeople && curPrice)) {
      console.log('not fill');
      return;
    }
    const ans = curPeople * (curPrice * (selectTip / 100));
    setTip(ans);
    setTotal(ans + Number(curPrice));
  };

  return (
    <Container>
      <img src={logo} className=" my-[40px] w-[100px] my-10"></img>
      <div
        className="container-app bg-white w-[80%] min-w-[375px] h-[80%] rounded-[30px] 
      font-bold p-9  text-[#5E7A7D] text-[20px] flex flex-col"
      >
        <Input
          labal={'Bill'}
          logo={dollar}
          onHandelChange={({ target }) => (curPrice = target.value)}
        />
        <p className="mb-5">Select Tip</p>
        <div className="select-tip flex  flex-wrap justify-between mb-4">
          {tips.map((tip) => (
            <BnTips
              percent={tip}
              onHandelChange={({ target }) =>
                (selectTip = target.getAttribute('data'))
              }
            />
          ))}
          <input
            className="bn  bg-[#F4FAFA] w-[145px] mb-3 rounded-[8px] h-14 text-center "
            type="text"
            placeholder="custom"
          ></input>
        </div>
        <Input
          labal={'Number of people'}
          logo={person}
          onHandelChange={({ target }) => (curPeople = target.value)}
        />
        <div className="display h-full rounded-[20px]  bg-black flex flex-col p-5">
          <div className="tip-amount h-1/3 flex">
            <p className="text-white text-[16px] w-1/2">
              Tip amount <br />
              <spen className="text-[14px] text-zinc-300">/ person</spen>
            </p>
            <p className="w-1/2 text-[30px] text-right text-[#3098A1]">
              ${tip}
            </p>
          </div>
          <div className="total-amount h-1/3 flex">
            <p className="text-white text-[16px] w-1/2">
              Total amount <br />
              <spen className="text-[14px] text-zinc-300">/ person</spen>
            </p>
            <p className="w-1/2 text-[30px] text-right text-[#3098A1]">
              ${total}
            </p>
          </div>
          <button
            onClick={calculator}
            className="bn-reset h-1/4 mt-auto bg-[#3098A1] rounded-[8px] text-[#00494D]"
          >
            Reset
          </button>
        </div>
      </div>
    </Container>
  );
};

export default App;
