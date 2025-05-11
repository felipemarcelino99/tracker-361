import Indent from "@/components/Common/Indent";
import Title from "@/components/Common/Title";
import React from "react";

export default function Header() {
  return (
    <header className="bg-[#001E2E] py-4">
      <Indent>
        <Title label="Felipe Marcelino do Nascimento" />
      </Indent>
    </header>
  );
}
