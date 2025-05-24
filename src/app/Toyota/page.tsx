//도요타 선택 페이지 - Update 0520
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
export default function R2T() {
    const [Toyotacars, SetToyotacars] = useState<Car[]>([
        { model_name: '캠리', img: '/Toyota/캠리.PNG', select: false },
        { model_name: '코롤라', img: '/Toyota/코롤라.PNG', select: false },
        { model_name: '프리우스', img: '/Toyota/프리우스.PNG', select: false },
        { model_name: 'RAV4', img: '/Toyota/RAV4.PNG', select: false },
        { model_name: '하이랜더', img: '/Toyota/하이랜더.PNG', select: false },
    ]);
    const dispatch = useDispatch<AppDispatch>();
    const ImgClick = (clicked_model_name : string) => {
        const newToyotacars = Toyotacars.map((car) =>
            car.model_name === clicked_model_name ? { ...car, select: !car.select } : { ...car, select: false }
        )
        SetToyotacars(newToyotacars);
        dispatch(setModel(clicked_model_name));
    }
    return (
        <main className="Check-main">
        <div>
            <h1 className="text-position">차종을 선택해주세요</h1>
            <div className="car-list2">
            {Toyotacars.map((car) => (
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