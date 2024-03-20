export default function Container({}) {
  const hClasses = "font-bold text-2xl text-stone-100";
  const aClasees =
    "active:text-teal-900 text-stone-100 font-bold text-xl hover:text-stone-300 relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-600 before:absolute before:bg-gray-100 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-600 after:absolute after:bg-teal-300 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] bg-transparent";
  const addCon = "text-[#46facd] uppercase text-sm";
  const p = "text-stone-50 text-sm ";
  return (
    <menu className="z-10 w-11/12 flex justifyl-start items-start relative">
      <article className="flex flex-col justify-start gap-x-0 gap-y-2 item-center backdrop-blur-[10px] bg-teal-500/70 py-10 px-10 pr-40 border-solid rounded-xl border-teal-300 border-4">
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
            <p className="text-stone-50 text-xs">
              follow us on{" "}
              <strong className="text-[#28E5FF] text-sm">Social Media</strong>
            </p>
          </li>
        </ul>
      </article>
      <article className="w-3/5 h-[18rem] px-5 gap-20 bg-stone-900/20 absolute top-[4rem] right-0 rounded-2xl border-white border-2 backdrop-blur-[5px] flex flex-col justify-around items-end">
        <h1 className=" text-end text-3xl text-stone-50 drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-stone-500">
          Drushti vividoddeshagal shikshan <br /> sewa samsthe
        </h1>
        <div className="text-end">
          <p className={p}>
            <strong className={addCon}>address</strong>- Rajeev Gandhi Nagar
            Gadag 582101
          </p>
          <p className={p}>
            <strong className={addCon}>contact</strong>- 7337820687, 9900220952.
          </p>
        </div>
      </article>
    </menu>
  );
}
