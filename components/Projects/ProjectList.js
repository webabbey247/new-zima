import React from 'react';
import styled from 'styled-components';
import { GeneralMdText } from '../../styles/GlobalCss';


const ProjectLabel = styled.span`
display: none;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
   display: block;
   margin-top: 10px;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    display: block;
    margin-top: 10px;
}

`;

const ProjectName = styled.div`
padding-left: 1rem;
width: 35%;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;
    padding-left: 0;

    & > h4.ProjectName{
        font-size: 18px !important;
    }
 }
 
 @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;
    padding-left: 0;

    & > h4.ProjectName{
        font-size: 14px !important;
    }
 }
`;

const ProjectClient = styled.div`
width: 30%;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;

    & > h4.ProjectClient{
        font-size: 18px !important;
        line-height: 24px !important;
    }
 }
 
 @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;

    & > h4.ProjectClient{
        font-size: 14px !important;
        line-height: 20px !important;
    }
 }
`;

const ProjectYear = styled.div`
width: 15%;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;

    & > h4.ProjectYear{
        font-size: 18px !important;
    }
 }
 
 @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;

    & > h4.ProjectYear{
        font-size: 14px !important;
    }
 }
`;

const ProjectClientLocation = styled.div`
width: 20%;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 100%;

    & > h4.ProjectClientLocation{
        font-size: 18px !important;
    }
}
 
 @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 100%;

    & > h4.ProjectClientLocation{
        font-size: 14px !important;
    }
 }
`;


const ProjectInfo = styled.div`
display: flex;
align-items: center;
padding: 1rem 0;
flex-direction: row;
color: #9a9ca8;
border-bottom: 1px solid #efefef;

&:hover {
    background: #f0f3f6;
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    flex-direction: column;
    padding: 1.5rem;
    border-bottom: 10px solid #EF9801;
    margin-bottom: 1rem

}
 
 @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    flex-direction: column;
    padding: 1rem;
    border-bottom: 10px solid #EF9801;
    margin-bottom: 1rem
}
`;


const ProjectList = ({ data }) => {
    return (
        data.map((item, index) => {
            return (
                <ProjectInfo key={index} id={item.id}>
                    <ProjectName>
                        <ProjectLabel>Project</ProjectLabel>
                        <GeneralMdText className='ProjectName' textAlign='left' textTransform='unset' fontWeight='700' fontSize='13px'>{item.title} </GeneralMdText> </ProjectName>
                    <ProjectClient>
                    <ProjectLabel>Client</ProjectLabel>
                        <GeneralMdText className='ProjectClient' textAlign='left' textTransform='unset' fontWeight='700' fontSize='13px' padding="0 1rem 0 0">{item.client} </GeneralMdText></ProjectClient>
                    <ProjectYear>
                    <ProjectLabel>Year</ProjectLabel>
                        <GeneralMdText className='ProjectYear' textAlign='left' textTransform='unset' fontWeight='700' fontSize='13px'>{item.year}</GeneralMdText></ProjectYear>
                    <ProjectClientLocation>
                    <ProjectLabel>Location</ProjectLabel>
                        <GeneralMdText className='ProjectClientLocation' textAlign='left' textTransform='unset' fontWeight='700' fontSize='13px'>{item.location}</GeneralMdText>
                    </ProjectClientLocation>
                </ProjectInfo>
            );

        })
    )
}

export default ProjectList;