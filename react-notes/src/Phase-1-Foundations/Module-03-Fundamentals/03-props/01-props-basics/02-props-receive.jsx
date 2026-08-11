export function UserCardProps(props) {
  console.log("Props", props);
  return (
    <>
      <div
        style={{
          border: "1px solid #b9b0b0",
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
          width: "50vw",
        }}
      >
        <h2>Props using props keyword</h2>
        <h3>Name : {props.name}</h3>
        <p>Status : {props.isActive ? "Active" : "Not Active"}</p>
      </div>
    </>
  );
}

export function UserCardDestructured({ name, isActive }) {
  return (
    <>
      <div
        style={{
          border: "1px solid #b9b0b0",
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
          width: "50vw",
        }}
      >
        <h2>Props using props destrectured</h2>
        <h3>Name : {name}</h3>
        <p>Status : {isActive ? "Active" : "Not Active"}</p>
      </div>
    </>
  );
}
