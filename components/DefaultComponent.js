import Image from "next/image";
import MediaList from "./MediaList";

export const DefaultComponent = () => {
  return (
    <div className={"hello-world"}>
      <Image
        src={"/images/altlogo.png"}
        alt={"logo"}
        width={500}
        height={280}
      />
      <MediaList />
    </div>
  )
}