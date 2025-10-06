import '@app/globals.css';
export const metadata = {
  title: 'mini-site',
  description: 'A simple, modern and animated site',
};

export default function RootLayout({ children: children }: { children: any }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
