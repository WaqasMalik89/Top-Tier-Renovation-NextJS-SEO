export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        color: "#333",
        textAlign: "center",
      }}
    >
      <h1>410 Gone</h1>
      <p>This site has been permanently removed.</p>
      <p>
        Visit the official site:{" "}
        <a
          href="https://www.canvasbuilds.ca/"
          style={{ color: "#0070f3", textDecoration: "underline" }}
        >
          canvasbuilds.ca
        </a>
      </p>
    </main>
  );
}
