export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        color: "rgba(254, 251, 243, 1)",
        border: "1px solid #fff",
        borderBottom: "none",
      }}
    >
      <span
        style={{
          fontFamily: "Playwrite VN, cursive",
          fontOpticalSizing: "auto",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: 20,
        }}
      >
        MyDashboard.
      </span>
    </header>
  );
}
