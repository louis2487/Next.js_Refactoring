//포드 차종 선택 페이지 - Update 0520
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
export default function R2F() {
    const [Fordcars, SetFordcars] = useState<Car[]>([
        { model_name: '몬데오', img: '/Ford/몬데오.PNG', select: false },
        { model_name: '브롱코', img: '/Ford/브롱코.PNG', select: false },
        { model_name: '익스플로러', img: '/Ford/익스플로러.PNG', select: false },
        { model_name: '퓨전', img: '/Ford/퓨전.PNG', select: false },
        { model_name: '머스탱', img: '/Ford/머스탱.PNG', select: false },
    ]);
    const dispatch = useDispatch<AppDispatch>();
    const ImgClick = (clicked_model_name : string) => {
        const newFordcars = Fordcars.map((car) =>
            car.model_name === clicked_model_name ? { ...car, select: !car.select } : { ...car, select: false }
        )
        SetFordcars(newFordcars);
        dispatch(setModel(clicked_model_name));
    }
    return (
        <main className="Check-main">
        <div>
            <h1 className="text-position">차종을 선택해주세요</h1>
            <div className="car-list2">
            {Fordcars.map((car) => (
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