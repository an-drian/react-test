import network from './index';

export const getUsersEdit = () => {
  return network.get('/users/edit');
};

export const putUser = (params) => {
  return network.put('/users', {
    user: { ...params }
  });
};
