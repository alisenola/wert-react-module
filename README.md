# Wert Module React component

This is wrapped [Wert initializer helper](https://www.npmjs.com/package/@wert-io/widget-initializer) for React projects.

## Installation

```
yarn add @wert-io/module-react-component
```

or

```
npm install @wert-io/module-react-component
```

## Usage example

```
import WertModule from '@wert-io/module-react-component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wertOptions: {
        partner_id: '{{YOUR_PARTNER_ID}}',
        listeners: {
          loaded: () => console.log('loaded'),
        },

        ...

      },
    };
  }

  render() {
    return (
      <div className="app">
        <WertModule
          options={this.state.wertOptions}
        />
      </div>
    );
  }
}
```

You can find the Whole list of options [here](https://www.npmjs.com/package/@wert-io/widget-initializer#documentation).

Component reacts to **options.theme** and **options.color_{name}** values change and ignores others.
