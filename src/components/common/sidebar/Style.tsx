import styled from "styled-components";

export const SidebarWrapper = styled.div`
  border-right: 1px solid var(--color-border);
  min-width: 230px;
  height: 100%;
  padding: 15px;
  .logo {
    max-width: 120px;
  }
  .item {
    padding: 10px;
    border-radius: 5px;
    &:hover,
    &.active {
      background-color: #f1f1f1;
      color: var(--color-primary);
    }
  }
`;
