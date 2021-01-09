import React from 'react';
import { Link } from 'react-router-dom';

// MATERIAL UI
import Typography from '@material-ui/core/Typography';
import MaterialLink from '@material-ui/core/Link';

const Copyright = () => (
  <Typography variant='body2' color='textSecondary' align='center'>
    {'Copyright © '}
    <MaterialLink component={Link} to='/' color='inherit'>
      Your Website
    </MaterialLink>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

export default Copyright;
