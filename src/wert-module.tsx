import * as React from 'react';
import WertWidget from '@wert-io/widget-initializer';

declare type WertPassThroughProps = React.ComponentProps<'div'>;
declare type WertModuleProps = WertPassThroughProps & {
  options: WertWidget["options"]
};
declare type WertModuleState = {
  passThroughProps: WertPassThroughProps
};

class WertModule extends React.Component<WertModuleProps, WertModuleState> {
  wertWidget: WertWidget;

  constructor(props: WertModuleProps) {
    super(props);

    const defaultContainerId = 'wert-module';
    const wertWidget = new WertWidget({
      container_id: defaultContainerId,
      ...props.options,
    });
    const passThroughProps = {
      id: props.options.container_id || defaultContainerId,
      ...props,
      options: undefined,
    } as WertPassThroughProps;

    this.wertWidget = wertWidget;
    this.state = {
      passThroughProps,
    };
  }

  componentDidMount() {
    this.wertWidget.mount();
  }

  componentDidUpdate(prevProps: WertModuleProps) {
    const themeChanged = this.props.options.theme !== prevProps.options.theme;
    const newColors = Object.keys(this.props.options)
      .filter(key => key.startsWith('color'))
      .reduce((accum, key) => {
        const newColor = this.props.options[key];
        const oldColor = prevProps.options[key];

        if (newColor !== oldColor) {
          accum[key] = newColor;
        }

        return accum;
      }, {});
    const colorsChanged = !!Object.keys(newColors).length;

    if (themeChanged || colorsChanged) this.wertWidget.setTheme({
      theme: this.props.options.theme,
      colors: newColors,
    });
  }

  componentWillUnmount() {
    console.log('unmount');
    this.wertWidget.destroy();
  }

  render() {
    return (
      <div {...this.state.passThroughProps} />
    );
  }
}

export default WertModule;
