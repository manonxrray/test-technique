import { useState, useEffect } from "react";
import Media from "./Media";
import { useQuery } from "@apollo/client";
import { MediaListQuery, MediaQuery } from "../graphql/query/media";

const MediaList = () => {
  const [medias, setMedias] = useState([]);
  let mediaData = [];

  const { loading, data } = useQuery(MediaListQuery, {
    variables: { userId : 5916149 }
  });
  
  useEffect(() => {
    let entries = data.MediaListCollection.lists[0].entries;

    for (let i =0; i < entries.length; i++) {
      mediaData.push(entries[i].mediaId)
    };

    setMedias(mediaData);

    console.log("🚀 ~ file: MediaList.js ~ line 8 ~ MediaList ~ medias", medias)
    
  }, []);

  return (
    <div>
      {Object.values(medias).map((media) => {
        return <Media />
      })}
    </div>
  )
};

export default MediaList;
