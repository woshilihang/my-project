import React from 'react';
import ReactDom from 'react-dom';

export interface IHomePageState {
  count: number;
}

interface IHomePageProps {

}

class HomeComponent extends React.Component<IHomePageProps, IHomePageState> {
  public readonly state: Readonly<IHomePageState> = {
    count: 0,
  };
  constructor(props: IHomePageProps) {
    super(props);
  }

  public handleIncrement = () => {
    this.setState(incrementClickCount);
  }

  public render() {
    return (
      <div>
        <button onClick={ this.handleIncrement }>Incremenasdasdasdst</button>
      </div>
    );
  }
}

const incrementClickCount = (preState: IHomePageState) => ({
  count: preState.count + 1,
});

export default HomeComponent;
ReactDom.render(<HomeComponent />, document.getElementById('root'));
