import { memo } from 'react';
import styled from 'styled-components';

const ErrorLabel = styled.span`
  color: ${({ theme }) => theme.colors.error.e5};
  font-size: '0.75rem';
  font-weight: 400;
  line-height: 20px;
  &:first-letter {
    text-transform: capitalize;
  }
`;
export default memo(ErrorLabel);
