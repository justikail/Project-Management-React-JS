export default function Footer() {
  return (
    <footer style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "white", fontSize: 10, paddingBlock: 0, marginBlock: 15, gap: 3 }}>
      <span>&copy;opyright 2024</span>
      <span style={{ display: "flex", gap: 3 }}>
        Created By
        <a href="//github.com/justikail" style={{ color: "white" }}>
          Justikail
        </a>
      </span>
    </footer>
  );
}
