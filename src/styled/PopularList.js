import styled from "styled-components/native"

export const Container = styled.View`
  padding: 0 10px;
`

export const Title = styled.Text`
  font-size: 16px;
  color: #7e0000;
  padding-top: 10px;
  font-family: "Poppins-SemiBold";
`
export const SiteContainer = styled.View`
  display: flex;
  flex-direction: row;
`

export const Site = styled.TouchableOpacity`
  background-color: ${props => props.color || "#DEDEDE"};
  padding: 15px;
  border-radius: 14px;
  margin-right: 10px;
  min-height: 90px;
  min-width: 90px;
`

export const Spinner = styled.ActivityIndicator`
  margin: 10px 0;
`
