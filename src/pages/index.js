import React, { Suspense } from 'react';
import Layout from "../layouts/Layout"
import SEO from "../layouts/seo"
import MainApp from "@/layouts/MainApp"
//import Image from "../components/image"

const IndexPage = () => (
  <Suspense fallback={null}>
    <Layout title="jumang potaru">
      <SEO />
      <MainApp />
    </Layout>
  </Suspense>
);

export default IndexPage
