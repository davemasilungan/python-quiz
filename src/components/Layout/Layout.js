import React from "react";
import { styles } from "./Layout.modules.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Hero />
      <JobCarousel />
      <Feature />
      <Footer />
    </div>
  );
};

export default Layout;
