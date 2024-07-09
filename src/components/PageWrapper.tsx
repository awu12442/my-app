// components/PageWrapper.tsx

import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => (
  <>
    <Navbar />
    <div className="container mx-auto px-4 max-w-6xl">
      {children}
    </div>
  </>
);

export default PageWrapper;
