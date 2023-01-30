import dayjs from 'dayjs';
import IsSameOrAfter from 'dayjs/plugin/IsSameOrAfter';
import IsSameOrBefore from 'dayjs/plugin/IsSameOrBefore';

dayjs.extend(IsSameOrAfter);
dayjs.extend(IsSameOrBefore);

const isEscapeKey = (evt) => evt.key === 'Escape';

const isPastEvent = (point) => dayjs(point.dateTo).isSameOrBefore(dayjs());

const isPresentEvent = (point) => dayjs(point.dateFrom).isSameOrBefore(dayjs()) && dayjs(point.dateTo).isSameOrAfter(dayjs());

const isFutureEvent = (point) => dayjs(point.dateFrom).isAfter(dayjs());

const sortByDay = (pointA, pointB) => dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));

const sortByTime = (pointA, pointB) => dayjs(pointB.dateTo).diff(pointB.dateFrom) - dayjs(pointA.dateTo).diff(pointA.dateFrom);

const sortByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;

export { isEscapeKey, isPastEvent, isPresentEvent, isFutureEvent, sortByDay, sortByTime, sortByPrice };
