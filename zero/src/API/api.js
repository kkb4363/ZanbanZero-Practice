const ServiceKey = `ziROfCzWMmrKIseBzkXs58HpS39GI%2FmxjSEmUeZbKwYuyxnSc2kILXCBXlRpPZ8iam5cqwZqtw6db7CnWG%2FQQQ%3D%3D`;
const 잔반량api주소 = `http://apis.data.go.kr/B552584/RfidFoodWasteServiceNew/getTotalDateList`

// test 키, 주소
const API_KEY = '505148347d18c10aeac2faa958dbbf5c';
const BASE_PATH = 'https://api.themoviedb.org/3';

export function get배출량(){
    return  fetch(`${잔반량api주소}?Servicekey=${ServiceKey}&type=json&disYear=2022&disMonth=12`)
            .then(res =>res.json())
}

export function getTest(){
    return fetch(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&page=1`)
    .then((response) => response.json())
}