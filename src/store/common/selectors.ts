
const everything = (state: any) => state.commonReducer;

export const data = (state: any) => everything(state).data

export const listData = (state: any) => everything(state).listData

export const loading = (state: any) => everything(state).loading