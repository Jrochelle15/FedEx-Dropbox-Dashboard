// src/services/dropbox.js

export const dropBoxes = [
  // NORTHERN REGION (14 boxes)
  { id: 1, region: "Northern", district: "Ridgewood", locationAddress: "115 Ridgecrest Dr, Ridgewood, Northville, NY 10001", MaxMaxCapacity: 40, capacity: 14, lastPickup: "2025-11-18T17:15:00", lastDrop: "2025-11-18T17:16:00", batteryLevel: 94 },
  { id: 2, region: "Northern", district: "Ridgewood", locationAddress: "693 Brookside Ln, Ridgewood, Northville, NY 10012", MaxCapacity: 40, capacity: 11, lastPickup: "2025-11-18T15:37:00", lastDrop: "2025-11-18T15:38:00", batteryLevel: 3 },
  { id: 3, region: "Northern", district: "Ridgewood", locationAddress: "224 Brookside Ln, Ridgewood, Northville, NY 10004", MaxCapacity: 40, capacity: 32, lastPickup: "2025-11-18T15:35:00", lastDrop: "2025-11-18T15:36:00", batteryLevel: 83 },
  { id: 4, region: "Northern", district: "Ridgewood", locationAddress: "559 Ridgecrest Dr, Ridgewood, Northville, NY 10007", MaxCapacity: 40, capacity: 18, lastPickup: "2025-11-18T16:28:00", lastDrop: "2025-11-18T16:29:00", batteryLevel: 0 },
  { id: 5, region: "Northern", district: "Northpoint", locationAddress: "715 Cedar St, Northpoint, Northville, NY 10007", MaxCapacity: 40, capacity: 16, lastPickup: "2025-11-18T17:17:00", lastDrop: "2025-11-18T17:18:00", batteryLevel: 97 },
  { id: 6, region: "Northern", district: "Northpoint", locationAddress: "105 Highland Way, Northpoint, Northville, NY 10002", MaxCapacity: 40, capacity: 37, lastPickup: "2025-11-18T18:06:00", lastDrop: "2025-11-18T18:07:00", batteryLevel: 44 },
  { id: 7, region: "Northern", district: "Northpoint", locationAddress: "271 Northgate Blvd, Northpoint, Northville, NY 10013", MaxCapacity: 40, capacity: 27, lastPickup: "2025-11-18T15:46:00", lastDrop: "2025-11-18T15:47:00", batteryLevel: 15 },
  { id: 8, region: "Northern", district: "Maple Heights", locationAddress: "81 Northgate Blvd, Maple Heights, Northville, NY 10009", MaxCapacity: 40, capacity: 29, lastPickup: "2025-11-18T17:53:00", lastDrop: "2025-11-18T17:54:00", batteryLevel: 46 },
  { id: 9, region: "Northern", district: "Maple Heights", locationAddress: "197 Ridgecrest Dr, Maple Heights, Northville, NY 10012", MaxCapacity: 40, capacity: 17, lastPickup: "2025-11-18T15:02:00", lastDrop: "2025-11-18T15:03:00", batteryLevel: 98 },
  { id: 10, region: "Northern", district: "Brookstone", locationAddress: "82 Highland Way, Brookstone, Northville, NY 10014", MaxCapacity: 40, capacity: 22, lastPickup: "2025-11-18T16:55:00", lastDrop: "2025-11-18T16:56:00", batteryLevel: 35 },
  { id: 11, region: "Northern", district: "Brookstone", locationAddress: "651 Ridgecrest Dr, Brookstone, Northville, NY 10014", MaxCapacity: 40, capacity: 21, lastPickup: "2025-11-18T17:10:00", lastDrop: "2025-11-18T17:11:00", batteryLevel: 26 },
  { id: 12, region: "Northern", district: "Lakecrest", locationAddress: "274 Wellington Rd, Lakecrest, Northville, NY 10012", MaxCapacity: 40, capacity: 15, lastPickup: "2025-11-18T15:38:00", lastDrop: "2025-11-18T15:39:00", batteryLevel: 68 },
  { id: 13, region: "Northern", district: "Highland Park", locationAddress: "251 Highland Way, Highland Park, Northville, NY 10003", MaxCapacity: 40, capacity: 39, lastPickup: "2025-11-18T18:24:00", lastDrop: "2025-11-18T18:25:00", batteryLevel: 81 },
  { id: 14, region: "Northern", district: "Cedar Grove", locationAddress: "702 Highland Way, Cedar Grove, Northville, NY 10006", MaxCapacity: 40, capacity: 11, lastPickup: "2025-11-18T15:14:00", lastDrop: "2025-11-18T15:15:00", batteryLevel: 40 },

  // SOUTHERN REGION (10 boxes)
  { id: 15, region: "Southern", district: "Broadmoor", locationAddress: "275 Palmview St, Broadmoor, Southport, TX 75002", MaxCapacity: 40, capacity: 38, lastPickup: "2025-11-18T16:58:00", lastDrop: "2025-11-18T16:59:00", batteryLevel: 91 },
  { id: 16, region: "Southern", district: "Broadmoor", locationAddress: "218 Mesa Hills Dr, Broadmoor, Southport, TX 75008", MaxCapacity: 40, capacity: 30, lastPickup: "2025-11-18T18:56:00", lastDrop: "2025-11-18T18:57:00", batteryLevel: 58 },
  { id: 17, region: "Southern", district: "Broadmoor", locationAddress: "272 Horizon Blvd, Broadmoor, Southport, TX 75003", MaxCapacity: 40, capacity: 27, lastPickup: "2025-11-18T16:47:00", lastDrop: "2025-11-18T16:48:00", batteryLevel: 33 },
  { id: 18, region: "Southern", district: "Broadmoor", locationAddress: "599 Sunset Crossing Ave, Broadmoor, Southport, TX 75007", MaxCapacity: 40, capacity: 14, lastPickup: "2025-11-18T18:23:00", lastDrop: "2025-11-18T18:24:00", batteryLevel: 65 },
  { id: 19, region: "Southern", district: "Southpark", locationAddress: "94 Southpark Pkwy, Southpark, Southport, TX 75001", MaxCapacity: 40, capacity: 15, lastPickup: "2025-11-18T15:09:00", lastDrop: "2025-11-18T15:10:00", batteryLevel: 87 },
  { id: 20, region: "Southern", district: "Southpark", locationAddress: "611 Southpark Pkwy, Southpark, Southport, TX 75002", MaxCapacity: 40, capacity: 24, lastPickup: "2025-11-18T18:24:00", lastDrop: "2025-11-18T18:25:00", batteryLevel: 67 },
  { id: 21, region: "Southern", district: "Mesa Hills", locationAddress: "995 Mesa Hills Dr, Mesa Hills, Southport, TX 75009", MaxCapacity: 40, capacity: 13, lastPickup: "2025-11-18T15:43:00", lastDrop: "2025-11-18T15:44:00", batteryLevel: 87 },
  { id: 22, region: "Southern", district: "Mesa Hills", locationAddress: "788 Mesa Hills Dr, Mesa Hills, Southport, TX 75006", MaxCapacity: 40, capacity: 15, lastPickup: "2025-11-18T15:18:00", lastDrop: "2025-11-18T15:19:00", batteryLevel: 58 },
  { id: 23, region: "Southern", district: "Canyon Terrace", locationAddress: "977 Canyon Terrace Rd, Canyon Terrace, Southport, TX 75005", MaxCapacity: 40, capacity: 13, lastPickup: "2025-11-18T16:32:00", lastDrop: "2025-11-18T16:33:00", batteryLevel: 80 },
  { id: 24, region: "Southern", district: "Sunset Crossing", locationAddress: "862 Sunset Crossing Ave, Sunset Crossing, Southport, TX 75009", MaxCapacity: 40, capacity: 34, lastPickup: "2025-11-18T16:09:00", lastDrop: "2025-11-18T16:10:00", batteryLevel: 20 },

  // WESTERN REGION (10 boxes)
  { id: 25, region: "Western", district: "Stonebridge", locationAddress: "977 Riverbend Rd, Stonebridge, Westford, CA 90009", MaxCapacity: 40, capacity: 25, lastPickup: "2025-11-18T15:38:00", lastDrop: "2025-11-18T15:39:00", batteryLevel: 2 },
  { id: 26, region: "Western", district: "Stonebridge", locationAddress: "952 Canyon Crest Rd, Stonebridge, Westford, CA 90006", MaxCapacity: 40, capacity: 17, lastPickup: "2025-11-18T17:15:00", lastDrop: "2025-11-18T17:16:00", batteryLevel: 72 },
  { id: 27, region: "Western", district: "Stonebridge", locationAddress: "88 Canyon Crest Rd, Stonebridge, Westford, CA 90008", MaxCapacity: 40, capacity: 34, lastPickup: "2025-11-18T15:48:00", lastDrop: "2025-11-18T15:49:00", batteryLevel: 16 },
  { id: 28, region: "Western", district: "Riverbend", locationAddress: "676 Pine Hollow Way, Riverbend, Westford, CA 90008", MaxCapacity: 40, capacity: 37, lastPickup: "2025-11-18T16:16:00", lastDrop: "2025-11-18T16:17:00", batteryLevel: 77 },
  { id: 29, region: "Western", district: "Riverbend", locationAddress: "988 Riverbend Rd, Riverbend, Westford, CA 90004", MaxCapacity: 40, capacity: 22, lastPickup: "2025-11-18T16:45:00", lastDrop: "2025-11-18T16:46:00", batteryLevel: 85 },
  { id: 30, region: "Western", district: "Oak Valley", locationAddress: "449 Riverbend Rd, Oak Valley, Westford, CA 90009", MaxCapacity: 40, capacity: 17, lastPickup: "2025-11-18T18:07:00", lastDrop: "2025-11-18T18:08:00", batteryLevel: 8 },
  { id: 31, region: "Western", district: "Oak Valley", locationAddress: "22 Riverbend Rd, Oak Valley, Westford, CA 90010", MaxCapacity: 40, capacity: 10, lastPickup: "2025-11-18T16:37:00", lastDrop: "2025-11-18T16:38:00", batteryLevel: 9 },
  { id: 32, region: "Western", district: "Redstone", locationAddress: "235 Oak Valley Blvd, Redstone, Westford, CA 90002", MaxCapacity: 40, capacity: 12, lastPickup: "2025-11-18T15:55:00", lastDrop: "2025-11-18T15:56:00", batteryLevel: 65 },
  { id: 33, region: "Western", district: "Pine Hollow", locationAddress: "286 Canyon Crest Rd, Pine Hollow, Westford, CA 90008", MaxCapacity: 40, capacity: 33, lastPickup: "2025-11-18T16:34:00", lastDrop: "2025-11-18T16:35:00", batteryLevel: 73 },
  { id: 34, region: "Western", district: "Canyon Crest", locationAddress: "249 Silverleaf Ln, Canyon Crest, Westford, CA 90008", MaxCapacity: 40, capacity: 13, lastPickup: "2025-11-18T18:12:00", lastDrop: "2025-11-18T18:13:00", batteryLevel: 84 },

  // EASTERN REGION (6 boxes)
  { id: 35, region: "Eastern", district: "Bluewater", locationAddress: "363 Lighthouse Rd, Bluewater, Eastbay, FL 32004", MaxCapacity: 40, capacity: 33, lastPickup: "2025-11-18T18:29:00", lastDrop: "2025-11-18T18:30:00", batteryLevel: 6 },
  { id: 36, region: "Eastern", district: "Bluewater", locationAddress: "670 Pierpoint Dr, Bluewater, Eastbay, FL 32006", MaxCapacity: 40, capacity: 33, lastPickup: "2025-11-18T15:03:00", lastDrop: "2025-11-18T15:04:00", batteryLevel: 43 },
  { id: 37, region: "Eastern", district: "Bluewater", locationAddress: "883 Seaview Blvd, Bluewater, Eastbay, FL 32001", MaxCapacity: 40, capacity: 27, lastPickup: "2025-11-18T16:12:00", lastDrop: "2025-11-18T16:13:00", batteryLevel: 57 },
  { id: 38, region: "Eastern", district: "Sapphire", locationAddress: "433 Bluewater Rd, Sapphire, Eastbay, FL 32002", MaxCapacity: 40, capacity: 37, lastPickup: "2025-11-18T17:29:00", lastDrop: "2025-11-18T17:30:00", batteryLevel: 9 },
  { id: 39, region: "Eastern", district: "Sapphire", locationAddress: "828 Harbor Lane, Sapphire, Eastbay, FL 32005", MaxCapacity: 40, capacity: 27, lastPickup: "2025-11-18T15:03:00", lastDrop: "2025-11-18T15:04:00", batteryLevel: 1 },
  { id: 40, region: "Eastern", district: "Coralview Bay", locationAddress: "949 Bluewater Rd, Coralview Bay, Eastbay, FL 32002", MaxCapacity: 40, capacity: 25, lastPickup: "2025-11-18T16:26:00", lastDrop: "2025-11-18T16:27:00", batteryLevel: 27 }
];

export async function getDropBoxes(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      // Senior Manager sees all
      if (user.role === "Senior Manager") return resolve(dropBoxes);

      // Regional Manager sees all boxes in their region
      if (user.role === "Regional Manager") {
        resolve(dropBoxes.filter(db => db.region === user.region));
        return;
      }

      // District Manager sees all boxes in their district
      if (user.role === "District Manager") {
        resolve(dropBoxes.filter(db => db.district === user.district));
        return;
      }

      // Location Manager sees boxes in their district
      if (user.role === "Location Manager") {
        resolve(dropBoxes.filter(db => db.district === user.district));
        return;
      }

      resolve([]);
    }, 300);
  });
}
