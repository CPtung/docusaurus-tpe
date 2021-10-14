import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';
function ApiDoc({ layoutProps, spec: propSpec }) {
    const { title = 'API Docs', description = 'Open API Reference Docs for the API', } = layoutProps || {};
    const spec = propSpec.type === 'object' ? propSpec.content : undefined;
    const specUrl = propSpec.type === 'url' ? propSpec.content : undefined;
    return (<Layout {...layoutProps} title={title} description={description}>
      <Redoc spec={spec} specUrl={specUrl || propSpec.specUrl}/>
    </Layout>);
}
export default ApiDoc;
