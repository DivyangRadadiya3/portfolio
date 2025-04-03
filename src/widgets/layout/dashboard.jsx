import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Navbar,
} from "@/widgets/layout";
import { Footer } from "@/widgets/layout";
import { useEffect } from 'react';
import { Home, About, Contact, Project } from '@/pages';

export function Dashboard() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen w-full bg-blue-gray-50" >

      <Navbar />
      <div className="overflow-none">
        <Home data-aos="fade-down" data-aos-duration="1000" />

        <About data-aos="fade-down" data-aos-duration="1000" />
        <hr className="mx-6 border-t border-teal-400 my-4" />

        <Project data-aos="fade-up" data-aos-duration="1000" />
        <hr className="mx-6 border-t border-teal-400 my-4" />

        <Contact data-aos="fade-down" data-aos-duration="1000" />

      </div>
      <hr className=" border-t border-gray-800 dark:border-gray-700" />
      <div className="text-blue-gray-600" >
        <Footer />
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/widgets/layout/dashboard.jsx";
export default Dashboard; 