import styled from "styled-components";

 export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 20px;
`;

export const Card = styled.View`
    background-color: #EEE5FF;
    width: 360px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;  
    margin-left: 25px;           
    
`;

export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px;
`;

export const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;
export const UserInfoText = styled.View`
    flex-direction: column;
    justify-content: center;
    padding: 10px;     
`;

export const UserName = styled.Text`
    font-size: 20px;
    font-weight: bold;
    font-family: 'Lato-Regular'
    color: #7F3DFF;
`;
export const  DayText= styled.Text`
    font-size: 25px;
    font-weight: bold;
    font-family: 'Lato-Regular'
    padding-left: 100px;
    padding-top: 20px;
    padding-bottom: 15px;
    color: #7F3DFF;
`;

export const TableTime = styled.Text`
    font-size: 12px;
    font-family: 'Lato-Regular';
    color: #fff;
`; 
export const PostText = styled.Text`
    font-size: 14px;
    font-family: 'Lato-Regular';
    padding-left: 5px;
    padding-right: 15px;
    padding-bottom: 15px;
    color: #fff;
`;
export const Divider = styled.View`
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    width: 92%;
    align-self: center;
    margin-top: 15px;
`;

export const PostImg = styled.Image`
    width: 100%;
    height: 250px;
`;

export const InteractionWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 15px;
`;

export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 2px 5px;
    background-color: ${props => props.active ? '#2e64e515' : 'transparent'}
`;
export const InteractionText = styled.Text`
    font-size: 12px;
    font-family: 'Lato-Regular';
    font-weight: bold;
    color: ${props => props.active ? '#7F3DFF' : '#333'};
    margin-top: 5px;
    margin-left: 5px;
`;