import React, { Component } from 'react';
import { loadGetInitialProps } from 'next-server/dist/lib/utils';
import ReactGa from 'react-ga';

const withAnalytics = () => (Composed) =>
  class extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx);
    }

    componentDidMount() {
      console.log('PAGE VIEW');

      ReactGa.initialize('ID_ANALYTICS');
      ReactGa.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />;
    }
  };

export default withAnalytics;
