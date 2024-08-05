import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <main className="relative mx-2 my-3 mr-2 flex-1 overflow-hidden rounded-xl  bg-background focus:outline-none md:mx-0 md:my-4 md:mr-4 ">
      {children}
    </main>
  );
}
