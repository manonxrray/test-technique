import { gql } from "@apollo/client";

export const MediaListCollection = gql`
  query MediaListCollection($userId: 5916149, type: ANIME){
    lists {
      entries {
        mediaId
      }
    }
  }
`;

export const Media = gql `
  query Media($id : Int){
    title {
      romaji
      english
      native
    }
    coverImage {
      extraLarge
      large
      medium
      color
    }
  }
`;
