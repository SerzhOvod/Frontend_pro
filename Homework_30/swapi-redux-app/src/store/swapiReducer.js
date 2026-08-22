const initialState = {
  data: null,
  loading: false,
  error: null,
  searchUrl: 'http://swapi.py4e.com/api/',
};

export const fetchSwapiData = url => {
  return async dispatch => {
    dispatch({ type: 'FETCH_SWAPI_PENDING' });
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Помилка при завантаженні даних');
      const data = await response.json();
      dispatch({ type: 'FETCH_SWAPI_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_SWAPI_ERROR', payload: error.message });
    }
  };
};

export const clearSwapiData = () => ({ type: 'CLEAR_SWAPI_DATA' });
export const updateSearchUrl = url => ({
  type: 'UPDATE_SEARCH_URL',
  payload: url,
});

export const swapiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SWAPI_PENDING':
      return { ...state, loading: true, error: null };
    case 'FETCH_SWAPI_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_SWAPI_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'CLEAR_SWAPI_DATA':
      return { ...state, data: null };
    case 'UPDATE_SEARCH_URL':
      return { ...state, searchUrl: action.payload };
    default:
      return state;
  }
};
