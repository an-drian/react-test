import ComponentRelatedToPage1Only from './components/ComponentRelatedToPage1Only';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { makeAsOptions } from 'base/utils';
import { useState } from 'react';

export default function Index() {
  const { queues } = useSelector(state => state.dashboardQueuesReducer);
  const options = makeAsOptions(queues, 'id', 'name');

  const [ queue, setQueue ] = useState(null);

  function handleSelectChange(payload) {
    setQueue(payload);
  }

  return (
    <div>
      <h2>Page 1</h2>
      <Select
        options={options}
        onChange={handleSelectChange}
        value={queue}
      />
      <ComponentRelatedToPage1Only />
    </div>
  );
}
