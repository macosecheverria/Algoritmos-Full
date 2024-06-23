const filter_list = (list) => {

   const getNumbersOfList =  list.filter(el => typeof el === "number");

   return getNumbersOfList;

}

console.log(filter_list([1,"hola", "marcos", 2, 3, true, false]));