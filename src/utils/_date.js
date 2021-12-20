const getDate = function(value){
  const date = new Date(value * 1000);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month > 10 ? month : '0' + month;
  let day = date.getDate();
  day = day > 10 ? day : '0' + day;
  return year + '-' + month + '-' + day;
};

export { getDate };
