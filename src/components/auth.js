// src/services/auth.js

const users = [
  {
    username: "senior",
    password: "password123",
    role: "Senior Manager",
    region: null,
    district: null
  },
  {
    username: "regional1",
    password: "password123",
    role: "Regional Manager",
    region: "Northern",
    district: null
  },
  {
    username: "district1",
    password: "password123",
    role: "District Manager",
    region: "Northern",
    district: "Ridgewood"
  },
  {
    username: "location1",
    password: "password123",
    role: "Location Manager",
    region: "Northern",
    district: "Ridgewood"
  }
];

export async function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        u => u.username === username && u.password === password
      );
      if (user) resolve({ ...user, token: "fake-jwt-token" });
      else reject("Invalid credentials");
    }, 300); // simulate network delay
  });
}
