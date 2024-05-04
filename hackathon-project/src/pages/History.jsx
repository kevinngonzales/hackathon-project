import React from "react";

function History() {
  return (
    <>
    <h1 class='flex justify-center p-8'>History</h1>
      <div class="h-80 flex justify-center content-center">
        <button class="p-7 m-7 border-black border-2 "> prompt 1 </button>
        <button class="p-7 m-7 border-black border-2 "> prompt 2 </button>
        <button class="p-7 m-7 border-black border-2 "> prompt 3 </button>
      </div>

      <div class="flex justify-center p-14 h-80  border-black border-2">
        <span class="content-center">Curated Results Displayed Here</span>
      </div>
    </>
  );
}

export default History;
