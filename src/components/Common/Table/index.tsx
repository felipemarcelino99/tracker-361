"use client";
import { useVehicles } from "@/contexts/VehicleContext";
import { VehicleStatus, VehicleTypes } from "@/enums";

const VehicleStatusLabel: Record<VehicleStatus, string> = {
  [VehicleStatus.ACTIVE]: "Disponível",
  [VehicleStatus.INACTIVE]: "Indisponível",
  [VehicleStatus.MAINTENANCE]: "Em manutenção",
  [VehicleStatus.DISCONNECTED]: "Desconectado",
};

const VehicleTypesLabel: Record<VehicleTypes, string> = {
  [VehicleTypes.IMPLEMENT]: "Implemento",
  [VehicleTypes.VEHICLE]: "Motor",
};

export default function Table() {
  const { vehicles, observerRef, isLoading } = useVehicles();

  return (
    <section className="pb-10 overflow-x-scroll md:overflow-x-hidden">
      <table className="table-content">
        <thead>
          <tr>
            <th className="table-header">Placa</th>
            <th className="table-header">Frota</th>
            <th className="table-header">Tipo</th>
            <th className="table-header">Modelo</th>
            <th className="table-header">Status</th>
          </tr>
        </thead>

        {vehicles && (
          <tbody>
            {vehicles.map((v, index) => (
              <tr
                key={v.id}
                ref={index === vehicles.length - 1 ? observerRef : null}
              >
                <td className="table-text">{v.plate}</td>
                <td className="table-text">{v.fleet ?? "-"}</td>
                <td className="table-text">
                  {VehicleTypesLabel[v.type] ?? "-"}
                </td>
                <td className="table-text">{v.model ?? "-"}</td>
                <td className="table-text">{VehicleStatusLabel[v.status]}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {!vehicles && (
        <div className=" flex items-center justify-center py-6">
          <p className="text-white font-light text-lg">
            Registros não encontrados
          </p>
        </div>
      )}

      {isLoading && (
        <div className=" flex items-center justify-center py-6">
          <p className="text-white font-light text-lg">Carregando...</p>
        </div>
      )}
    </section>
  );
}
