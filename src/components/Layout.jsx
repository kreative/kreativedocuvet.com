import React, { useEffect } from "react";
import Router from "next/router";

export default function Layout({ children }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url) {
        global.analytics.page("page_viewed", {
          page: url,
        });
      }
    };

    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return <div>{children}</div>;
}
