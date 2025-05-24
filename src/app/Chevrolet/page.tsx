//Chevrolet 차종 선택 페이지 - Update 0520
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
export default function R2C() {
    const [Chevroletcars, SetChevroletcars] = useState<Car[]>([
        { model_name: '말리부', img: '/Chevrolet/말리부.PNG', select: false },
        { model_name: '볼트', img: '/Chevrolet/볼트.PNG', select: false },
        { model_name: '스파크', img: '/Chevrolet/스파크.PNG', select: false },
        { model_name: '트랙스', img: '/Chevrolet/트랙스.PNG', select: false },
       
    ]);
    const dispatch = useDispatch<AppDispatch>();
    const ImgClick = (clicked_model_name : string) => {
        const newChevroletcars = Chevroletcars.map((car) =>
            car.model_name === clicked_model_name ? { ...car, select: !car.select } : { ...car, select: false }
        )
        SetChevroletcars(newChevroletcars);
        dispatch(setModel(clicked_model_name));
    }
    return (
        <main className="Check-main">
        <div>
            <h1 className="text-position">차종을 선택해주세요</h1>
            <div className="car-list2">
            {Chevroletcars.map((car) => (
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