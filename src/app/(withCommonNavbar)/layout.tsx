import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
// import dynamic from "next/dynamic";

// const Navbar = dynamic(() => import("@/components/shared/Navbar/Navbar"), {
//   ssr: false,
// });

const CommonLayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen"> {children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayoutPage;
