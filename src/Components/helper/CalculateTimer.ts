function calculateTimer(timeInSeconds: number): Array<number | string> {
  const hour: number = Math.floor(timeInSeconds / 3600);
  const minute: number = Math.floor((timeInSeconds - hour * 3600) / 60);
  const second: number = timeInSeconds - hour * 3600 - minute * 60;
  const nanoSecond = Math.floor((second - Math.floor(second)) * 1000);
  const hourFormat: string = hour < 10 ? `0${hour}` : `${hour}`;
  const minuteFormat: string = minute < 10 ? `0${minute}` : `${minute}`;
  const secondFormat: string = second < 10 ? `0${second}` : `${second}`;
  const nanoSecondFormat: string = nanoSecond < 10 ? `00${nanoSecond}` : nanoSecond < 100 ? `0${nanoSecond}` : `${nanoSecond}`;
  return [hourFormat, minuteFormat, secondFormat,nanoSecondFormat];
}
export default calculateTimer;
