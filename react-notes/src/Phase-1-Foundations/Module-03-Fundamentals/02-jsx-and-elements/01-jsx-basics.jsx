function JsxBasics(){
    const fname = "John Doe";
    const year = 2026;
    const isActive = false;
    const skills = ["React", "Node", "Angular", "MongoDb"];
    const styles = { width:150, height:150, background:"red", margin:10, borderRadius:10}
    const WelcomeUser = (guest) => `Hi ${guest}`

 return <div>
    <h1>Name :{fname}</h1>
    <p>
        Joined in {year}, retired in {year + 30} 
    </p>

    <p>Status : {isActive ? "Active" : "Not Active"}</p>
    <p>Status : {isActive && `Welcome ${fname}`}</p>

    <ul>
        {skills.map((skill)=> 
            <li key={skill}>{skill}</li>)}
    </ul>

    {/* For display purpose  */}
    <div>{JSON.stringify(styles)}</div>  

    <div style={styles}></div>

    <div>{WelcomeUser("John")}</div>
 </div>
}
export default JsxBasics