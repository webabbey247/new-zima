import styled from "styled-components";

export const ClientSection = styled.div`
padding: 0 3rem;
margin: 0;
display: flex;
align-items: center;
justify-content: center;

`;

export const ClientTopContent = styled.div`
// margin: 1.5rem 0;
`;

export const ClientBottomContent = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
`;


export const ClientCard = styled.div`
width: 140px;
height: 100px;
margin-right: 30px;
padding-bottom: 1rem;

&:last-child {
    margin-right: 0;
    margin-left: -20px;
}
`;