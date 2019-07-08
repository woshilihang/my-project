import React from '@/Views/Home/node_modules/react';
import ReactDom from '@/Views/Home/node_modules/react-dom';

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
        <button onClick={ this.handleIncrement }>Increment</button>
      </div>
    );
  }
}

const incrementClickCount = (preState: IHomePageState) => ({
  count: preState.count + 1,
});

export default HomeComponent;
ReactDom.render(<HomeComponent />, document.getElementById('root'));
