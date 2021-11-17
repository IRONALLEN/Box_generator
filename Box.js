import React from 'react';

const Box = (props) => {
  return (
    <div
      style={{
        height: props.height + 'px',
        width: props.width + 'px',
        borderRadius: '5px',
        marginBottom: '1em',
        backgroundColor: props.backgroundColor,
      }}
    ></div>
  );
};

export default Box;
