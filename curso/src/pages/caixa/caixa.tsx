import Caixa1 from "@/components/caixa/Caixa";
import Circulo from "@/components/caixa/Circulo";
import React from "react";

const Caixa = () => {
  return (
    <>
      <div className=" flex gap-5 p-6 cursor-pointer items-center flex-row bg-slate-200 justify-around " >
        <Caixa1>
          <li>
            <ul className=" flex flex-col p-2 gap-3 ">
              <a href="https://hipsters.jobs/jobs/?&p=1&s=291.20001220703125">link do site</a>
              <a href="https://hipsters.jobs/jobs/?&p=1&s=291.20001220703125">link do site</a>
              <a href="https://hipsters.jobs/jobs/?&p=1&s=291.20001220703125">link do site</a>
            </ul>
          </li>
        </Caixa1>
        <Circulo texto="dentro do circulo" />
      </div>
    </>
  );
};

export default Caixa;
