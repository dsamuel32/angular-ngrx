import { initialContadorState, IContador } from './../state/contador.state';
import { ContadorActions, EContadorActions } from '../actions/contador.action';
export const contadorReducers = (
    state = initialContadorState,
    action: ContadorActions
) : IContador => {
    switch(action.type) {        
        case EContadorActions.Plus: {
            const contador = { ...action.payload, total: action.payload.total + 1 };
            return { ...state, total: state.total + 1 };
        }
        case EContadorActions.Substract: {
            const contador = { ...action.payload, total: action.payload.total - 1 };
            return { ...state, total: state.total - 1 };
        }

        default: return state;
    }
}