import React from "react";
import PageTemplate from "./components/PageTemplate";

export default ({ location }) => (
  <PageTemplate>
    <section>
      <h1>Resource isn't found at '{location.pathname}'</h1>
    </section>
  </PageTemplate>
);
