function summarizeBoxes(boxes) {
  if (!boxes.length) return null;
  const totalBoxes = boxes.length;
  const totalCapacity = boxes.reduce((sum, b) => sum + b.capacity, 0);
  const avgBattery = Math.round(boxes.reduce((sum, b) => sum + b.batteryLevel, 0) / totalBoxes);
  const lastDrop = boxes.reduce((latest, b) => new Date(b.lastDrop) > new Date(latest) ? b.lastDrop : latest, boxes[0].lastDrop);
  const lastPickup = boxes.reduce((latest, b) => new Date(b.lastPickup) > new Date(latest) ? b.lastPickup : latest, boxes[0].lastPickup);
  return { totalBoxes, totalCapacity, avgBattery, lastDrop, lastPickup };
}

export async function getDropBoxesWithSummary(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      let detailedBoxes = [];
      let summaries = [];

      if (user.role === "Senior Manager") {
        detailedBoxes = dropBoxes;
        // Summaries per region
        const regions = [...new Set(dropBoxes.map(b => b.region))];
        summaries = regions.map(r => summarizeBoxes(dropBoxes.filter(b => b.region === r)));
      }
      else if (user.role === "Regional Manager") {
        detailedBoxes = dropBoxes.filter(b => b.region === user.region);
        // Summary for other regions
        const otherRegions = [...new Set(dropBoxes.map(b => b.region))].filter(r => r !== user.region);
        summaries = otherRegions.map(r => summarizeBoxes(dropBoxes.filter(b => b.region === r)));
      }
      else if (user.role === "District Manager") {
        detailedBoxes = dropBoxes.filter(b => b.district === user.district);
        // Summary for other districts in the same region
        const region = dropBoxes.find(b => b.district === user.district).region;
        const otherDistricts = [...new Set(dropBoxes.filter(b => b.region === region).map(b => b.district))]
                              .filter(d => d !== user.district);
        summaries = otherDistricts.map(d => summarizeBoxes(dropBoxes.filter(b => b.district === d)));
      }
      else if (user.role === "Location Manager") {
        detailedBoxes = dropBoxes.filter(b => b.district === user.district);
        // Summary for the district
        summaries = [summarizeBoxes(detailedBoxes)];
      }

      resolve({ detailedBoxes, summaries });
    }, 300);
  });
}
