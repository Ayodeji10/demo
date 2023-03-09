import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <Link href={"/"}>Go Home</Link>
    </div>
  );
};

export default PageNotFound;
