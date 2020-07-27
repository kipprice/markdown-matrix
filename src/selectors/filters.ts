import { State } from '../models';

export const selectDisplayMode = (state: State) => {
    const keys = Object.keys(state.competencies);
    if (keys.length === 0) { return 'none'; }
    return state.displayMode;
}

export const selectHiddenLevels = (state: State) => state.hiddenLevels;