//아우디 차종 선택 페이지 - Update 0520
"use client";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from '../store/carSlice'; 
import { AppDispatch } from '../store/store';
interface Car{
  model_name: string;
  img : string;
  select: boolean;
}
export default function R2A() {
    const [Audicars, SetAudicars] = useState<Car[]>([
        { model_name: 'a3', img: '/Audi/a3.PNG', select: false },
        { model_name: 'a4', img: '/Audi/a4.PNG', select: false },
        { model_name: 'a6', img: '/Audi/a6.PNG', select: false },
        { model_name: 'q5', img: '/Audi/q5.PNG', select: false },
        { model_name: 'q7', img: '/Audi/q7.PNG', select: false },
        { model_name: 'e-tron', img: '/Audi/e-tron.PNG', select: false },
    ]);
    const dispatch = useDispatch<AppDispatch>();
    const ImgClick = (clicked_model_name : string) => {
        const newAudicars = Audicars.map((car) =>
            car.model_name === clicked_model_name ? { ...car, select: !car.select } : { ...car, select: false }
        )
        SetAudicars(newAudicars);
        dispatch(setModel(clicked_model_name));
    }
    return (
        <main className="Check-main">
        <div>
            <h1 className="text-position">차종을 선택해주세요</h1>
            <div className="car-list2">
            {Audicars.map((car) => (
                <div key ={car.model_name} className={car.select ? 'car-container-select' : 'car-container-default'}>
                <img src={car.img} alt={car.model_name} onClick={() => ImgClick(car.model_name)}/>
                <p className="car-name">{car.model_name}</p>
                </div>
            ))}
         </div>
        </div>
        </main>
    );
}