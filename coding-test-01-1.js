 const dateList = [
    {
      startDate: "2025-11-28",
      endDate: "2025-11-30",
    },
    {
      startDate: "2025-12-02",
      endDate: "2025-12-05",
    },
    {
      startDate: "2025-12-10",
      endDate: "2025-12-12",
    },
];

let date = "2025-12-03";


const dataCheck = (date) => {
    let newDate = new Date(date);

    for(let i of dateList){
        if (newDate >= new Date(i.startDate) && newDate <= new Date(i.endDate)){
            return false;
        }
    }

    return true;
}

console.log(dataCheck(date));