import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 4,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionsClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIdx) {
      optionsClasses.push('ColorPicker__option--active');
    }
    return optionsClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p> Вибраний колір: {label} </p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              style={{ backgroundColor: color }}
              className={this.makeOptionClassName(index)}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
