const initialState = {
  isOn: false,
  time: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "Start":
      return {
         ...state,
        isOn: true,
      };
    case "Tick":
      return {
         ...state,
        time: state.time + 1
      };
    case "Stop":
      return {
         ...state,
        isOn: false
      };
    case "Reset":
      return {
         ...state,
        isOn: false,
        time: 0
      };
    default:
      return state
  }
}

export default reducer;