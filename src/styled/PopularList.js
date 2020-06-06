import styled from "styled-components/native"

export const Container = styled.View`
  padding: 0 10px;
`

export const Title = styled.Text`
  font-size: 16px;
  color: #7e0000;
  font-family: "Poppins-SemiBold";
`
export const SiteContainer = styled.View``

export const Site = styled.View`
  background-color: ${props => props.color || "#DEDEDE"};
  padding: 20px;
  border-radius: 8px;
`

export const Spinner = styled.ActivityIndicator`
  margin: 10px 0;
`
