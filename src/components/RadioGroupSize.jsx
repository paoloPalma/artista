
import  { useState } from 'react';
import styled from 'styled-components';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

const RadioGroupContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const RadioInput = styled.input`
  display: none;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  font-size: 13px;
  cursor: pointer;
  background-color: ${props => (props.checked ? '#000' : '#fff')};
  color: ${props => (props.checked ? '#fff' : '#000')};

  &:hover {
    background-color: #000;
    color: white;
  }
  `;

const RadioGroupSize = ({ onSizeSelect }) => {

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    onSizeSelect(size);
  }


  return (
    <>
      <RadioGroupContainer>
      {sizes.map((size) => (
        <div key={size}>
          <RadioInput
            type="radio"
            id={size}
            name="size"
            value={size}
            checked={selectedSize === size}
            onChange={() => handleSizeChange(size)}
          />
          <RadioLabel htmlFor={size} checked={selectedSize === size}>
            {size}
          </RadioLabel>
        </div>
      ))}
    </RadioGroupContainer>
    </>
  )
}

export default RadioGroupSize