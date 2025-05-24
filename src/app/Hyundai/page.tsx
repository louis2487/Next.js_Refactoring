//현대 차종 선택 페이지 - Update 0508
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
export default function R2H() {
    const [Hyundaicars, SetHyundaicars] = useState<Car[]>([
        { model_name: '캐스퍼', img: '/Hyundai/casper.PNG', select: false },
        { model_name: '아반떼', img: '/Hyundai/avandde.PNG', select: false },
        { model_name: '소나타', img: '/Hyundai/sonata.PNG', select: false },
        { model_name: '그랜저', img: '/Hyundai/grenser.PNG', select: false },
        { model_name: '아이오닉5', img: '/Hyundai/ionic5.PNG', select: false },
        { model_name: '아이오닉6', img: '/Hyundai/ionic6.PNG', select: false },
        { model_name: '아이오닉9', img: '/Hyundai/ionic9.PNG', select: false },
        { model_name: '베뉴', img: '/Hyundai/benew.PNG', select: false },
        { model_name: '코나', img: '/Hyundai/cona.PNG', select: false },
        { model_name: '투싼', img: '/Hyundai/toossan.PNG', select: false },
        { model_name: '넥소', img: '/Hyundai/nexso.PNG', select: false },
        { model_name: '펠리세이드', img: '/Hyundai/peliseid.PNG', select: false },
        { model_name: '스타리아', img: '/Hyundai/staria.PNG', select: false },
        { model_name: '포터', img: '/Hyundai/poter.PNG', select: false },
    ]);
    const dispatch = useDispatch<AppDispatch>();
    const ImgClick = (clicked_model_name : string) => {
        const newHyundaicars = Hyundaicars.map((car) =>
            car.model_name === clicked_model_name ? { ...car, select: !car.select } : { ...car, select: false }
        )
        SetHyundaicars(newHyundaicars);
        dispatch(setModel(clicked_model_name));
    }
    return (
        <main className="Check-main">
        <div>
            <h1 className="text-position">차종을 선택해주세요</h1>
            <div className="car-list2">
            {Hyundaicars.map((car) => (
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