# uTravel

### Jerarquía de componentes de React

- **HomePage**

  - Landing
  - ContinentsContainer
    - ContinentsAnchors
    - _ContinentDetail_
      - RegionItem

- **RegionDetail**

  - PlaceContainer
    - _PlaceItem_

- **PlaceDetail**

  - Breadcrumbs
  - Description
  - Photos
    - Carousel
  - Activities
    - ExpansionPanel
  - ListReviews
    - ExpansionPanel
  - AddReview
    - Form
      - Rating
      - TextField
      - Button

- **SignIn**

  - Typography
  - Form
  - Button

- **SignUp**

  - Typography
  - Form
  - Button

### New development environment configuration instructions

To configure a new frontend development environment:

1. Clone the code from [https://github.com/L4UZ/desarrollo-ui-front](https://github.com/L4UZ/desarrollo-ui-front)
2. In the root directory run `npm install`
3. Create a `.env` file in the root directory, copy the contents from `.env.example` and fill the corresponding values for each key
4. Execute `npm start` to run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To configure a new backend development environment:

1. Clone the code from [https://github.com/L4UZ/desarrollo-ui-back](https://github.com/L4UZ/desarrollo-ui-back)
2. In the root directory run `npm install`
3. Create a `.env` file in the root directory, copy the contents from `.env.example` and fill the corresponding values for each key
4. Execute `npm run dev` to run the app in development mode. Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view the graphiql editor in the browser.

### GrahpQL schema

#### Queries

```gql
type Query {
  continents: [Continent]!
  region(id: String!): Region!
  place(id: String!): Place!
}
```

#### Mutations

```gql
type Mutation {
  signUp(user: SignUpInput!): String!
  signIn(credentials: CredentialsInput!): String!
  addReview(review: ReviewInput!): Review!
}

input CredentialsInput {
  email: String!
  password: String!
}

input SignUpInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
}

input ReviewInput {
  token: String!
  comment: String!
  score: Int!
  placeId: String!
}
```

#### Types

```gql
type User {
  firstName: String!
  lastName: String!
  email: String!
}

type Continent {
  id: ID!
  name: String!
  regions: [Region]!
}

type Region {
  id: ID!
  name: String!
  imageSrc: String!
  places: [Place]!
  continentId: ID!
  continentName: String!
}

type Place {
  id: ID!
  name: String!
  description: String
  imagesSrc: [String]!
  activities: [Activity]!
  reviews: [Review]!
  overallScore: Float
}

type Activity {
  id: ID!
  name: String!
  price: Int!
  description: String
}

type Review {
  id: ID!
  comment: String!
  score: Int!
  userEmail: String
  userFullName: String
}
```
