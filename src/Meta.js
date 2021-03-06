/**
 * @filename: Meta.js
 * @description: SEO 처리
 * @author: JEON WOO YEOL
 */

import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset="utf-8" />
        <title>{props.title}</title>

        {/* SEO 태그 */}
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={props.title} />
        <meta name="og:description" content={props.description} />
        <meta name="og:url" content={props.url} />
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: 'Architect Template Clone (React)',
  description: 'React.js로 구현한 W3School 클론코딩 페이지 입니다.',
  keywords: 'React,layout,demo,responsive,web',
  author: 'JEON WOO YEOL',
  url: window.location.href,
};

export default Meta;
