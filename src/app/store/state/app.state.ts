import { Substract } from './../actions/contador.action';
import { IContador, initialContadorState } from './contador.state';

export interface IAppState {
    contador: IContador
}

export const initialAppState: IAppState = {
    contador: initialContadorState
}

export function getInitializeStete(): IAppState {
    return initialAppState
}
