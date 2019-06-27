import React from 'react';

export interface IHomePageState {
  count
}

interface IHomePageProps {

}

class HomeComponent extends React.Component<IHomePageProps, IHomePageState> {
  constructor(props: IHomePageProps) {
    super(props);
  }
  public readonly state: Readonly<IHomePageState> = {
    count: 0
  }

  public handleIncrement = () => {
    this.setState(incrementClickCount);
  }

  public render() {
    return (
      <div>
        <button onClick={ this.handleIncrement }>Increment</button>
      </div>
    )
  }
}


const incrementClickCount = (preState: IHomePageState) => ({
  count: preState.count + 1
});
