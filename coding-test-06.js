const reservations = [
  { show: "A", seats: 2 },
  { show: "B", seats: 1 },
  { show: "A", seats: 3 },
  { show: "C", seats: 4 },
  { show: "B", seats: 2 },
];


const array = reservations.reduce((acc, cur) => {
    acc[cur.show] = ( acc[cur.show] || 0) + cur.seats;
    return acc;
},{});

console.log(array);