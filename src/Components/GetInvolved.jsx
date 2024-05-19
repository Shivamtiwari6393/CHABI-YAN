import style from "../Styles/GetInvolved.module.css";
export default function GetInvolved() {
  return (
    <>
      <div className={style["getinvolved"]}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeZ931GiUsE8PoSW5RpJGXUeKV-Ku5xHMVjNQCjyIl48SVENw/viewform?embedded=true"
          width="50%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="form"
        >
          Loading…
        </iframe>
      </div>{" "}
    </>
  );
}
