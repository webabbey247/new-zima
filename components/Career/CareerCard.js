import React from 'react'
import Link from 'next/link';
import Moment from 'moment';
import { CareerChildLTR, CareerChild, CareerChildRTL, CareerApplyButton, CareerOutlineApplyButton } from '../../styles/CareerCss';
import { GeneralMdText, GeneralSmText } from '../../styles/GlobalCss';

const CareerCard = ({ data }) => {
    return (
        data.map((item, index) => {
            return (

                <CareerChild key={index} id={item.id}>
                    <CareerChildLTR>
                        <GeneralMdText className='CareerJobTitle' textAlign='left' textTransform='unset' fontWeight='700' fontSize='25px'>{item.title}</GeneralMdText>
                        <GeneralMdText className='CareerJobLocation' fontSize='16px' fontWeight='400' lineHeight="24px" textTransform='unset' margin="1rem 0" color="#83858c">{item.location}.</GeneralMdText>
                    </CareerChildLTR>
                    <CareerChildRTL>
                        <GeneralSmText className='CareerJobDate' fontSize='13px' fontWeight='400' lineHeight="20px" textTransform='unset' margin="0 0 1rem" color="#83858c" textAlign="right">Posted  { Moment(item.created_at).format('MMMM Do YYYY')}</GeneralSmText>
                        <Link href="mailto:" passHref>
                            <CareerApplyButton>Apply Now</CareerApplyButton>
                        </Link>
                        <Link href='careers/[slug]' as={`/careers/${item.slug}`} passHref>
                            <CareerOutlineApplyButton>View Job Details</CareerOutlineApplyButton>
                        </Link>
                    </CareerChildRTL>
                </CareerChild>
            );

        })
    )
}

export default CareerCard