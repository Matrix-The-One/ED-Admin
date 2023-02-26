import dayjs from 'dayjs'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'

dayjs.extend(quarterOfYear)

export enum Date_Range_Enum {
  TODAY = '今天',
  YESTERDAY = '昨天',
  WEEK = '本周',
  LAST_WEEK = '上周',
  MONTH = '本月',
  LAST_MONTH = '上月',
  QUARTER = '本季度',
  LAST_QUARTER = '上季度',
  YEAR = '今年',
  LAST_YEAR = '去年',
}

export const dateRanges = {
  [Date_Range_Enum.TODAY]: [dayjs(), dayjs()],
  [Date_Range_Enum.YESTERDAY]: [
    dayjs().subtract(1, 'day'),
    dayjs().subtract(1, 'day'),
  ],
  [Date_Range_Enum.WEEK]: [dayjs().startOf('week'), dayjs()],
  [Date_Range_Enum.LAST_WEEK]: [
    dayjs().subtract(1, 'week').startOf('week'),
    dayjs().subtract(1, 'week').endOf('week'),
  ],
  [Date_Range_Enum.MONTH]: [dayjs().startOf('month'), dayjs()],
  [Date_Range_Enum.LAST_MONTH]: [
    dayjs().subtract(1, 'month').startOf('month'),
    dayjs().subtract(1, 'month').endOf('month'),
  ],
  [Date_Range_Enum.QUARTER]: [dayjs().startOf('quarter'), dayjs()],
  [Date_Range_Enum.LAST_QUARTER]: [
    dayjs().subtract(1, 'quarter').startOf('quarter'),
    dayjs().subtract(1, 'quarter').endOf('quarter'),
  ],
  [Date_Range_Enum.YEAR]: [dayjs().startOf('year'), dayjs()],
  [Date_Range_Enum.LAST_YEAR]: [
    dayjs().subtract(1, 'year').startOf('year'),
    dayjs().subtract(1, 'year').endOf('year'),
  ],
}
