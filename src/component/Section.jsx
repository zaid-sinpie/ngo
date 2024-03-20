export default function Section({ children }) {
  return (
    <section className="flex flex-col justify-around  items-center h-screen w-screen overflow-x-hidden relative">
      {children}
      {/* <img src="./src/assets/design1.png" alt="" className="fixed -top-40 w-2/5 -left-40 select-none pointer-events-none	"></img>
      <img src="./src/assets/design2.png" alt="" className="fixed -top-30 w-3/5 -right-60 select-none pointer-events-none	"></img> */}
    </section>
  );
}
