import { IContador } from "../state/contador.state";
import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const selectContador = (state: IAppState) => state.contador;

export const total = createSelector(
    selectContador,
    (state: IContador) => state.total
);