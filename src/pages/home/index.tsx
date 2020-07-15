import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { RiDownloadLine } from 'react-icons/ri';

import withAnalytics from '~/hoocs/withAnalytics';

import { DefaultLayout } from '~/components/Layout';
import Button from '~/components/Button';

import {
  Container,
  Content,
  Section,
  SideLeft,
  SideRight,
} from '~/styles/pages/home';

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <Head>
          <title>Marcos Bezerra | Personal CV</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Section>
          <SideLeft>
            <Content>
              <p className="hello">HELLO!</p>
              <h1>
                I am Marcos, <span>front-end developer</span>
              </h1>
              <p className="description">
                I am an expert in broadly understood development and have worked
                so far for the largest companies. I have over 10 years of
                experience
              </p>

              <Button onClick={() => console.log('AQUI')}>Download cv</Button>
            </Content>
          </SideLeft>
          <SideRight />
        </Section>
        <Section id="my-bio">
          <div style={{ height: '100vh' }}></div>
        </Section>
      </Container>
    </DefaultLayout>
  );
};

export default withAnalytics()(Home);
