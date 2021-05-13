import network from 'base/network/index';

export const getDashboardQueues = (id) => {
  return network.get('/dashboard_queues', {
    params: {
      ga_view_id: id
    }
  });
};
