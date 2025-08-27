import styled from "styled-components";

export const DaasboardWraper = styled.div`
  height: 100%;
  .logo {
    max-width: 120px;
  }
  .header {
    &-dashboard {
      border-bottom: 1px solid var(--color-border);
    }
  }

  .angle {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    &-down {
      border: solid black;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      width: 7px;
      height: 7px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
  .arrow {
    &-down {
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 20px solid #f00;
      width: 0;
      height: 0;
    }
  }
  .notification {
    position: relative;
    .badge {
      position: absolute;
      color: white;
      width: 25px;
      height: 25px;
      top: -14px;
      display: inline-block;
      left: 10px;
      text-align: center;
    }
  }
`;
