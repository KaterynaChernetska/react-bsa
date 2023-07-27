export function formatDateToCustomFormat(inputDate:string) {
  const dateObj = new Date(inputDate);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();


  const formattedDate =  `${day < 10 ? "0" : ""}${day}.${
    month < 10 ? "0" : ""
  }${month}.${year}`;
  return formattedDate;
}
