import { useDispatch, useSelector } from 'react-redux';
import { fetchUserEdit } from 'store/slices/user';
import { useEffect } from 'react';
import { Loader } from 'base/styled';
import { isStatusSucceed } from 'base/utils';

export default function Home () {
  const dispatch = useDispatch();
  const { status, user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (user) return;
    dispatch(fetchUserEdit());
  }, [dispatch, user]);

  return !isStatusSucceed(status) ? <Loader /> : (
    <div>
      <h1>{`${user?.first_name} ${user?.last_name}`}</h1>
    </div>
  );
}
