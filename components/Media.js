import { useQuery } from "@apollo/client";
import { MediaQuery } from "../graphql/query/media";

const Loader = () => {
  return <p>Loading</p>;
};

const Media = ( mediaId ) => {
  const ID = Object.entries(mediaId)[0][1];
  console.log("🚀 ~ file: Media.js ~ line 6 ~ Media ~ ID", ID);

  const { loading, data } = useQuery(MediaQuery, {
    variables: { id: ID }
  });

  if (loading) return <Loader />

  return (
    <div>
      <img
        src={data.Media.coverImage.large}
        alt={data.Media.title.english}
       />
      <h2>{data.Media.title.native}</h2>
      <h3>{data.Media.title.english}</h3>
    </div>
  )
};

export default Media;
