//기아 차종 선택 페이지 - Update 0520
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
export default function R2K() {
    const [Kiacars, SetKiacars] = useState<Car[]>([
        { model_name: '모닝', img: '/Kia/moning.PNG', select: false },
        { model_name: '레이', img: '/Kia/ray.PNG', select: false },
        { model_name: 'K3', img: '/Kia/k3.PNG', select: false },
        { model_name: 'K5', img: '/Kia/K5.PNG', select: false },
        { model_name: 'K8', img: '/Kia/K8.PNG', select: false },
        { model_name: 'K9', img: '/Kia/K9.PNG', select: false },
        { model_name: 'EV3', img: '/Kia/ev3.PNG', select: false },
        { model_name: 'EV6', img: '/Kia/EV6.PNG', select: false },
        { model_name: 'EV9', img: '/Kia/ev9.PNG', select: false },
        { model_name: '니로', img: '/Kia/neero.PNG', select: false },
        { model_name: '셀토스', img: '/Kia/seltos.PNG', select: false },
        { model_name: '스포티지', img: '/Kia/spotegy.PNG', select: false },
        { model_name: '타스만', img: '/Kia/tasman.PNG', select: false },
        { model_name: '쏘렌토', img: '/Kia/ssorento.PNG', select: false },
        { model_name: '카니발', img: '/Kia/carnibal.PNG', select: false },
        { model_name: '봉고3', img: '/Kia/bonggo3.PNG', select: false },
    ]);
    const dispatch = useDispatch<AppDispatch>();
    const ImgClick = (clicked_model_name : string) => {
        const newKiacars = Kiacars.map((car) =>
            car.model_name === clicked_model_name ? { ...car, select: !car.select } : { ...car, select: false }
        )
        SetKiacars(newKiacars);
        dispatch(setModel(clicked_model_name));
    }
    return (
        <main className="Check-main">
        <div>
            <h1 className="text-position">차종을 선택해주세요</h1>
            <div className="car-list2">
            {Kiacars.map((car) => (
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