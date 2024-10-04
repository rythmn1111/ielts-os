import React, { useState } from "react";
import WindowStructure from "@/components/window";
import Image from "next/image";

interface TestingAppProps {
  id: number;
}

export default function Something({ id }: TestingAppProps) {
  
  return <>
    {/* <Image src="/report.png" alt="Logo" width={800} height={500} style={{marginLeft:"200px",marginTop:"100px"}} /> */}
    <WindowStructure windowId={id}>
    <div className="spelling">
      <iframe
        src="https://docs.google.com/spreadsheets/d/1nv9XqYPpBlaTMpAYbT9g4VkYAuu6GDDvAOxSMjX7uTs/edit?usp=sharing"
        className="spelling"
        title="Embedded Website"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
    </WindowStructure>
</>
}