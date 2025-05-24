// 유종 선택 페이지 - update 0520
"use client";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setFuel } from '../store/carSlice';
import { setList } from '../store/checklistSlice';
import { AppDispatch, RootState } from '../store/store';

interface fuelType{
    option_name: string;
    value: string;
    img: string;
    select: boolean;
    isuse: boolean;
}
export default function R3() {
    const dispatch = useDispatch<AppDispatch>();
    const fuellist = useSelector((state : RootState) => state.mycar.fuellist as string[]);
    const [fuels, setFuels] = useState<fuelType[]>([
        { option_name: '가솔린', value: 'gasoline', img: '/fuels/gasoline.PNG', select: false, isuse: false },
        { option_name: '디젤', value: 'diesel', img: '/fuels/diesel.PNG', select: false, isuse: false },
        { option_name: 'LPG', value: 'lpg', img: '/fuels/lpg.PNG', select: false, isuse: false },
        { option_name: '하이브리드', value: 'hybrid', img: '/fuels/hybrid.PNG', select: false, isuse: false },
        { option_name: '전기', value: 'electric', img: '/fuels/electric.PNG', select: false, isuse: false },
    ]);
    const IsuseUpdate = () => {
        const updated = fuels.map(item => ({
            ...item, isuse: fuellist.includes(item.value)
        }));
        setFuels(updated);
    };
    useEffect(() => {
        IsuseUpdate();
    }, [fuellist]);
    const imgClick = (clicked_fuel : fuelType) => {
        const newFuels = fuels.map((fuel) =>
            fuel.option_name === clicked_fuel.option_name ? { ...fuel, select: !fuel.select } : { ...fuel, select: false })
        setFuels(newFuels);
        dispatch(setFuel(clicked_fuel.value));
        dispatch(setList(clicked_fuel.value));
    }
    return (
        <main className="Check-main">
        <div>
            <h1 className="text-position">유종을 선택해주세요</h1>
            <div className="fuel-list">
                {fuels.map((fuel) => (
                    <div key={fuel.option_name} className={fuel.select ? 'car-container-select' : fuel.isuse ? 'car-container-default' : 'fuel-noselect'}>
                        <img key={fuel.option_name} src={fuel.img} alt={fuel.option_name} onClick={() => imgClick(fuel)}/>
                        <p className="car-name">{fuel.option_name}</p>
                    </div>
                ))}
            </div>
        </div>
        </main>
    );
}