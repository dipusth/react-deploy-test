import { Outlet, useLocation } from "react-router-dom";

import { useEffect } from "react";
import DashboardHeader from "@/components/common/DashboardHeader";

import styled from "styled-components";
import { DaasboardWraper } from "@/components/Style";
import Sidebar from "@/components/common/sidebar/Sidebar";

const DashboardLayout = () => {
  const location = useLocation();
  console.log("location", location);

  useEffect(() => {
    console.log("Path changed:", location.pathname);
  }, [location]);
  const DashboardBodyWrapper = styled.div`
    height: calc(100vh - 85px);
  `;
  return (
    <DaasboardWraper>
      <DashboardHeader />
      <DashboardBodyWrapper className="dark:text-white flex wrapper">
        <Sidebar />
        <div className="flex-1 p-5">
          <Outlet />
        </div>
      </DashboardBodyWrapper>
    </DaasboardWraper>
  );
};

export default DashboardLayout;
