import network from './index';

export const geAllLeads = ({ page = 1, gaViewId = null, ...rest }) => {
  console.log(gaViewId, 'test');
  return network.get('/leads', {
    params: {
      page,
      min_date: '2021-04-01',
      max_date: '2021-05-01',
      ga_view_id: gaViewId,
      per_page: 5,
      ...rest
    }
  });
};

export const getLeadById = (id) => {
  return network.get(`/leads/${id}`);
};
