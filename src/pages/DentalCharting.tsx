import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Check } from "lucide-react";

export default function DentalCharting() {
  const [selectedTeeth, setSelectedTeeth] = useState<number[]>([]);

  const toggleTooth = (number: number) => {
    setSelectedTeeth((prev) =>
      prev.includes(number) ? prev.filter((t) => t !== number) : [...prev, number]
    );
  };

  const teeth = Array.from({ length: 32 }, (_, i) => i + 1);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Dental Charting</h1>
        <Button variant="default">Save Chart</Button>
      </div>

      {/* Dental Chart Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Tooth Selection</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-8 gap-3">
            {teeth.map((toothNumber) => {
              const active = selectedTeeth.includes(toothNumber);

              return (
                <button
                  key={toothNumber}
                  onClick={() => toggleTooth(toothNumber)}
                  className={`p-4 rounded-xl border text-sm font-medium transition hover:bg-blue-50
                    ${active ? "bg-blue-600 text-white border-blue-600" : "border-gray-300"}
                  `}
                >
                  {active ? <Check className="mx-auto" /> : toothNumber}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Condition Notes */}
      <Card>
        <CardHeader>
          <CardTitle>Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <textarea
            placeholder="Add charting notes here..."
            className="w-full h-32 border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </CardContent>
      </Card>
    </div>
  );
}
