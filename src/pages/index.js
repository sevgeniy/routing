import React from "react";
import PageTemplate from "../components/PageTemplate";
import AboutMenu from "../components/AboutMenu";
import { Route } from "react-router-dom";

export const Home = () => (
  <PageTemplate>
    <section>
      <h1>[Home Page]</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem
        hic distinctio ea laborum repellat reprehenderit natus consequatur,
        inventore aperiam debitis explicabo quis, doloribus minus porro esse
        obcaecati, tenetur nulla.
      </p>
    </section>
  </PageTemplate>
);

export const About = () => (
  <PageTemplate>
    <section>
      <Route component={AboutMenu} />
      <Route exact path="/about" component={Company} />
      <Route path="/about/history" component={History} />
      <Route path="/about/services" component={Services} />
      <Route path="/about/location" component={Location} />
    </section>
  </PageTemplate>
);

export const Company = () => (
  <section>
    <h1>[About the Company]</h1>
  </section>
);

export const History = () => (
  <section>
    <h1>[History of the Company]</h1>
  </section>
);

export const Services = () => (
  <section>
    <h1>[About the Services]</h1>
  </section>
);

export const Location = () => (
  <section>
    <h1>[About the Location]</h1>
  </section>
);

export const Products = () => (
  <PageTemplate>
    <section>
      <h1>[Products Catalog]</h1>
    </section>
  </PageTemplate>
);

export const Events = () => (
  <PageTemplate>
    <section>
      <h1>[Events Calendar]</h1>
    </section>
  </PageTemplate>
);

export const Contact = () => (
  <PageTemplate>
    <section>
      <h1>[Contact Us]</h1>
    </section>
  </PageTemplate>
);
