//BMW 차종 선택 페이지 - Update 0520
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
export default function R2B() {
    const [BMWcars, SetBMWcars] = useState<Car[]>([
        { model_name: '3시리즈', img: '/BMW/3시리즈.PNG', select: false },
        { model_name: '5시리즈', img: '/BMW/5시리즈.PNG', select: false },
        { model_name: '7시리즈', img: '/BMW/7시리즈.PNG', select: false },
        { model_name: 'i4', img: '/BMW/i4.PNG', select: false },
        { model_name: 'ix', img: '/BMW/ix.PNG', select: false },
        { model_name: 'x3', img: '/BMW/x3.PNG', select: false },
        { model_name: 'x5', img: '/BMW/x5.PNG', select: false },
    ]);
    const dispatch = useDispatch<AppDispatch>();
    const ImgClick = (clicked_model_name : string) => {
        const newBMWcars = BMWcars.map((car) =>
            car.model_name === clicked_model_name ? { ...car, select: !car.select } : { ...car, select: false }
        )
        SetBMWcars(newBMWcars);
        dispatch(setModel(clicked_model_name));
    }
    return (
        <main className="Check-main">
        <div>
            <h1 className="text-position">차종을 선택해주세요</h1>
            <div className="car-list2">
            {BMWcars.map((car) => (
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