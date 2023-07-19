import React from 'react';
import styled from 'styled-components';
import { Content3Column3, GeneralMdText, GeneralSmText, CustomLink } from '../../styles/GlobalCss';


const MediaMentionCard = styled.div`
border-radius: 0px 0px 0px 0px;
margin: 2rem 0;
`;

const MediaMentionLogo = styled.div`
filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
background-size: cover;
background-position: 50%;
z-index: 1;
height: 100px;
transition: all .4s;
`;

const MediaMentionContent = styled.div`
min-height: 175px;
text-align: left;
padding: 10% 10% 10% 10%;
background-color: #3D31160D;
align-content: flex-start;
align-items: flex-start;
transition: all .4s;
width: 100%;
background-color: #f7f7f7;
`;


const MediaMention = ({ data }) => {
    return (
        data.map((item, index) => {
            return (

                <Content3Column3 key={index} id={item.id}>
                    <MediaMentionCard>
                        <CustomLink href={item.media_url} target="_blank" flexDirection="column">
                            <MediaMentionLogo style={{
                                backgroundImage: `url(${item.cover_img_url})`
                            }} />
                            <MediaMentionContent>
                                {/* <GeneralMdText fontSize='16px' fontWeight='700' lineHeight="24px" textTransform='unset' margin="0.5rem 0" color="#EF9801">
                                    insidebusiness.ng
                                </GeneralMdText> */}
                                <GeneralSmText fontSize='16px' fontWeight='400' lineHeight="24px" textTransform='unset' margin="0.5rem 0" color="#2b2d42">
                                    {item.caption}</GeneralSmText>
                            </MediaMentionContent>
                        </CustomLink>
                    </MediaMentionCard>
                </Content3Column3>
            );

        })
    )
}

export default MediaMention;