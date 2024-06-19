import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LinkProp } from '../../../types/page';

const StyledLink = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  transition: 'border-bottom 0.3s ease',
  '&:hover': {
    borderBottom: `1px solid ${theme.palette.text.primary}`,
  },
}));

export const Link: FC<LinkProp> = ({ href, name }) => (
  <StyledLink to={href} data-testid="link">
    <Typography>{name}</Typography>
  </StyledLink>
);
