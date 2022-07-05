import {ApolloProvider} from "@apollo/client";
import {AnilistClient} from "../http/AnilistClient";
import {DefaultComponent} from "../components/DefaultComponent";

export default function Home() {
  return (
    <ApolloProvider client={AnilistClient}>
      <div className="container">
        <DefaultComponent/>
      </div>
    </ApolloProvider>
  )
}
