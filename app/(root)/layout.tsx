import Donations from "@/components/Donations";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import TestComponent from "@/components/TestComponent";
import TopNavbar from "@/components/TopNavbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <main className="min-h-screen">
            <TopNavbar />
            <Navbar />
            {/* <Donations /> */}
            {/* <TestComponent /> */}
            <div className="flex p-8 gap-4 bg-hero-image bg-cover">
              <LeftSidebar />
              <section className="flex-1 flex-col">
                <Searchbar/>
                {children}
              </section>
            </div>
            
            
            {/* Footer */}
        </main>
    </div>
  );
}
