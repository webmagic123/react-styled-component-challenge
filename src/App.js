import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const LIMIT = 100;
const palette = {
  blue: 'blue',
  green: 'green',
  transparent: 'transparent',
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  text-align: center;
  border: 5px solid black;
  background-color: ${props => props.color};
  ${props => props.alt && `
    filter: drop-shadow(3px 3px 5px black);
    border-radius: 100%;
  `}
`;

const Button = styled.button`
  padding: 5px;
  font-size: 15px;
  outline: none;
  border: 2px solid black;
  background: white;
  min-width: 100px;

  &:not(:first-child) {
    margin-left: 10px;
  }
`;

class App extends Component {
  colors = [];

  state = {
    count: 0,
    cycleIndex: 0,
    recaping: false,
  };

  componentWillUnmount() {
    this.stopRecapInterval();
  }

  startRecapInterval() {
    this.setState({
      recaping: true,
      cycleIndex: 0
    });
    this.interval = setInterval(() => {
      this.setState(({ cycleIndex }) => ({ cycleIndex: (cycleIndex + 1) % this.colors.length }));
    }, 500);
  }

  stopRecapInterval() {
    this.setState({ recaping: false });
    clearInterval(this.interval);
  }

  handleCounterBtnClick = () => {
    if (this.state.count < LIMIT) {
      this.setState(({ count }) => {
        const newCount = count + 1;
        const color = this.getColor(newCount);
        if (color !== palette.transparent) {
          this.colors.push(color);
        }
        return { count: newCount };
      });
      this.stopRecapInterval();
    }
  };

  handleRecapBtnClick = () => {
    this.startRecapInterval();
  };

  // Helpers
  isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 0;
  }
  
  getColor(num) {
    if (num % 5 === 3) {
      return palette.green;
    }
    
    if (this.isPrime(num)) {
      return palette.blue;
    }
    
    return palette.transparent;
  }

  render() {
    const { count, cycleIndex, recaping } = this.state;
    const alt = count !== 0 && count % 10 === 0;
    const color = recaping ? this.colors[cycleIndex] : this.getColor(count);
    return (
      <Wrapper>
        <Container color={color} alt={alt}>
          <div>
            <Button onClick={this.handleCounterBtnClick}>
              Click Me: {count}
            </Button>
            <Button onClick={this.handleRecapBtnClick}>
              Recap colors
            </Button>
          </div>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
