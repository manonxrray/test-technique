import Image from "next/image";
import MediaList from "./MediaList";

export const DefaultComponent = () => {
  return (
    <div className={"hello-world"}>
      <Image
        src={"/images/senscritique.png"}
        alt={"logo"}
        width={300}
        height={180}
      />
      <MediaList />
    </div>
  )
}