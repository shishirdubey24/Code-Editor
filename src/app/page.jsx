
import EditarPannel from "./root/Components/EditarPannel";
import OutputPannel from "./root/Components/OutputPannel";
import Header from "./root/Components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditarPannel />
          <OutputPannel />
        </div>
      </div>
    </div>
  );
}
