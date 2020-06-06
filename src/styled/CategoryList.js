import styled from "styled-components/native"

export const Container = styled.View`
  padding: 10px;
`
export const CategoryItem = styled.View`
  background-color: ${props => props.color || "#dedede"};
  border-radius: 16px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
`
