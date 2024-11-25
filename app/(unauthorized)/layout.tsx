import Footer from '@/components/unauthorized/footer/Footer.page';
import { Navbar } from '@/components/unauthorized/navbar/navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section >
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
