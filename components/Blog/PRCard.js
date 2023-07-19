import Link from "next/link";
import React from "react";
import styled from "styled-components";
import {
    Content3Column3,
    CustomLink,
    CustomRouterLink,
    GeneralMdText,
} from "../../styles/GlobalCss";


const PRCardChild = styled.div`
border-radius: 0px 0px 0px 0px;
margin: 2rem 0;
`;

const PRImageContainer = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
transition: all .4s;
width: 100%;
z-index: 1;
overflow: hidden;
`;
const PRImage = styled.div`
transition-duration: 500ms;
filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
will-change: transform;
background-size: cover;
background-position: 50%;
z-index: 1;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
transition: all .4s;
`;

const PRImageOverlay = styled.div`
background-color: #00000078;
transition-duration: 500ms;
z-index: 2;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
transition: all .4s;
`;

const PRContent = styled.div`
position: relative;
transition: .5s;
color: #fff;
z-index: 1;
overflow: hidden;
display: flex;
flex-wrap: wrap;
width: 100%;
`;

const PRCard = ({ data }) => {
    return (
        data.map((item, index) => {
            return (
                <Content3Column3 key={index} id={item.id}>
                    <PRCardChild>
                        <Link href='blog/[slug]' as={`/blog/${item.slug}`} passHref>
                        <CustomLink flexDirection="column">
                            <PRImageContainer>
                                <PRImage style={{
                                    backgroundImage: `url(${item.cover_img_url})`
                                }} />
                                <PRImageOverlay />
                            </PRImageContainer>
                            <PRContent>
                                <GeneralMdText fontSize='22px' fontWeight='700' lineHeight="30px" textTransform='unset' margin="0.5rem 0" color="#ffffff" padding="0 2rem" textAlign="center">{item.caption}</GeneralMdText>
                            </PRContent>
                        </CustomLink>
                        </Link>
                    </PRCardChild>
                </Content3Column3>
            );

        })
    )
};

export default PRCard;
