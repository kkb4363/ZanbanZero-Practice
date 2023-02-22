const ServiceKey = `ziROfCzWMmrKIseBzkXs58HpS39GI%2FmxjSEmUeZbKwYuyxnSc2kILXCBXlRpPZ8iam5cqwZqtw6db7CnWG%2FQQQ%3D%3D`;
const 잔반량api = `http://apis.data.go.kr/B552584/RfidFoodWasteServiceNew/getTotalDateList`
const 음식점api = `https://www.seogu.go.kr/seoguAPI/3660000/getGnrlRstrt`

// test 키, 주소
const API_KEY = '505148347d18c10aeac2faa958dbbf5c';
const BASE_PATH = 'https://api.themoviedb.org/3';

export function get배출량(){
    return fetch(`${잔반량api}?Servicekey=${ServiceKey}&type=json&disYear=2022&disMonth=12`)
    .then(res =>res.json())
}

export function getTest(){
    return fetch(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&page=1`)
    .then((res) => res.json())
}

export function get음식점(){
    return fetch(`https://www.seogu.go.kr/seoguAPI/3660000/getGnrlRstrt?pageNo=1&numOfRows=10&type=xml`)
    .then((res) => res.json())
}