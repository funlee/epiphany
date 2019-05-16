import * as React from 'react';

interface ICountState {
  count: number;
}

interface ICountProps {
  count: number;
}

class Counter extends React.Component<ICountProps, ICountState> {
  public static defaultProps: ICountProps = {
    count: 0
  };

  public state: ICountState = {
    count: this.props.count
  };

  public increment = (num: number) => {
    this.setState({
      count: (this.state.count + num)
    });
  };

  public decrement = (num: number) => {
    this.setState({
      count: (this.state.count - num)
    });
  };

  public render() {
    return (
      <div>
        <p>count: {this.state.count}</p>
        <p>
          <button onClick={this.increment.bind(this, 3)}>Increment</button>
          <button onClick={event => this.decrement(5)}>Decrement</button>
        </p>
      </div>
    )
  }
}

export default Counter;
