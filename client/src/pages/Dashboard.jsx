import MotionWrapper from "../components/layout/MotionWrapper";
import Layout from "../components/layout/Layout";
import React, { useState } from "react";
import Dashboard from "../components/Dashboard";

const Dash = () => {
  return (
    <Layout>
      <MotionWrapper>
        <Dashboard />
      </MotionWrapper>
    </Layout>
  );
};

export default Dash;
