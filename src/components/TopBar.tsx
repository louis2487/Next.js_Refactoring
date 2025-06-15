//TopBar tyscript update 0520
"use client";
import '../../src/app/globals.css'
import { useSelector, useDispatch } from 'react-redux'
import { setStep } from '../app/store/carSlice';
import { AppDispatch, RootState } from '../app/store/store';
import { useRouter } from 'next/navigation';

function TopBar() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const test1 = useSelector((state: RootState) => state.mycar.step);
  const test2 = useSelector((state: RootState) => state.mycar.brend);
  const test3 = useSelector((state: RootState) => state.mycar.model);
  const test4 = useSelector((state: RootState) => state.mycar.fuel);
  const test5 = useSelector((state: RootState) => state.mycar.year);
  const test6 = useSelector((state: RootState) => state.mycar.mileage);

  console.log("step:", test1);
  console.log("brend:", test2);
  console.log("model:", test3);
  console.log("fuel:", test4);
  console.log("year:", test5);
  console.log("mileage:", test6);

  const bartext = ['제조사', '차종', '유종', '연식','주행거리','체크리스트','결과'];
  let bar = (
    <div className="top-bar">
      <div className={`circle-wrapper circle${test1}`}>
        <div className="circle"></div>
        <div className="circle-label">{bartext[test1]}</div>
      </div>
    </div>
  );
  let home = (
    <button className="home-button" onClick={() => {
      dispatch(setStep(-1));
      router.push('./');
    }
    }>Home</button>
  );
  const {useremail} = useSelector((state: RootState) => state.myuser); 
  const {brend, model, fuel, year, mileage} = useSelector((state: RootState) => state.mycar); 
  const {list} = useSelector((state: RootState) => state.mylist); 
  
  const carsavehandler = async () => {
      const response = await fetch('/api/carsave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({useremail, brend, model, fuel, year, mileage}),
      });
     
        if(response){
              alert("차량 등록 완료!");
        }
    } 
    const saveparthandler = async () => {
      const response = await fetch('/api/savepart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({partlist:list, useremail, model}),
      });
     
        if(response){
              alert("체크리스트 등록 완료!");
        }
    } 
   

  let next;
  switch (test1) {
    case -1:
      next = (<button className="next-button" onClick={() => {
        router.push(`./R1`);
        dispatch(setStep(0));
      }}>Next</button>);
      break;
    case 0:
      next = (<button className="next-button" onClick={() => {
        router.push(`./${test2}`);
        dispatch(setStep(1));
      }}>Next</button>);
      break;
    case 1:
      next = (<button className="next-button" onClick={() => {
        router.push(`./fuel`);
        dispatch(setStep(2));
      }}>Next</button>);
      break;
    case 2:
      next = (<button className="next-button" onClick={() => {
        router.push(`./year`);
        dispatch(setStep(3));
      }}>Next</button>);
      break;
    case 3:
      next = (<button className="next-button" onClick={() => {
        router.push(`./mileage`);
        dispatch(setStep(4));
      }}>Next</button>);
      break;
    case 4:
      next = (<button className="next-button" onClick={() => {
        dispatch(setStep(5));
        carsavehandler();
        router.push(`./checklist`);
      }}>Next</button>);
      break;
    case 5:
      next = (<button className="next-button" onClick={() => {
        router.push(`./result`);
        dispatch(setStep(6));
      }}>Next</button>);
      break;
      case 6:
        next = (<button className="next-button" onClick={() => {
          saveparthandler();
          dispatch(setStep(0));
          router.push(`./`);
        }}>등록</button>);
        break;
    default:
      next = (<h2>nonstep</h2>);
      break;
  }
  return (
    <div>
      {bar}
      {home}{next}
    </div>

  );
}

export default TopBar;