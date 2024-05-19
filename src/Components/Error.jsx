import { useRouteError } from "react-router-dom";

export default function Error() {
  const e = useRouteError();
  console.log(e);
  return (
    <>
      <div>{e.data}</div>
    </>
  );
}
