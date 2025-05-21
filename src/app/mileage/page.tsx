//누적 주행거리 입력 페이지 - update 0520
"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMileage } from '../store/carSlice';
import { RootState, AppDispatch } from '../store/store';

interface OutboxPropsType {
  value: string;
  handler: () => void;
}
interface InboxPropsType {
  value: string;
  handler1: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handler2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handler3: () => void;
}
function Outbox({ value, handler }: OutboxPropsType) {
  return (
    <div className='wrap5' onClick={handler}>
      <label htmlFor="mileage" className="black-label">주행거리(km)</label>
      <div className='black-label2'> {value}</div></div>
  )
}
function Inbox({ value, handler1, handler2, handler3 }: InboxPropsType) {
  return (
    <div className="container2">
      <label htmlFor="mileage" className="mileage-label">주행거리(km)</label>
      <input
        type="number"
        id="mileage"
        className="input5"
        value={value}
        onKeyDown={handler1}
        onChange={handler2}
        onBlur={handler3}
        min="0"
        placeholder="예:60000"
      />
    </div>
  )
}
export default function R5() {
  const [isdata, setIsdata] = useState(false);
  const dispatch = useDispatch();
  const carkm = useSelector((state: RootState) => state.mycar.mileage);
  const [inputValue, setInputValue] = useState<string>(carkm.toString());

  const Inputhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const Keyhandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      const data = parseInt(inputValue, 10);
      if (!isNaN(data)) dispatch(setMileage(data));
      setIsdata(true);
    }
  };
  const Blurhandler = () => {
    const data = parseInt(inputValue, 10);
    if (!isNaN(data)) dispatch(setMileage(data));
    setIsdata(true);
  }
  const Clickhandler = () => {
    setIsdata(false);
    setInputValue(carkm.toString());
  };
  return (
    <div>
      <h1 className="text-position">누적 주행거리를 입력해주세요</h1>
      {isdata ? <Outbox value={inputValue} handler={Clickhandler} /> :
        <Inbox value={inputValue} handler1={Keyhandler} handler2={Inputhandler} handler3={Blurhandler} />}
    </div>
  );
}
