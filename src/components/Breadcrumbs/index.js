import React from 'react';
import { Typography, Button } from '@material-ui/core';
import MUIBreadcrumbs from '@material-ui/core/Breadcrumbs';
import { string, number } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { HashLink as Link } from 'react-router-hash-link';

import { REGION_DETAIL } from '../../api/queries';

const Breadcrumbs = ({ regionId, depth, text: lastItemText }) => {
  const { data, loading } = useQuery(REGION_DETAIL, {
    variables: { regionId },
  });

  const links =
    data &&
    [
      { to: `/#${data.region.continentId}`, text: data.region.continentName },
      { to: `/region-detail/${data.region.id}`, text: data.region.name },
    ].filter((x, i) => i < depth);

  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      {!loading &&
        data &&
        links &&
        links.map(({ to, text }) => (
          <Link key={to} color="inherit" to={to} style={{ textDecoration: 'none' }}>
            <Button>{text}</Button>
          </Link>
        ))}
      <Typography variant="h4" gutterBottom>
        {lastItemText}
      </Typography>
    </MUIBreadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  depth: number.isRequired,
  regionId: string.isRequired,
  text: string.isRequired,
};

export default Breadcrumbs;
