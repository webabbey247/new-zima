import React from 'react'
import styled from 'styled-components';
import { Content4Column4 } from '../../styles/GlobalCss'

export const TechnologicalPartnerImg = styled.img`
height: 70px;
width: auto;
filter: grayscale(100%);
opacity: .6;
margin: 1rem 0;

&:hover {
  opacity: 1;
  filter
}
`;


const HomePartnerCard = ({data}) => {
    // console.log("trimmed data", data)
    return (
        <h1>hello</h1>
        // data.map((item, index) => { 
        //     return (
        //     <Content4Column4 key={index} id={item.id}>
        //     <TechnologicalPartnerImg src={item.cover_img_url} alt={item.caption} />
        //     </Content4Column4>
        //      );
        //     })
       
        )
    //     data.data.map((item, index) => {
    //         return (
    //                            <Content4Column4 key={index} id={item.id}>
    //                 <TechnologicalPartnerImg src={item.cover_img_url} alt={item.caption} />
    //             </Content4Column4>
    //         );
    //     })
   
    // )
    // return (
    //     data.data.map((item, index) => {
    //         return (
    //             
    //             // <Content4Column4 key={index} id={item.id}>
    //             //     <TechnologicalPartnerImg src={item.cover_img_url} alt={item.caption} />
    //             // </Content4Column4>
    //         );
    //     })
    // );
}

export default HomePartnerCard