import React from 'react';
import TemperatureInput from './TemperatureInput.js'

/**
 * Función para calcular la conversión de Fahrenheit a Celsius
 * 
 * @param {*} fahrenheit 
 * @returns {*}
 */
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

/**
 * Función para calcular la conversión de Celsius a Fahrenheit
 * @param {*} celsius 
 * @returns {*} 
 */
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

/**
 * Convierte fahrenheit a celsius o viceversa
 * @param {*} temperature 
 * @param {*} convert 
 * @returns 
 */
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  
  return rounded.toString();
}

/**
 * Determina a qué temperatura hierve el agua en celsius
 * @param {*} props 
 * @returns 
 */
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>El agua herviría</p>;
  }
  
  return <p>El agua <strong>no</strong> herviría</p>;
}

/**
 * CLASS Calculator
 */
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
  }
  
  /**
   * Manejador calcular la conversión de grados celsius
   * @param {*} temperature 
   */
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }
  
  /**
   * Manejador calcular la conversión de grados fahrenheit
   * @param {*} temperature 
   */
  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
  
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;