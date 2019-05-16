import * as React from 'react';
import Counter from './counter';

const CounterPanel: React.SFC = () => {
  return (
    <div>
      <Counter />
      <Counter count={10} />
      <Counter count={20} />
    </div>
  )
}

export default CounterPanel;
