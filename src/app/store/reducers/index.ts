import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { contadorReducers } from './contador.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    contador: contadorReducers
}