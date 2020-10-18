export default function getFormattedDate(datetoformat) {
  var date = new Date(datetoformat);
  var aaaa = date.getFullYear();
  var gg = date.getDate();
  var mm = date.getMonth() + 1;

  if (gg < 10) gg = '0' + gg;

  if (mm < 10) mm = '0' + mm;

  var cur_day = aaaa + '-' + mm + '-' + gg;

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (hours < 10) hours = '0' + hours;

  if (minutes < 10) minutes = '0' + minutes;

  if (seconds < 10) seconds = '0' + seconds;

  return cur_day + ' ' + hours + ':' + minutes + ':' + seconds;
}
// "2017-10-17 14:02:33"
// export default getFormattedDate();
