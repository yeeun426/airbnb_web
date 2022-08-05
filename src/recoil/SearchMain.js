import {atom} from 'recoil';

export const countryState = atom({
    key : 'country',
    default : '여행지 검색',
})