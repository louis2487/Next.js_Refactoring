import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChecklistState {
  list: Item[];
  R6list: R6Item[];
  R7list: R7Item[];
  nowtime: string;
}

interface Item {
  name: string;
  lastkm: number | null;
  lasttime: number | null;
  replacekm: string[];
  replacetime: string[];
  remainkm: number | null;
  remaintime: number | null;
  signal: 'unknown' | 'red' | 'yellow' | 'green';
}

interface R6Item {
  name: string;
  input1: string | null;
  input2: string | null;
  in1: boolean;
  in2: boolean;
  checked: boolean;
}

export interface R7Item {
  name: string;
  signal: string | null;
  signaltext: string | null;
  foreseekm: string | null;
  foreseetime: string | null;
}

const AllItem: string[] = ["브레이크 패드", "브레이크 오일", "파워스티어링 오일", "에어컨 필터", "에어컨 가스", "냉각수", "타이어", "배터리"];
const NonEVItem: string[] = ["엔진오일", "미션오일"];

const listMap: Record<string, string[]> = {
  'gasoline': ["점화 플러그", ...NonEVItem, ...AllItem],
  'diesel': ["디젤 연료필터", "DPF 필터", "예열 플러그", ...NonEVItem, ...AllItem],
  'lpg': ["하이브리드 배터리 점검", ...NonEVItem, ...AllItem],
  'hybrid': ["하이브리드 배터리 점검", ...NonEVItem, ...AllItem],
  'electric': ["감속기 오일", ...AllItem],
};

const replacekmMap: Record<string, string[]> = {
  '엔진오일': ["10000"],
  '미션오일': ["100000"],
  '브레이크 패드': ["40000"],
  '브레이크 오일': ["40000"],
  '파워스티어링 오일': ["60000"],
  '에어컨 필터': ["15000"],
  '에어컨 가스': ["40000"],
  '냉각수': ["80000"],
  '타이어': ["60000"],
  '배터리': ["50000"],
  '점화 플러그': ["40000"],
  '디젤 연료필터': ["40000"],
  'DPF 필터': ["150000"],
  '예열 플러그': ["50000"],
  '하이브리드 배터리 점검': ["160000"],
  '감속기 오일': ["60000"]
};

const replacetimeMap: Record<string, string[]> = {
  '엔진오일': ["6"],
  '미션오일': ["120"],
  '브레이크 패드': ["24"],
  '브레이크 오일': ["24"],
  '파워스티어링 오일': ["36"],
  '에어컨 필터': ["12"],
  '에어컨 가스': ["24"],
  '냉각수': ["120"],
  '타이어': ["48"],
  '배터리': ["36"],
  '점화 플러그': ["48"],
  '디젤 연료필터': ["24"],
  'DPF 필터': ["96"],
  '예열 플러그': ["24"],
  '하이브리드 배터리 점검': ["96"],
  '감속기 오일': ["24"]
};

function Signaltext(signal: 'red' | 'yellow' | 'green'): string {
  if (signal === "red") return "필요";
  if (signal === "yellow") return "임박";
  if (signal === "green") return "안정";
  return '';
}

