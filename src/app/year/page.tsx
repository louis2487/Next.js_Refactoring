//연식 입력 페이지 - update 0520
"use client";
import { useDispatch, useSelector } from 'react-redux';
import { setYear } from '../store/carSlice';
import { RootState, AppDispatch } from '../store/store'; 
const YearSelector = () => {
    const dispatch = useDispatch<AppDispatch>();
    const year = useSelector((state: RootState) => state.mycar.year);
    const increase = () => {
        if (year < 2025) {
            dispatch(setYear(year + 1));
        }
    };
    const decrease = () => {
        if (year > 2000) {
            dispatch(setYear(year - 1));
        }
    };
    return (
        <main className="Check-main">
        <div>
            <h1 className="text-position">연식을 선택해주세요</h1>
            <div className="year-input-container">
                <div className="year-box">{year}년식</div>
                <div className="year-buttons">
                    <button className="year-button" onClick={decrease}>⬇</button>
                    <button className="year-button" onClick={increase}>⬆</button>
                </div>
            </div>
        </div>
        </main>
    );
};

export default YearSelector;