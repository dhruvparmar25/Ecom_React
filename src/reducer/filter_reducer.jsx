const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };
case "SORTING_PRODUCTS":
  // eslint-disable-next-line no-case-declarations
  let newSortData = [...action.payload]; // clone to avoid mutation

  if (state.sorting_value === "a-z") {
    newSortData = newSortData.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (state.sorting_value === "z-a") {
    newSortData = newSortData.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (state.sorting_value === "lowest") {
    newSortData = newSortData.sort((a, b) => a.price - b.price);
  }

  if (state.sorting_value === "highest") {
    newSortData = newSortData.sort((a, b) => b.price - a.price);
  }

  return {
    ...state,
    filter_products: newSortData,
  };


    default:
      return state;
  }
};

export default filterReducer;
