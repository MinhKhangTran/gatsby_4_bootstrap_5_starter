import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Test = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
        }
      }
    }
  `);
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default Test;
