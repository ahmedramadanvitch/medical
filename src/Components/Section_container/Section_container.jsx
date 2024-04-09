/* eslint-disable react/prop-types */
function Section_container({ children, cssClassProps }) {
  return (
    <section className={`text-gray-400 body-font  ${cssClassProps}`}>
      <div className="container px-4 sm:px-3 md:px-5 py-4 mx-auto">
        {children}
      </div>
    </section>
  );
}

export default Section_container;
