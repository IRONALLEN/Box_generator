import React, { useReducer } from 'react';

import Box from './Box';

const initialState = {
  color: {
    value: '',
    error: null,
  },
  width: {
    value: '',
    error: null,
  },
  height: {
    value: '',
    error: null,
  },

  boxes: [],
};

function reducer(state, action) {
  return {
    ...state,
    [action.type]: action.payload,
  };
}

function BoxCreate() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('this is color' + state.color.value);
  console.log('this is width' + state.width.value);
  function handleChange(e, error) {
    const { name, value } = e.target;
    dispatch({
      type: name,
      payload: { value, error },
    });
  }

  const handleColor = (e) => {
    let error = null;
    if (e.target.value.length > 0 && e.target.value.length < 3) {
      error = '*color must be at least three characters';
    }
    handleChange(e, error);
  };

  const handleWidth = (e) => {
    let error = null;
    if (e.target.value.length > 0 && e.target.value.length >= 3) {
      error = '*dimension must be at least three characters';
    }
    handleChange(e, error);
  };
  const handleHeight = (e) => {
    let error = null;
    if (e.target.value.length > 0 && e.target.value.length >= 3) {
      error = '*dimension must be at least three characters';
    }
    handleChange(e, error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.color.error == null && state.color.value.length > 0) {
      const backgroundColor = state.color.value;
      const width = state.width.value;
      const height = state.height.value;
      const boxList = state.boxes;
      boxList.push(backgroundColor);
      dispatch({
        type: 'boxes',
        payload: boxList,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>Color:</label>
          <input
            type='text'
            name='color'
            value={state.color.value}
            onChange={handleColor}
          />
        </div>
        <div>
          <label>Width:</label>
          <input
            type='text'
            name='width'
            value={state.width.value}
            onChange={handleWidth}
          />
        </div>
        <div>
          <label>Height:</label>
          <input
            type='text'
            name='height'
            value={state.height.value}
            onChange={handleHeight}
          />
        </div>
        {state.color.error ? (
          <p style={{ color: 'red' }}>{state.color.error}</p>
        ) : (
          ''
        )}
      </div>
      <input type='submit' value='Create' />
      <div>
        {state.boxes.map((backgroundColor, width, height) => {
          return (
            <Box
              backgroundColor={backgroundColor}
              width={state.width.value}
              height={state.height.value}
            />
          );
        })}
      </div>
    </form>
  );
}

export default BoxCreate;
