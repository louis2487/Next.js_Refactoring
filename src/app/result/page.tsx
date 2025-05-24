//결과확인 페이지 - update 0520
"use client";
import { useSelector } from 'react-redux'
import '../globals.css'
import { RootState } from '../store/store';
interface ChecklistType {
    name: string;
    signal: string|null;
    signaltext: string|null;
    foreseekm: string|null;
    foreseetime: string|null;
}
interface OutboxType{
    label: string; 
    value : string;
}
function Light_And_Item({ signal, name }:{signal:string|null, name:string}) {
    return (
        <div className="wrap">
            <div className={`light light-${signal}`} title={signal??'Unknown'} />
            <div className="font-size40">{name}</div></div>
    )
}
function Outbox({ label, value}:OutboxType) {
    return (
        <div className='wrap2'>
            <label htmlFor="mileage" className="black-label">{label}</label>
            <div className='black-label-size'> {value}</div></div>
    )
}
export default function R7() {
    const mainlist= useSelector((state: RootState) => state.mylist.list);
    const checklist = useSelector((state: RootState) => state.mylist.R7list);
    console.log("list: ", mainlist);
    console.log("R7list: ", checklist);
    return (
        <main className="Check-main">
        <div>
            <h1 className="text-position">결과를 확인하세요</h1>
            <div className='scroll'>{checklist.map((list:ChecklistType) => (
                <div className={"wrap2"} key={list.name}>
                    <div className="unit2">
                        <Light_And_Item signal={list.signal} name ={list.name}/>
                        <div className="input-pair">
                            <Outbox label="점검 여부" value={list.signaltext??''}/>
                            <Outbox label="예상 교체거리" value={list.foreseekm??''} />
                            <Outbox label="예상 교체시점" value={list.foreseetime??''} />
                        </div>
                    </div>
                    <div className='line'></div>
                </div>
            ))}</div>
        </div>
        </main>
    );
}