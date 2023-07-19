import React from "react";
import Moment from 'moment';
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import {
  Content3Column3,
  CustomLink,
  CustomRouterLink,
  GeneralMdText,
  GeneralSmText,
} from "../../styles/GlobalCss";
import { blogPostImg } from "../../assets";

export const BlogCardChild = styled.div`
  padding: 0.5rem;
  background: var(--white);
  border: 1px solid #efeef0;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const BlogImgHolder = styled.figure`
  width: 180px;
  height: 196px;
  margin: 0px 24px;
`;

export const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0;
  padding: 1rem 1rem 0;
`;

export const HomeBlogCta = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  letter-spacing: 0.18px;
  color: #d99a29;
  position: relative;
  text-transform: uppercase;
  border: 1px solid #ef9801;
  padding: 14px 30px;
  width: 200px;
  margin-bottom: 1rem;

  &::before {
    content: "";
    width: 1rem;
    margin-right: 0.5rem;
    height: 0px;
    border-bottom: 1px solid;
    transition: margin-right 0.3s ease-out, width 0.3s ease-out;
    display: inline-block;
  }
`;

const BlogCard = ({ articles }) => {
  Moment.locale('en');
  return (
    <>
      {articles.map((article, index) => {
        return (
          <Content3Column3 key={index}>
            <Link href='blog/[slug]' as={`/blog/${article.slug}`} passHref>
            <BlogCardChild>
              <Image
                src={article.cover_img_url}
                placeholder="blur"
                blurDataURL={article.cover_img_url}
                alt={article.caption}
                width={280}
                height={250}
              />
              <BlogContent>
                <GeneralMdText
                  color="#D99A29"
                  fontSize="12px"
                  lineHeight="18px"
                  textTransform="uppercase"
                  fontWeight="600"
                >
                   { Moment(article.created_at).format('MMMM Do YYYY')}
                </GeneralMdText>

                <GeneralMdText
                  textTransform="unset"
                  color="#2b2d42"
                  fontSize="20px"
                  lineHeight="26px"
                  padding="1rem 1rem 1rem 0"
                  fontWeight="600"
                >
                  {article.caption}
                </GeneralMdText>
              </BlogContent>
            </BlogCardChild>
            </Link>
          </Content3Column3>
        );
      })}
    </>
  );
};

export default BlogCard;
