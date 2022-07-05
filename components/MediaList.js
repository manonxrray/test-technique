import Media from "./Media";
import { useQuery } from "@apollo/client";
import { MediaListQuery} from "../graphql/query/media";
import styled from "styled-components";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(auto);
`;

const Loader = () => {
  return <p>Loading</p>;
};

const MediaList = () => {
  const medias = [];

  const { loading, data } = useQuery(MediaListQuery, {
    variables: { userId : 5916149 }
  });

  if (loading) return <Loader />

  let entries = data.MediaListCollection.lists[0].entries;

  for (let i =0; i < entries.length; i++) {
    medias.push(entries[i].mediaId)
  };

  console.log("🚀 ~ file: MediaList.js ~ line 24 ~ MediaList ~ medias", medias);

  return (
    <List>
      {Object.values(medias).map((media) => {
        return <Media key={media} mediaId={media}/>
      })}
    </List>
  )
};

export default MediaList;
