export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null
  // token:
  // "BQA85fRcdGiGyxB125dE8CNt2dFiB78kqKFFaGgeBkadj0bReO…WPpdG-KDoKUwq8TqcXbxc0-_le9ahFCOTu_1hHyOtChq4CXvH"
};

export const reducer = (state = initialState, action) => {
  console.log("The action is", action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.payload
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.payload
      };
    default:
      return state;
  }
};
