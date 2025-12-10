const reservations = [
  { user: "A", seat: 1 },
  { user: "B", seat: 3 },
  { user: "A", seat: 5 },
  { user: "C", seat: 2 },
  { user: "A", seat: 7 },
];

console.log(reservations.filter((v) => v.user === "A").map(item => item.seat).sort((a,b) => a-b));