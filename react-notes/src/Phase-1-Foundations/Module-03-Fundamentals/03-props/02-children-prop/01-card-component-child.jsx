// Childeren -> built in prop
function Card({children}) {
    console.log("Props",children);
  return (
    <>
      <div
        style={{
          border: "1px solid #b9b0b0",
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
    </>
  );
}
export default Card;
