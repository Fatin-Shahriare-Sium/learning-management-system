"use client";
const DashboardHomePage = () => {
  //http://localhost:1337/api/users?filters[documentId][$eq]=acmt0qrha20liniicv3obpjy
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div
      style={{
        backgroundColor: "var(--back-color)",
        color: "white",
        display: "flex",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "4rem", fontWeight: "700" }}>Welcome to the Dashboard</h1>
      <p style={{ fontSize: "3rem", fontWeight: "500" }}>👋 Hi, {userInfo.username}</p>
    </div>
  );
};

export default DashboardHomePage;
