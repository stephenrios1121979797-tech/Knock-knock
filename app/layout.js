export const metadata = {
  title: "Knock Knock",
  description: "Door-to-door roofing sales tracking app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont"
        }}
      >
        {children}
      </body>
    </html>
  );
}
