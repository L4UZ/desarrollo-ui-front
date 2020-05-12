import gql from 'graphql-tag';

export const REGION_DETAIL = gql`
  mutation RegionDetail($regionId: String) {
    region(regionId: $regionId)
  }
`;
