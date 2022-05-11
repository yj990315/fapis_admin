import React from 'react'

import 'react-datepicker/dist/react-datepicker.css'
import { getWeeklyIndicators } from './utils'
import { weeklyConversionElement } from './Board'

type WeeklyInputProps = {
  year: number,
  setYear: (year: number) => void,
  month: number,
  setMonth: (month: number) => void,
  setWeeklyConversionInfo: (weeklyConversionInfo: weeklyConversionElement[]|undefined) => void
}

const WeeklyInput : React.FC<WeeklyInputProps> = ({ year, setYear, month, setMonth, setWeeklyConversionInfo }) => {
  const monthOptions = [
    { value: 1, name: '1월' },
    { value: 2, name: '2월' },
    { value: 3, name: '3월' },
    { value: 4, name: '4월' },
    { value: 5, name: '5월' },
    { value: 6, name: '6월' },
    { value: 7, name: '7월' },
    { value: 8, name: '8월' },
    { value: 9, name: '9월' },
    { value: 10, name: '10월' },
    { value: 11, name: '11월' },
    { value: 12, name: '12월' },
  ]
  const yearOptions = [
    { value: 2021, name: '2021년' },
    { value: 2022, name: '2022년' },
  ]
  const monthHandleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(Number(e.target.value))
  }
  const yearHandleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(Number(e.target.value))
  }
  return (
    <>
      <select onChange={monthHandleSelect} value={month}>
        {monthOptions.map(month =>
          <option value={month.value} key={month.value}>{month.name}</option>,
        )}
      </select>
      <select onChange={yearHandleSelect} value={year}>
        {yearOptions.map(year =>
          <option value={year.value} key={year.value}>{year.name}</option>,
        )}
      </select>
      <button onClick={async () => {
        const response = await getWeeklyIndicators(year, month)
        console.log(response.data)
        setWeeklyConversionInfo(response.data)
      }
      }>검색
      </button>
    </>
  )
}

export default WeeklyInput