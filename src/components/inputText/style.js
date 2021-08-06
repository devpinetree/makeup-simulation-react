import styled from 'styled-components';

export const InputBox = styled.input`
  width: 400px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 20px;
  background-color: white;
  padding: 8px;
  -webkit-box-sizing: border-box; 
  -moz-box-sizing: border-box;    
  box-sizing: border-box;         
}

  &:focus {
    outline: none;
  }
`;
