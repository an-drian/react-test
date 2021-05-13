import Select from 'react-select';
import { Header } from 'base/styled';
import { makeAsOptions, isStatusSucceed } from 'base/utils';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDashboardQueues } from 'store/slices/dashboardQueues';
import { useEffect } from 'react';
import { fetchGAViewIds, setSelectedId } from 'store/slices/gaViewId';
import styled from 'styled-components';

const StyledSelect = styled(Select)`
  min-width: 295px;
`;


export default function HeadContent() {
  const dispatch = useDispatch();
  function handleSelectChange (payload) {
    dispatch(setSelectedId(payload));
    dispatch(fetchDashboardQueues(payload.value));
  }

  const { selectedId, ids, status } = useSelector((state) => state.gaViewIdReducer);

  useEffect(() => {
    dispatch(fetchGAViewIds());
  }, [dispatch]);

  const options = makeAsOptions(ids, 'id', 'pretty_name');

  return (
    <Header>
      <div>LOGO</div>
      <div>
        {isStatusSucceed(status) && <StyledSelect
          value={selectedId}
          options={options}
          onChange={handleSelectChange}
        />}
      </div>
    </Header>
  );
}
