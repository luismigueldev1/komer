import styled from "styled-components/native"

export const Container = styled.View`
  padding: 50px 10px;
`
export const Links = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
`

export const LinkText = styled.Text`
  color: ${props => (props.active ? "#7E0000" : "#999999")};
  font-size: 22px;
  font-family: ${props =>
    props.active ? "Poppins-SemiBold" : "Poppins-Medium"};
`

export const InputControl = styled.View`
  margin-top: 10px;
  width: 100%;
  border: 2px solid #7e0000;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Input = styled.TextInput`
  width: 85%;
  margin-left: 10px;
  font-size: 16px;
  font-family: Poppins-Regular;
  margin-top: 5px;
`

export const Text = styled.Text`
  padding: 10px 0;
  text-align: center;
  color: #999999;
  font-family: Poppins-Regular;
`

export const Button = styled.TouchableOpacity`
  padding: 10px;
  background-color: #7e0000;
  border-radius: 30px;
`
export const ButtonText = styled.Text`
  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
  color: #ffdd00;
  font-family: Poppins-Bold;
  letter-spacing: 1px;
  margin-top: 3px;
`

export const Social = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 60%;
  margin: 0 auto;
`
