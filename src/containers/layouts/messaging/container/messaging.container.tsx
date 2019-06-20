import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Messaging } from './messaging.component';
import { routes } from './routes';
import { navigateAction } from '@src/core/navigation';

interface State {
  selectedLayoutIndex: number;
}

export class MessagingContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    selectedLayoutIndex: 0,
  };

  private data = routes;

  private onCategorySelect = (selectedLayoutIndex: number) => {
    this.setState({ selectedLayoutIndex });
  };

  private onItemSelect = (index: number) => {
    const { [index]: selectedItem } = this.data;

    this.props.navigation.dispatch(navigateAction(selectedItem.route));
  };

  public render(): React.ReactNode {
    return (
      <Messaging
        data={this.data}
        selectedLayoutIndex={this.state.selectedLayoutIndex}
        onItemSelect={this.onItemSelect}
        onLayoutSelect={this.onCategorySelect}
      />
    );
  }
}
