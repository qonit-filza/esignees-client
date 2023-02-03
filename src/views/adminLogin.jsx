export default function adminRegister() {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          border: "solid",
          borderRadius: 10,
          marginTop: "25vh",
          marginLeft: "25vw",
          marginRight: "25vw",
          padding: 50,
        }}
      >
        <h1 style={{ textAlign: "center" }}>esignees Admin Portal - Login</h1>
        <form style={{ padding: 25, display: "flex", flexDirection: "column" }}>
          <p>Email:</p>
          <input
            type="email"
            placeholder="user@mail.com"
            style={{
              border: "solid",
              borderRadius: 5,
              borderColor: "black",
              paddingLeft: 10,
              width: "100%",
              height: 35,
            }}
          />
          <p>Password:</p>
          <input
            type="password"
            placeholder="Password"
            style={{
              border: "solid",
              borderRadius: 5,
              borderColor: "black",
              paddingLeft: 10,
              width: "100%",
              height: 35,
            }}
          />
          <br />
          <br />
          <button
            type="submit"
            style={{
              alignSelf: "center",
              border: "solid",
              borderColor: "white",
              borderRadius: 7,
              width: "20%",
              height: 35,
              backgroundColor: "red",
              color: "white",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
