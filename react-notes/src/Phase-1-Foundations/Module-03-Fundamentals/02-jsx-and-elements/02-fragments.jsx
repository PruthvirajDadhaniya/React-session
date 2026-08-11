// Fragments => grouping of siblings without an extra dom node

// import { Fragment } from "react";
import React from "react";

// function FragmentVarient1() {
//   return (
//     <>
//       <div>Hi</div>
//       <div>Hello</div>
//     </>
//   );
// }

// function FragmentVarient2() {
//   return (
//     <Fragment>
//       <div>React</div>
//       <div>Angular</div>
//     </Fragment>
//   );
// }

function FragmentVarient3() {
  return (
    <React.Fragment>
      <div>React</div>
      <div>Angular</div>
    </React.Fragment>
  );
}


function FragmentsComp() {
  const books = [
    { id: 1, book: "Harry Potter", author: "JK.Rowling" },
    { id: 2, book: "The Lord of the Rings", author: "J.R.R.Tolkien" },
  ];

  return (
    <>
      {/* <FragmentVarient1 />
      <FragmentVarient2 /> */}
      <FragmentVarient3/>

      <dl>
        {books.map((item) => (
          <React.Fragment key={item.id}>
            <dt>Book : {item.book} Author : {item.author}</dt>
          </React.Fragment>
        ))}
      </dl>
    </>
  );
}
export default FragmentsComp;
