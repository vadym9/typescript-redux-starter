import { ActionCreator } from 'redux';
import { GET_STARSHIPS, GET_STARSHIPS_SUCCESS, GET_STARSHIPS_FAIL } from '../constants';
import { GetStarships, GetStarshipsSuccess, GetStarshipsFail } from './models/sw-starships-types';
import { Starship } from '../../global-models';


export const getStarshipsA: ActionCreator<GetStarships> = () => ({
    type: GET_STARSHIPS
})

export const getStarshipsSuccess: ActionCreator<GetStarshipsSuccess> = (s: Starship[]) => ({
    type: GET_STARSHIPS_SUCCESS,
    starships: s
})

export const getStarshipsFail: ActionCreator<GetStarshipsFail> = () => ({
    type: GET_STARSHIPS_FAIL
})