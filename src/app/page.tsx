import Filter from "@/components/Common/Filter";
import Indent from "@/components/Common/Indent";
import MapContainer from "@/components/Common/MapContainer";
import Table from "@/components/Common/Table";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <Indent>
        <Filter />
        <MapContainer />
        <Table />
      </Indent>
    </main>
  );
}
