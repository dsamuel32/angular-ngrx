import { Component, OnInit } from '@angular/core';
import { IAppState } from '../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { total } from '../store/selectors/contador.selectors';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

    total$;
    constructor(private _store: Store<IAppState>) { }

    ngOnInit() {
        this.total$ = this._store.pipe(
            select(total));
    }

}
