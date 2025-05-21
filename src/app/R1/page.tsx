//제조사 선택 레이아웃 - update 0520
"use client";
import { useState } from 'react';
import '../globals.css'
import { useDispatch } from 'react-redux'
import { setBrend } from '../store/carSlice';
import { AppDispatch } from '../store/store';

interface Manufacturer {
  brend_name: string;
  img: string;
  select: boolean;
}

export default function R1() {
  const [manufacturers, setManufactures] = useState<Manufacturer[]>([
    { brend_name: 'Hyundai', img: '/brands/Hyundai.PNG', select: false },
    { brend_name: 'Kia', img: '/brands/Kia.PNG', select: false },
    { brend_name: 'Genesis', img: '/brands/Genesis.PNG', select: false },
    { brend_name: 'Re', img: '/brands/Re.PNG', select: false },
    { brend_name: 'Toyota', img: '/brands/Toyota.PNG', select: false },
    { brend_name: 'Honda', img: '/brands/Honda.PNG', select: false },
    { brend_name: 'Nissan', img: '/brands/Nissan.PNG', select: false },
    { brend_name: 'Lexus', img: '/brands/Lexus.PNG', select: false },
    { brend_name: 'BMW', img: '/brands/BMW.png', select: false },
    { brend_name: 'Benz', img: '/brands/Benz.png', select: false },
    { brend_name: 'Audi', img: '/brands/Audi.png', select: false },
    { brend_name: 'Volkswagen', img: '/brands/Volkswagen.png', select: false },
    { brend_name: 'Chevrolet', img: '/brands/Chevrolet.png', select: false },
    { brend_name: 'Ford', img: '/brands/Ford.png', select: false },
  ]);

  const dispatch = useDispatch<AppDispatch>();

  const imgClick = (clicked_brend_name: string) => {
    const newManufactures = manufacturers.map((manufacturer) =>
      manufacturer.brend_name === clicked_brend_name ? { ...manufacturer, select: !manufacturer.select } : { ...manufacturer, select: false }
    )
    setManufactures(newManufactures);
    dispatch(setBrend(clicked_brend_name));
  }

  return (
    <div>
      <h1 className="absolute text-[50px] top-[50px] left-[100px]">제조사를 선택해주세요</h1>
      <div className="grid grid-cols-7 gap-[20px] mt-[150px] ml-[50px]">
        {manufacturers.map((manufacturer) => (
          <img key={manufacturer.brend_name} src={manufacturer.img} alt={manufacturer.brend_name} className={manufacturer.select ? 'select-img' : 'default-img'}
            onClick={() => imgClick(manufacturer.brend_name)} />
        ))}
      </div>
    </div>
  );
}
