import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen mx-auto">
      <div className="p-5">
        <Sidebar />
        <Feed />
      </div>
    </main>
  );
}
