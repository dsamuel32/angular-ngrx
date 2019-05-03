import { IAppState } from '../../state/app.state';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { IContador } from '../../state/contador.state';
import { Store } from '@ngrx/store';

@Injectable() 
export class ContadorEffects {

    //add service if exists
    constructor(
        private _actions$: Actions,
        private _store: Store<IAppState>) {}
}