import moment from 'moment';
import axios from 'axios';



export const getIndicatorsStartToEndDate = (startingDate: Date, endingDate: Date) => {
  const startDate = moment(startingDate).format('YYYY-MM-DD')
  const endDate = moment(endingDate).format('YYYY-MM-DD')
  console.log('indicators')
  return axios.get(`http://localhost:8000/api/indicators/?start_date=${startDate}&end_date=${endDate}`)
}

export const getWeeklyIndicators = (year: number, month: number) => {
  return axios.get(`http://localhost:8000/api/indicators/?year=${year}&month=${month}&weekly_aggregate=${true}`)
}