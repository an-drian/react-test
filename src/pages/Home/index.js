import Select from 'react-select';
import { makeAsOptions } from 'base/utils';
import { useState } from 'react';
import { Main } from 'base/styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllLeads } from 'store/slices/leads';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function Home() {
  const { t } = useTranslation('home');
  const { page } = useSelector(state => state.leadsReducer);
  const gaViewId = useSelector(state => state.gaViewIdReducer.selectedId?.value);

  const dispatch = useDispatch();
  const { queues } = useSelector(state => state.dashboardQueuesReducer);
  const options = makeAsOptions(queues, 'id', 'name');

  useEffect (() => {
    if (gaViewId) {
      dispatch(fetchAllLeads({
        page,
        gaViewId
      }));
    }
  },[dispatch, gaViewId, page]);

  const [ queue, setQueue ] = useState(null);

  async function handleSelectChange(payload) {
    await setQueue(payload);
  }

  return (
    <Main>
      <h2>Home</h2>
      <Select
        options={options}
        placeholder={t('selectQueuePlaceholder')}
        onChange={handleSelectChange}
        value={queue}
      />
    </Main>
  );
}
