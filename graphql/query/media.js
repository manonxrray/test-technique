import { gql } from "@apollo/client";

export const MediaListQuery = gql`
  query MediaListCollection ($userId: Int){
    MediaListCollection(userId : $userId, type: ANIME) {
      lists {
        entries {
          mediaId
        }
      }
    }
  }
`;

export const MediaQuery = gql `
  query Media ($id : Int){
    media(id: $id) {
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
  }
`;
