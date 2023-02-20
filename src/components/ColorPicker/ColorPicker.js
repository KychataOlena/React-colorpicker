import { useState } from 'react';
import './ColorPicker.css';

export function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptoinIdx] = useState(0);
  const { label } = options[activeOptionIdx];

  const makeOptionClassName = index => {
    const optionsClasses = ['ColorPicker__option'];

    if (index === activeOptionIdx) {
      optionsClasses.push('ColorPicker__option--active');
    }
    return optionsClasses.join(' ');
  };

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p> Вибраний колір: {label} </p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            style={{ backgroundColor: color }}
            className={makeOptionClassName(index)}
            onClick={() => setActiveOptoinIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

// class OldColorPicker extends Component {
//   state = {
//     activeOptionIdx: 4,
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   makeOptionClassName = index => {
//     const optionsClasses = ['ColorPicker__option'];

//     if (index === this.state.activeOptionIdx) {
//       optionsClasses.push('ColorPicker__option--active');
//     }
//     return optionsClasses.join(' ');
//   };

//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIdx];
//   }
// }

export default ColorPicker;
