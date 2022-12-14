import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import VideoCalling from 'sections/video-calling';
import Pricing from 'sections/pricing';
import Clients from 'sections/clients';
import Blog from 'sections/blog';
import Faq from 'sections/faq';
import Support from 'sections/support-team';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Eat Souffle Petra"
          description="Japanese Pancake Souffle Near UK Petra Surabaya"
        />
        <Banner />
        <Services />
        {/* <VideoCalling /> */}
        {/* <Pricing /> */}
        <Clients />
        <Blog />
        {/* <Faq /> */}
        {/* <Support /> */}
      </Layout>
    </ThemeProvider>
  );
}
