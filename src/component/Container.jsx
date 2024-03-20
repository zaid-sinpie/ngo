export default function Container({}) {
  const hClasses = "font-bold text-2xl text-stone-100";
  const aClasees =
    "active:text-teal-900 text-stone-100 font-bold text-xl hover:text-stone-300 relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-600 before:absolute before:bg-gray-100 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-600 after:absolute after:bg-teal-300 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] bg-transparent";
  return (
    <menu className="z-10 w-11/12 h-3/5 flex justifyl-start items-start">
      <article className="flex flex-col justify-start gap-y-2 item-center bg-teal-500/80 py-10 px-20 border-solid rounded-xl border-teal-300 border-4">
        <h1 className={hClasses}>
          "We stand for unity,
          <br /> in every community."
        </h1>
        <h1 className={hClasses}>
          “together we fight <br /> for what’s fair and right”
        </h1>
        <h1 className="font-bold text-8xl uppercase text-teal-200/40 select-none">
          dreams
        </h1>
        <p className="uppercase text-teal-200/40 text-end select-none">
          are true with us
        </p>
        <ul className="flex gap-4 justify-start items-center">
          <li className={aClasees}>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className={aClasees}>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li className={aClasees}>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className={aClasees}>
            <a href="#">
              <i className="fa-brands fa-youtube shadow-lg"></i>
            </a>
          </li>
          <li>
            <p className="text-stone-100 text-xs">
              follow us on{" "}
              <strong className="text-sky-600 text-sm">
                Social Media
              </strong>
            </p>
          </li>
        </ul>
      </article>
    </menu>
  );
}
