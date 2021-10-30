import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Test from "../components/Test";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="blub" />
      <h1 className="bg-primary text-white">Hi Bootstrap and Gatsby</h1>
    </Layout>
  );
};

export default IndexPage;
