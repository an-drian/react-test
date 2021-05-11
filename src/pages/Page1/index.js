import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ComponentRelatedToPage1Only from './components/ComponentRelatedToPage1Only';
import { fetchGAViewIds } from 'store/slices/gaViewId';

export default function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGAViewIds());
  }, [dispatch]);
  return (
    <div>
      <h2>Page 1</h2>
      <ComponentRelatedToPage1Only />
    </div>
  );
}
