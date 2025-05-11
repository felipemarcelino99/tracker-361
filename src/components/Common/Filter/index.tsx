"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "../Button";
import Input from "../Input";
import InputRadio from "../InputRadio";
import Title from "../Title";
import { useVehicles } from "@/contexts/VehicleContext";

const filterSchema = z.object({
  type: z.enum(["tracked", "others"]).optional(),
  filter: z.string().optional(),
});

export default function Filter() {
  const { setFilter, setType } = useVehicles();

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(filterSchema),
  });

  type FilterFormData = z.infer<typeof filterSchema>;

  const onSubmit = (data: FilterFormData) => {
    if (data.filter) {
      setFilter(data.filter);
    }
    if (data.type) {
      setType(data.type);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex items-center w-full max-w-full py-5 border-b border-[#002D44]">
        <div className="flex items-center justify-center md:justify-between gap-5 w-full max-w-full flex-wrap">
          <div>
            <Title label="List" variant="semibold" size="md" tag="h2" />
          </div>
          <fieldset className="flex items-center gap-3.5">
            <InputRadio
              id="rastreadores"
              label="Rastreadores"
              value="tracked"
              {...register("type")}
            />
            <InputRadio
              id="outros"
              label="Outros"
              value="others"
              {...register("type")}
            />
          </fieldset>
          <fieldset className="flex items-center gap-4 max-w-[450px] w-full justify-center flex-wrap md:flex-nowrap">
            <Input
              id="filter"
              placeholder="Buscar por placa ou frota"
              {...register("filter")}
            />
            <Button label="Novo" type="submit" />
          </fieldset>
        </div>
      </div>
    </form>
  );
}
