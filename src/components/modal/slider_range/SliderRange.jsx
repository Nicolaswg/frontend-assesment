import React from 'react'

const SliderRange = ({ value, handleRangeChange, min, max, steps }) => {
  return (
    <>
      <p>{min}</p>
      <input
        type="range"
        defaultValue={value}
        onChange={handleRangeChange}
        min={min}
        max={max}
        step={steps}
      />
      <p>{value}</p>
    </>
  )
}

export default SliderRange