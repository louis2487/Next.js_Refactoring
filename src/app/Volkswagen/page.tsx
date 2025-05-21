//폭스바겐 선택 페이지 - Update 0520
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
export default function R2V() {
    const [Volkswagencars, SetVolkswagencars] = useState<Car[]>([
        { model_name: '골프', img: '/Volkswagen/골프.PNG', select: false },
        { model_name: '티구안', img: '/Volkswagen/티구안.PNG', select: false },
        { model_name: '아테온', img: '/Volkswagen/아테온.PNG', select: false },
        { model_name: '파사트', img: '/Volkswagen/파사트.PNG', select: false },
        { model_name: 'id.4', img: '/Volkswagen/id.4.PNG', select: false },
    ]);
    const dispatch = useDispatch<AppDispatch>();
    const ImgClick = (clicked_model_name : string) => {
        const newVolkswagencars = Volkswagencars.map((car) =>
            car.model_name === clicked_model_name ? { ...car, select: !car.select } : { ...car, select: false }
        )
        SetVolkswagencars(newVolkswagencars);
        dispatch(setModel(clicked_model_name));
    }
    return (
        <div>
            <h1 className="text-position">차종을 선택해주세요</h1>
            <div className="car-list2">
            {Volkswagencars.map((car) => (
                <div key ={car.model_name} className={car.select ? 'car-container-select' : 'car-container-default'}>
                <img src={car.img} alt={car.model_name} onClick={() => ImgClick(car.model_name)}/>
                <p className="car-name">{car.model_name}</p>
                </div>
            ))}
         </div>
        </div>
    );
}