import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

/**
 * CLASS TemperatureInput
 */
class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
    
    /**
     * Manejador para actualizar la temperatura de un input
     * @param {*} e 
     */
    handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }
    
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
    
      return (
        <fieldset>
          <legend>Temperatura en {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

export default TemperatureInput;