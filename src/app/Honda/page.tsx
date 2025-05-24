//혼다 차종 선택 페이지 - Update 0520
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
export default function R2Hon() {
    const [Hondacars, SetHondacars] = useState<Car[]>([
        { model_name: '어코드', img: '/Honda/어코드.PNG', select: false },
        { model_name: '시빅', img: '/Honda/시빅.PNG', select: false },
        { model_name: 'cr-v', img: '/Honda/cr-v.PNG', select: false },
        { model_name: '파일럿', img: '/Honda/파일럿.PNG', select: false },
    ]);
    const dispatch = useDispatch<AppDispatch>();
    const ImgClick = (clicked_model_name : string) => {
        const newHondacars = Hondacars.map((car) =>
            car.model_name === clicked_model_name ? { ...car, select: !car.select } : { ...car, select: false }
        )
        SetHondacars(newHondacars);
        dispatch(setModel(clicked_model_name));
    }
    return (
        <main className="Check-main">
        <div>
            <h1 className="text-position">차종을 선택해주세요</h1>
            <div className="car-list2">
            {Hondacars.map((car) => (
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