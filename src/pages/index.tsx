import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <h1 className="bg-primary text-white">Hi Bootstrap and Gatsby</h1>
    </Layout>
  );
};

export default IndexPage;
