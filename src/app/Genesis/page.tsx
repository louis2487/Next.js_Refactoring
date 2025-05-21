//제네시스 차종 선택 페이지 - Update 0520
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
export default function R2G() {
    const [Genesiscars, SetGenesiscars] = useState<Car[]>([
        { model_name: 'G70', img: '/Genesis/G70.PNG', select: false },
        { model_name: 'G80', img: '/Genesis/G80.PNG', select: false },
        { model_name: 'G90', img: '/Genesis/G90.PNG', select: false },
        { model_name: 'GV60', img: '/Genesis/GV60.PNG', select: false },
        { model_name: 'GV70', img: '/Genesis/GV70.PNG', select: false },
        { model_name: 'GV80', img: '/Genesis/GV80.PNG', select: false },
    ]);
    const dispatch = useDispatch<AppDispatch>();
    const ImgClick = (clicked_model_name : string) => {
        const newGenesiscars = Genesiscars.map((car) =>
            car.model_name === clicked_model_name ? { ...car, select: !car.select } : { ...car, select: false }
        )
        SetGenesiscars(newGenesiscars);
        dispatch(setModel(clicked_model_name));
    }
    return (
        <div>
            <h1 className="text-position">차종을 선택해주세요</h1>
            <div className="car-list2">
            {Genesiscars.map((car) => (
                <div key ={car.model_name} className={car.select ? 'car-container-select' : 'car-container-default'}>
                <img src={car.img} alt={car.model_name} onClick={() => ImgClick(car.model_name)}/>
                <p className="car-name">{car.model_name}</p>
                </div>
            ))}
         </div>
        </div>
    );
}