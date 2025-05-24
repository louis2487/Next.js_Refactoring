//Benz 차종 선택 페이지 - Update 0520
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
export default function R2Ben() {
    const [Benzcars, SetBenzcars] = useState<Car[]>([
        { model_name: 'Aclass', img: '/Benz/Aclass.PNG', select: false },
        { model_name: 'Bclass', img: '/Benz/Bclass.PNG', select: false },
        { model_name: 'Cclass', img: '/Benz/Cclass.PNG', select: false },
        { model_name: 'Eclass', img: '/Benz/Eclass.PNG', select: false },
        { model_name: 'Sclass', img: '/Benz/Sclass.PNG', select: false },
        { model_name: 'GLA', img: '/Benz/GLA.PNG', select: false },
        { model_name: 'GLC', img: '/Benz/GLC.PNG', select: false },
        { model_name: 'GLE', img: '/Benz/GLE.PNG', select: false },
        { model_name: 'EQA', img: '/Benz/EQA.PNG', select: false },
        { model_name: 'EQB', img: '/Benz/EQB.PNG', select: false },
    ]);
    const dispatch = useDispatch<AppDispatch>();
    const ImgClick = (clicked_model_name : string) => {
        const newBenzcars = Benzcars.map((car) =>
            car.model_name === clicked_model_name ? { ...car, select: !car.select } : { ...car, select: false }
        )
        SetBenzcars(newBenzcars);
        dispatch(setModel(clicked_model_name));
    }
    return (
        <main className="Check-main">
        <div>
            <h1 className="text-position">차종을 선택해주세요</h1>
            <div className="car-list2">
            {Benzcars.map((car) => (
                <div key ={car.model_name} className={car.select ? 'car-container-select' : 'car-container-default'}>
                <img src={car.img} alt={car.model_name} onClick={() => ImgClick(car.model_name)}/>
                <p className="car-model_name">{car.model_name}</p>
                </div>
            ))}
         </div>
        </div>
        </main>
    );
}