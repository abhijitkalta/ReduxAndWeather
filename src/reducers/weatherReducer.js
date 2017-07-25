import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      console.log('Weather Fetched');
      // return state.concact([action.payload.data]);
      return [action.payload.data, ...state];
      break;
    }

  return state;
}
