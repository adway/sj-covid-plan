import React from 'react';
import { Helmet } from 'react-helmet';

export default ({
  title = "Saint John's COVID-19 Plan",
  name = "Saint John's COVID-19 Plan",
  description = 'A site for students to share their thoughts on the reopening process.',
}) => (
  <Helmet>
    <title>{title}</title>
    <meta property='og:title' content={name} />
    <meta name='twitter:title' content={name} />
    <meta property='og:type' content='website' />
    <meta property='og:site_name' content={name} />
    <meta name='description' content={description} />
    <meta property='og:description' content={description} />
    <meta name='twitter:description' content={description} />
    {/* <link rel='shortcut icon' href='/favicon.ico' /> */}
    <link
      href='https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&display=swap'
      rel='stylesheet'
    />
  </Helmet>
);
