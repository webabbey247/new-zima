import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Content6Column6 } from '../../styles/GlobalCss'


export const ClientCard = styled.div`
padding: 30px;
text-align: center;
border-radius: 5px;
border: 1px solid #9994;
display: flex;
align-items: center;
margin: 20px 5px;
height: 150px;
`;

export const ClientCardImg = styled.div`
background: url('/static/images/clients/access.jpg');
background-size: contain;
background-position: center;
height: 150px;
width: 150px;
background-repeat: no-repeat;

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    height: 100%;
    margin: auto;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    height: 100%;
    margin: auto; 
}
`;


const ClientList = ({index, id, cover_img, client_url}) => {
    return (
        <>
            <Content6Column6 key={index} id={id}>
                <Link href={client_url} passHref>
                    <ClientCard>
                        <ClientCardImg style={{backgroundImage: `url(${cover_img})`}} />
                    </ClientCard>
                </Link>
            </Content6Column6>
        </>
    )
}

export default ClientList