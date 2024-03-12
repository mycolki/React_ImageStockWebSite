import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

export default function getDateDifference(date: string) {
  const currentDate = dayjs();
  const targetDate = dayjs(date);
  const diff = currentDate.diff(targetDate, 'day');

  if (diff === 0) {
    return '오늘';
  }

  return `${currentDate.diff(targetDate, 'day')}일 전`;
}
