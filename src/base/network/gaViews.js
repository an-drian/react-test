import network from 'base/network/index';

export const getGAViewIds = () => {
  return network.get('/google_analytics_view_ids');
};
