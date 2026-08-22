import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSwapiData,
  clearSwapiData,
  updateSearchUrl,
} from '../store/swapiReducer';

export default function useSwapi() {
  const dispatch = useDispatch();

  const data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const searchUrl = useSelector(state => state.searchUrl);

  const handleGetInfo = () => {
    if (!searchUrl.trim()) return;
    dispatch(fetchSwapiData(searchUrl));
  };

  const handleClearData = () => {
    dispatch(clearSwapiData());
  };

  const handleUrlChange = value => {
    dispatch(updateSearchUrl(value));
  };

  return {
    data,
    loading,
    error,
    searchUrl,
    handleGetInfo,
    handleClearData,
    handleUrlChange,
  };
}
