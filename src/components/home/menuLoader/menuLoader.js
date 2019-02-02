import React, { Fragment } from 'react';
import ContentLoader from 'react-content-loader';
import './menuLoader.scss';

const menuLoader = (props) => (
  <Fragment>
    <div className="loader-card">
      <ContentLoader
        height={160}
        width={150}
        speed={2}
        primaryColor="#efedf0"
        secondaryColor="#d6d7da"
        {...props}
      >
        <rect x="29" y="117.61" rx="3" ry="3" width="72.2" height="6.08" />
        <rect x="28" y="105.96" rx="3" ry="3" width="98.49" height="8.38" />
        <rect x="29.34" y="6.61" rx="0" ry="0" width="121.2" height="95.16" />
        <rect x="236.63" y="83.61" rx="0" ry="0" width="0" height="0" />
      </ContentLoader>
    </div>

    <div className="loader-card">
      <ContentLoader
        height={160}
        width={150}
        speed={2}
        primaryColor="#efedf0"
        secondaryColor="#d6d7da"
        {...props}
      >
        <rect x="29" y="117.61" rx="3" ry="3" width="72.2" height="6.08" />
        <rect x="28" y="105.96" rx="3" ry="3" width="98.49" height="8.38" />
        <rect x="29.34" y="6.61" rx="0" ry="0" width="121.2" height="95.16" />
        <rect x="236.63" y="83.61" rx="0" ry="0" width="0" height="0" />
      </ContentLoader>
    </div>

    <div className="loader-card">
      <ContentLoader
        height={160}
        width={150}
        speed={2}
        primaryColor="#efedf0"
        secondaryColor="#d6d7da"
        {...props}
      >
        <rect x="29" y="117.61" rx="3" ry="3" width="72.2" height="6.08" />
        <rect x="28" y="105.96" rx="3" ry="3" width="98.49" height="8.38" />
        <rect x="29.34" y="6.61" rx="0" ry="0" width="121.2" height="95.16" />
        <rect x="236.63" y="83.61" rx="0" ry="0" width="0" height="0" />
      </ContentLoader>
    </div>

    <div className="loader-card">
      <ContentLoader
        height={160}
        width={150}
        speed={2}
        primaryColor="#efedf0"
        secondaryColor="#d6d7da"
        {...props}
      >
        <rect x="29" y="117.61" rx="3" ry="3" width="72.2" height="6.08" />
        <rect x="28" y="105.96" rx="3" ry="3" width="98.49" height="8.38" />
        <rect x="29.34" y="6.61" rx="0" ry="0" width="121.2" height="95.16" />
        <rect x="236.63" y="83.61" rx="0" ry="0" width="0" height="0" />
      </ContentLoader>
    </div>
  </Fragment>
);
export default menuLoader;
