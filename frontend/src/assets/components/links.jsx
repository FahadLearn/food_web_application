import { Link } from "react-router-dom";

function Links({ text, to }) {
  return (
    <>
      <div className="">
        <Link
          to={to}
          className="sm:text-[12px] md:text-[14px] lg:text-[16px] text-zinc-900"
        >
          {text}
        </Link>
      </div>
    </>
  );
}

export default Links;
