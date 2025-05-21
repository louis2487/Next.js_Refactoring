import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FuelType = 'gasoline' | 'diesel' | 'hybrid' | 'electric' | 'LPG' | 'hydrogen';

interface CarState {
  step: number;
  fuellist: FuelType[];
  brend: string | null;
  model: string | null;
  fuel: string | null;
  year: number;
  mileage: number;
}

const FuelMap: Record<string, FuelType[]> = {
  /*기아*/
  '모닝': ['gasoline'],
  '레이': ['gasoline', 'LPG'],
  'K3': ['gasoline', 'diesel'],
  'K5': ['gasoline', 'hybrid'],
  'K8': ['gasoline', 'hybrid'],
  'K9': ['gasoline'],
  'EV3': ['electric'],
  'EV6': ['electric'],
  'EV9': ['electric'],
  '니로': ['hybrid', 'electric'],
  '셀토스': ['gasoline'],
  '스포티지': ['gasoline', 'diesel', 'hybrid'],
  '타스만': ['gasoline'],
  '쏘렌토': ['gasoline', 'diesel', 'hybrid'],
  '카니발': ['gasoline', 'diesel'],
  '봉고3': ['diesel'],

  /*현대*/
  '캐스퍼': ['gasoline'],
  '아반떼': ['gasoline', 'hybrid'],
  '소나타': ['gasoline', 'hybrid'],
  '그랜저': ['gasoline', 'hybrid'],
  '아이오닉5': ['electric'],
  '아이오닉6': ['electric'],
  '아이오닉9': ['electric'],
  '베뉴': ['gasoline'],
  '코나': ['gasoline', 'electric', 'hybrid'],
  '투싼': ['gasoline', 'gasoline', 'hybrid'],
  '넥소': ['hydrogen'],
  '펠리세이드': ['gasoline', 'diesel'],
  '스타리아': ['diesel'],
  '포터': ['diesel', 'electric'],

  /*제네시스*/
  'G70': ['gasoline'],
  'G80': ['gasoline', 'diesel', 'electric'],
  'G90': ['gasoline'],
  'GV60': ['electric'],
  'GV70': ['gasoline', 'diesel', 'electric'],
  'GV80': ['gasoline', 'diesel'],

  /* 르노코리아 */
  'sm3': ['gasoline', 'electric'],
  'sm5': ['gasoline', 'LPG'],
  'sm6': ['gasoline', 'LPG'],
  'sm7': ['gasoline'],
  'qm3': ['diesel', 'gasoline'],
  'qm5': ['gasoline', 'diesel'],
  'qm7': ['gasoline', 'LPG'],
  'xm3': ['gasoline', 'hybrid'],

  /* 도요타 */
  '캠리': ['gasoline', 'hybrid'],
  '코롤라': ['gasoline', 'hybrid'],
  '프리우스': ['hybrid'],
  'RAV4': ['gasoline', 'hybrid'],
  '하이랜더': ['gasoline', 'hybrid'],

  /* 혼다 */
  '어코드': ['gasoline', 'hybrid'],
  '시빅': ['gasoline'],
  'cr-v': ['gasoline', 'hybrid'],
  '파일럿': ['gasoline'],

  /* 닛산 */
  '알티마': ['gasoline'],
  '리프': ['electric'],
  '로그': ['gasoline'],

  /* 렉서스 */
  'es': ['gasoline', 'hybrid'],
  'is': ['gasoline'],
  'rx': ['gasoline', 'hybrid'],
  'nx': ['gasoline', 'hybrid'],

  /* BMW */
  '3시리즈': ['gasoline', 'diesel', 'hybrid'],
  '5시리즈': ['gasoline', 'diesel', 'hybrid'],
  '7시리즈': ['gasoline', 'hybrid'],
  'X3': ['gasoline', 'diesel', 'hybrid'],
  'X5': ['gasoline', 'diesel', 'hybrid'],
  'i4': ['electric'],
  'iX': ['electric'],

  /* 벤츠 */
  'Aclass': ['gasoline', 'diesel'],
  'Bclass': ['gasoline', 'diesel'],
  'Cclass': ['gasoline', 'diesel', 'hybrid'],
  'Eclass': ['gasoline', 'diesel', 'hybrid'],
  'Sclass': ['gasoline', 'hybrid'],
  'GLA': ['gasoline', 'diesel'],
  'GLC': ['gasoline', 'diesel', 'hybrid'],
  'GLE': ['gasoline', 'diesel', 'hybrid'],
  'EQA': ['electric'],
  'EQB': ['electric'],

  /* 아우디 */
  'a3': ['gasoline'],
  'a4': ['gasoline', 'diesel'],
  'a6': ['gasoline', 'diesel', 'hybrid'],
  'q5': ['gasoline', 'diesel', 'hybrid'],
  'q7': ['gasoline'],
  'e-tron': ['electric'],

  /* 폭스바겐 */
  '골프': ['gasoline', 'diesel'],
  '티구안': ['gasoline', 'diesel'],
  '아테온': ['gasoline', 'diesel'],
  '파사트': ['gasoline', 'diesel'],
  'ID.4': ['electric'],

  /* 쉐보레 */
  '스파크': ['gasoline'],
  '말리부': ['gasoline'],
  '트랙스': ['gasoline'],
  '볼트': ['electric'],

  /* 포드 */
  '몬데오': ['gasoline', 'diesel'],
  '퓨전': ['gasoline', 'hybrid'],
  '익스플로러': ['gasoline', 'hybrid'],
  '브롱코': ['gasoline'],
  '머스탱': ['gasoline', 'electric'],
  '머스탱 마하-E': ['electric'],
};

const carSlice = createSlice({
  name: 'car',
  initialState: <CarState>{
    step: 0,
    fuellist: [],
    brend: null,
    model: null,
    fuel: null,
    year: 2025,
    mileage: 0,
  },
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setBrend: (state, action: PayloadAction<string | null>) => {
      state.brend = action.payload;
    },
    setModel: (state, action: PayloadAction<string | null>) => {
      state.model = action.payload;
      state.fuellist = FuelMap[action.payload || ''] || [];
      state.fuel = null;
    },
    setFuel: (state, action: PayloadAction<string | null>) => {
      state.fuel = action.payload;
    },
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
    setMileage: (state, action: PayloadAction<number>) => {
      state.mileage = action.payload;
    },
  },
});

export const { setStep, setBrend, setModel, setFuel, setYear, setMileage } = carSlice.actions;
export default carSlice.reducer;
