import { Action } from '@ngrx/store';
import { IContador } from '../state/contador.state';

export enum EContadorActions {
    Plus = '[Contador] Plus',
    Substract = '[Contador] Substract'
}

export class Plus implements Action {
    public readonly type = EContadorActions.Plus;
    constructor(public payload: IContador) {}
}

export class Substract implements Action {
    public readonly type = EContadorActions.Substract;
    constructor(public payload: IContador) {}
}

export type ContadorActions = Plus | Substract;