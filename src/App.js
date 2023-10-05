import person from './img/icon-person.svg';
import dollar from './img/icon-dollar.svg';
import {useEffect, useState} from 'react';
import BnTips from './components/BnTips';
import Input from './components/Input';
import Container from './components/Container';
import logo from './img/logo.svg';
import InputCustom from './components/inputCustom';
import Display from './components/Display';
import Ans from './components/Ans';
import Button from './components/Button';
import Model from './components/Model';

const App = function () {
  const [selectTip, setSelectTip] = useState();
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [curPeople, setCurPeople] = useState();
  const tips = [5, 10, 15, 20, 25];
  const [curPrice, setCurPrice] = useState();
  const clear = function () {
    setSelectTip('');
    setCurPrice('');
    setCurPeople('');
    setTotal(0);
    setTip(0);
    clearSelect();
  };

  const calculator = function () {
    if (!(selectTip && curPeople && curPrice)) return;
    const ans = curPeople * (curPrice * (selectTip / 100));
    setTip(ans.toFixed(2));
    setTotal((ans + Number(curPrice)).toFixed(2));
  };

  const isSelect = function (e) {
    e.classList.remove('bg-[#00494D]');
    e.classList.add('bg-[#3098A1]');
  };

  const clearSelect = function () {
    document.querySelectorAll('.bn-tip').forEach((tip) => {
      tip.classList.remove('bg-[#3098A1]');
      tip.classList.add('bg-[#00494D]');
    });
  };

  useEffect(calculator);
  return (
    <Container>
      <img src={logo} className="w-[100px] my-10"></img>
      <Model>
        <Input
          labal={'Bill'}
          logo={dollar}
          onHandelChange={({target}) => setCurPrice(target.value)}
          value={curPrice}
        />
        <p className="mb-5">Select Tip</p>
        <div className="select-tip flex  flex-wrap justify-between mb-4">
          {tips.map((tip) => (
            <BnTips
              percent={tip}
              onHandelChange={({target}) => {
                setSelectTip(target.getAttribute('data'));
                clearSelect();
                isSelect(target);
              }}
            />
          ))}
          <InputCustom
            onHandelChange={({target}) => setSelectTip(target.value)}
            value={selectTip}
          />
        </div>
        <Input
          labal={'Number of people'}
          logo={person}
          onHandelChange={({target}) => setCurPeople(target.value)}
          value={curPeople}
        />
        <Display>
          <Ans titel={'Tip amount'} show={tip} />
          <Ans titel={'Total amount'} show={total} />
          <Button content={'Reset'} onHandleClick={clear} />
        </Display>
      </Model>
    </Container>
  );
};

export default App;