const checklistSlice = createSlice({
  name: "checklist",
  initialState: {
    list: [],
    R6list: [],
    R7list: [],
    nowtime: "25-05",
  } as ChecklistState,
  reducers: {
    setList: (state, action: PayloadAction<string>) => {
      const items = listMap[action.payload] || [];
      state.list = items.map(name => (
        { 
          name, 
          lastkm: null, 
          lasttime: null, 
          replacekm: replacekmMap[name], 
          replacetime: replacetimeMap[name], 
          remainkm: null, 
          remaintime: null, 
          signal: 'unknown' 
        }
      ));
      state.R6list = items.map(name => (
        { 
          name, 
          input1: 'null', 
          input2: 'null', 
          in1: false, 
          in2: false, 
          checked: false 
        }
      ));
      state.R7list = items.map(name => (
        { 
          name, 
          signal: null, 
          signaltext: null, 
          foreseekm: null, 
          foreseetime: null 
        }
      ));
    },
    setInput: (state, action: PayloadAction<{ input1: string | null, input2: string | null }[]>) => {
         action.payload.forEach((data, index) => {
           if (!state.list[index]) return;
           const km   = data.input1 && !isNaN(Number(data.input1))
                        ? Number(data.input1)
                       : null;
            const time = data.input2 && !isNaN(Number(data.input2))
                        ? Number(data.input2)
                         : null;
      
           state.list[index].lastkm   = km;
            state.list[index].lasttime = time;
          });
        },
        setOperation: (state, action: PayloadAction<{ currentkm: number; caryear: string }>) => {
          const { currentkm, caryear } = action.payload;
          state.list.forEach((item, index) => {
            if (!state.list[index]) return;
        
            const lastkm   = Number.isFinite(item.lastkm as number)   ? item.lastkm!   : 0;
            const lasttime = Number.isFinite(item.lasttime as number) ? item.lasttime! : 0;

            const replacekm   = parseInt(item.replacekm[0], 10);
            const replacetime = parseInt(item.replacetime[0], 10);

            const remainkm   = replacekm   - currentkm + lastkm;
            const remaintime = replacetime - howlife(caryear, state.nowtime) + lasttime;
            state.list[index].remainkm   = remainkm;
            state.list[index].remaintime = remaintime;
 
            if (remainkm <= 0 || remaintime <= 0) {
              state.list[index].signal = 'red';
            } else if (
              remainkm <= replacekm * 0.33 ||
              remaintime <= replacetime * 0.33
            ) {
              state.list[index].signal = 'yellow';
            } else {
              state.list[index].signal = 'green';
            }
          });
        },
        
    setOutput: (state, action: PayloadAction<{ currentkm: number }>) => {
      const { currentkm } = action.payload;
      state.list.forEach((data, index) => {
        if (!state.R7list[index]) return;
    
        const remainkm = typeof data.remainkm === 'number' ? data.remainkm : 0;
        const expectedKm = remainkm + currentkm;
        state.R7list[index].foreseekm =
          isNaN(expectedKm) || expectedKm < currentkm
            ? "초과"
            : expectedKm.toString();
    
        const tmptime = typeof data.remaintime === 'number'
          ? plusmonth(data.remaintime, state.nowtime)
          : state.nowtime;
    
        const targetMonth = parseMonth(tmptime);
        const nowMonth    = parseMonth(state.nowtime);
    
        state.R7list[index].foreseetime =
          isNaN(targetMonth) || targetMonth < nowMonth
            ? "초과"
            : tmptime;
    
        const sig = data.signal === 'red' || data.signal === 'yellow' || data.signal === 'green'
          ? data.signal
          : 'red';
        state.R7list[index].signal     = sig;
        state.R7list[index].signaltext = Signaltext(sig);
      });
    },
    
    
  },
});

function parseMonth(str: string): number {
  const [yearstr, monthstr] = str.split("-");
  return parseInt(yearstr, 10) * 12 + parseInt(monthstr, 10);
}

function howlife(year: string, now: string): number {
  return parseMonth(now) - (parseInt(year, 10) - 2000) * 12;
}

function toYear(totalMonths: number): string {
  let year = Math.floor((totalMonths - 1) / 12);
  let month = (totalMonths - 1) % 12 + 1;

  const paddedMonth = String(month).padStart(2, "0");
  const paddedYear = String(year).padStart(2, "0");

  return `${paddedYear}-${paddedMonth}`;
}

function plusmonth(remain: number, now: string): string {
  return toYear(parseMonth(now) + remain);
}

export const { setList, setInput, setOperation, setOutput } = checklistSlice.actions;
export default checklistSlice.reducer;
