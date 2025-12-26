import Nav from "@/components/Nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col-reverse md:flex-row h-full">
      <Nav />
      {children}
    </div>
  );
}
