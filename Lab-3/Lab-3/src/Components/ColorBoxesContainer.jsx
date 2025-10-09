import React from 'react';
import ColorBox from './ColorBox';

const ColorBoxesContainer = ({ colors }) => {
    const makeBoxes = () => {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(
      <ColorBox color={colors[i % colors.length]} />
    );
  }
  return boxes;
};
    return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 50px)',
      }} //https://www.w3schools.com/css/css_grid.asp
    >
        {makeBoxes()}
    </div>
  );
};

export default ColorBoxesContainer;