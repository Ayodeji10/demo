import { useRouter } from "next/router";

function SingleEvent() {
  const { id } = useRouter().query;
  const router = useRouter();
  return (
    <div>
      <h1>single Event page {id}</h1>
      <h2>{router.asPath}</h2>
      <h2>{router.asPath.includes("/events/") && "true"}</h2>
    </div>
  );
}

export default SingleEvent;
