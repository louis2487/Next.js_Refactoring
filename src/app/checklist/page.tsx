//소모품 체크리스트 작성 페이지 - update 0520
"use client";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import '../globals.css';
import { setInput,setOperation,setOutput } from '../store/checklistSlice';
import { RootState, AppDispatch } from '../store/store';

interface CheckboxType{
  list : ListType;
  handler : (index: number)=>void;
  index : number;
}
interface ListType {
  name: string;
  in1: boolean;
  in2: boolean;
  input1: string | null;
  input2: string | null;
}
interface InboxType {
  label: string;
  placeholder: string;
  handler: (data: string, index: number) => void;
  index: number;
  type: string;
}
interface OutboxType {
  label: string;
  value: string;
}
function CheckboxItem({ list, handler, index } : CheckboxType) {
  return (
    <div className="wrap"><input type="checkbox"
      className="checkbox"
      onChange={() => handler(index)} />
      <div className="font-size40">{list.name}</div></div>
  )
}

function Inbox({ label, placeholder, handler, index, type }: InboxType) {
  return (
    <div className="mileage-input-container">
      <label htmlFor="mileage" className="gray-label">{label}</label>
      <input
        type={type}
        id="change-mileage"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handler((e.target as HTMLInputElement).value, index);
          }
        }}
        onBlur={(e) => {
          handler((e.target as HTMLInputElement).value, index);
        }}
        className="input-box"
        min="0"
        placeholder={placeholder}
      />
    </div>
  );
}
function Outbox({ label, value }:OutboxType) {
  return (
    <div className='wrap2'>
      <label htmlFor="mileage" className="black-label">{label}</label>
      <div className='black-label-size'> {value}</div></div>
  )
}

export default function R6() {
  const dispatch = useDispatch<AppDispatch>();
  const step = useSelector((state : RootState) => state.mycar.step);

  const carkm = useSelector((state: RootState) => state.mycar.mileage);
  const caryear = useSelector((state: RootState) => state.mycar.year);

  const inilist = useSelector((state: RootState) => state.mylist.R6list);
  const listcheck = useSelector((state: RootState) => state.mylist.list);
  const [lists, setLists] = useState<ListType[]>(inilist||[]);
  const CheckboxChange = (index : number) => {
    setLists(
      (old) => old.map(
        (list, i) => i === index ? { ...list, in1: !list.in1, in2: !list.in2 } : list)
    );
  };
  const enter1 = (data : string, index:number) => {
    setLists(
      (old) => old.map(
        (list, i) => i === index ? { ...list, input1: data, in1: false } : list)
    );
  }
  const enter2 = (data:string, index:number) => {
    setLists(
      (old) => old.map(
        (list, i) => i === index ? { ...list, input2: data, in2: false } : list)
    );
  };
  useEffect(() => {
    console.log("Updated list:", listcheck);
  }, [listcheck]);

  useEffect(() => {
    dispatch(setInput(lists));
    dispatch(setOperation({ currentkm: Number(carkm), caryear: String(caryear) }));
    dispatch(setOutput({ currentkm: carkm}));
  }, [step]);

  return (
    <main className="Check-main">
    <div>
      <h1 className="text-position">소모품 체크리스트를 작성해주세요</h1>
      <div className='scroll'>{lists.map((list, index) => (

        <div key={list.name}>
          <div className="unit">
            <CheckboxItem list={list} handler={CheckboxChange} index={index} />

            <div className="input-pair">
              {list.in1 ? <Inbox label="교체거리(km):" placeholder="예) 45000" handler={enter1} index={index} type="number" /> : <Outbox label="교체거리" value={list.input1||""} />}
              {list.in2 ? <Inbox label="교체시점(YY-MM):" placeholder="예) 25-04" handler={enter2} index={index} type="text" /> : <Outbox label="교체시점" value={list.input2||""} />}
            </div>

          </div>
          
          <div className='line'></div>
        </div>
      ))}</div>
    </div>
    </main>
  );
}