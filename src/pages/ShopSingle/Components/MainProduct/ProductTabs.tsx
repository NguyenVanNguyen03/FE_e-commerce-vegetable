import React, { useState } from "react";

interface Props {
  description: string;
  additionalInfo: string;
}

const ProductTabs: React.FC<Props> = ({ description, additionalInfo }) => {
  const [tab, setTab] = useState<"desc" | "info">("desc");
  return (
    <div className="mt-8">
      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`px-6 py-2 rounded font-semibold transition ${
            tab === "desc" ? "bg-primary text-white" : "bg-mint text-primary"
          }`}
          onClick={() => setTab("desc")}
        >
          Product Description
        </button>
        <button
          className={`px-6 py-2 rounded font-semibold transition ${
            tab === "info" ? "bg-primary text-white" : "bg-mint text-primary"
          }`}
          onClick={() => setTab("info")}
        >
          Additional Info
        </button>
      </div>
      <div className="text-center text-gray-700 max-w-2xl mx-auto">
        {tab === "desc" ? description : additionalInfo}
      </div>
    </div>
  );
};

export default ProductTabs;
