import { Plus, Substract } from './../store/actions/contador.action';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { IContador } from '../store/state/contador.state';
import { total } from '../store/selectors/contador.selectors';

@Component({
    selector: 'app-acao',
    templateUrl: './acao.component.html',
    styleUrls: ['./acao.component.scss']
})
export class AcaoComponent implements OnInit {

    total$;
    constructor(private _store: Store<IAppState>) { }

    ngOnInit() {
        this.total$ = this._store.pipe(select(total));
    }

    plus() {
        const contador: IContador = { total: 1 };
        this._store.dispatch(new Plus(contador));
    }

    substract() {
        const contador: IContador = { total: 1 };
        this._store.dispatch(new Substract(contador));
    }

}
