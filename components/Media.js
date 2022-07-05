import { useQuery } from "@apollo/client";
import { MediaQuery } from "../graphql/query/media";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 0.5rem;
  background: #F9F9F9;
  box-shadow: -3px 3px 6px rgba(214, 214, 214, 0.2),
    3px -3px 6px rgba(214, 214, 214, 0.2),
    -3px -3px 6px rgba(255, 255, 255, 0.9),
    3px 3px 8px rgba(214, 214, 214, 0.9);
  padding: 1rem;
  margin: 1rem;
  text-align: center;

  img {
    border: 4px solid #5985F8;
  }

  h2 {
    color: #5985F8
  }
`;

const Loader = () => {
  return <p>Loading</p>;
};

const Media = ( mediaId ) => {
  const ID = Object.entries(mediaId)[0][1];

  const { loading, data } = useQuery(MediaQuery, {
    variables: { id: ID }
  });

  if (loading) return <Loader />

  return (
    <Card>
      <img
        src={data.Media.coverImage.large}
        alt={data.Media.title.english}
       />
      <h2>{data.Media.title.native}</h2>
      <h3>{data.Media.title.english}</h3>
    </Card>
  )
};

export default Media;
