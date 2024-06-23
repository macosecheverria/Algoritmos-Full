const filterList  = (list: any[]):number[] => {
  const getNumbersList = list.filter(el => typeof el === "number");

  return getNumbersList;
}

console.log(filterList([1,"marcos", true, 2, "juan", false, "juana", 3]));