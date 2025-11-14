import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Check } from "lucide-react";

export default function DentalCharting() {
  const [selectedTeeth, setSelectedTeeth] = useState<number[]>([]);
  const [hoveredTooth, setHoveredTooth] = useState<number | null>(null);

  const toggleTooth = (number: number) => {
    setSelectedTeeth((prev) =>
      prev.includes(number)
        ? prev.filter((t) => t !== number)
        : [...prev, number]
    );
  };

  const teeth = Array.from({ length: 32 }, (_, i) => i + 1);

  const toothLabels: Record<number, string> = {
    1: "Upper Right Wisdom",
    2: "Upper Right Molar",
    3: "Upper Right Molar",
    4: "Upper Right Premolar",
    5: "Upper Right Premolar",
    6: "Upper Right Canine",
    7: "Upper Right Lateral Incisor",
    8: "Upper Right Central Incisor",
    9: "Upper Left Central Incisor",
    10: "Upper Left Lateral Incisor",
    11: "Upper Left Canine",
    12: "Upper Left Premolar",
    13: "Upper Left Premolar",
    14: "Upper Left Molar",
    15: "Upper Left Molar",
    16: "Upper Left Wisdom",
    17: "Lower Left Wisdom",
    18: "Lower Left Molar",
    19: "Lower Left Molar",
    20: "Lower Left Premolar",
    21: "Lower Left Premolar",
    22: "Lower Left Canine",
    23: "Lower Left Lateral Incisor",
    24: "Lower Left Central Incisor",
    25: "Lower Right Central Incisor",
    26: "Lower Right Lateral Incisor",
    27: "Lower Right Canine",
    28: "Lower Right Premolar",
    29: "Lower Right Premolar",
    30: "Lower Right Molar",
    31: "Lower Right Molar",
    32: "Lower Right Wisdom",
  };

  return (
    <div className="space-y-12 pb-20">

      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          Dental Charting
        </h1>

        <Button className="px-7 py-3 text-lg shadow-md hover:scale-[1.03] transition">
          Save Chart
        </Button>
      </div>

      {/* 3D Hero Section */}
      <Card className="border-none shadow-xl rounded-3xl bg-white/60 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">
            3D Dental Anatomy Overview
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Explore the full dental structure for easy mapping and charting. Click any tooth
            below to mark findings, add notes, or highlight dental conditions.
          </p>
        </CardHeader>

        <CardContent className="flex justify-center p-8">
          <img
            src="/your-3d-teeth.png"
            alt="teeth set"
            className="w-full max-w-2xl rounded-2xl shadow-lg hover:scale-[1.02] transition duration-300"
          />
        </CardContent>
      </Card>

      {/* Tooth Selection */}
      <Card className="border-none shadow-xl rounded-3xl">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">Tooth Selection</CardTitle>
          <p className="text-gray-600">
            Choose the teeth that require diagnosis, treatment, or detailed notes. 
            Hover to see the anatomical name of each tooth.
          </p>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-8 gap-4">
            {teeth.map((toothNumber) => {
              const active = selectedTeeth.includes(toothNumber);
              const isHovered = hoveredTooth === toothNumber;

              return (
                <div key={toothNumber} className="relative">
                  <button
                    onClick={() => toggleTooth(toothNumber)}
                    onMouseEnter={() => setHoveredTooth(toothNumber)}
                    onMouseLeave={() => setHoveredTooth(null)}
                    className={`p-4 rounded-xl border text-sm font-medium transition-all 
                      flex items-center justify-center shadow-md
                      hover:bg-blue-50 hover:shadow-xl hover:scale-[1.05]
                      ${
                        active
                          ? "bg-blue-600 text-white border-blue-600 shadow-xl scale-105"
                          : "border-gray-300 bg-white"
                      }
                    `}
                  >
                    {active ? <Check className="w-5 h-5" /> : toothNumber}
                  </button>

                  {/* Tooltip */}
                  {isHovered && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-md shadow-lg whitespace-nowrap">
                      {toothLabels[toothNumber]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Notes Section */}
      <Card className="border-none shadow-xl rounded-3xl">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">Clinical Notes</CardTitle>
          <p className="text-gray-600">
            Add observations, diagnosis details, or treatment notes related to the selected teeth.
          </p>
        </CardHeader>

        <CardContent>
          <textarea
            placeholder="Write your dental notes here..."
            className="w-full h-48 border rounded-xl p-4 text-gray-700
                       focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
          />
        </CardContent>
      </Card>
    </div>
  );
}
