import React, { useEffect, useState } from 'react'
import CustomPeriodInput from './CustomPeriodInput'
import CustomPeriodOutput from './CustomPeriodOutput'
import WeeklyInput from './WeeklyInput'
import WeeklyOutput from './WeeklyOutput'
import styled from 'styled-components'
import { getWeeklyIndicators } from './utils'

export interface weeklyConversionElement {
  payed_number: number,
  not_payed_number: number,
  conversion_rate: number,
  start_date: Date
}

export interface CustomPeriodConversionInfoType {
  payed_number: number,
  not_payed_number: number,
  conversion_rate: number
}

export function Board() {
  const [isWeekly, setIsWeekly] = useState<boolean>(true)
  const [startingDate, setStartingDate] = useState<Date>(new Date())
  const [endingDate, setEndingDate] = useState<Date>(new Date())
  const [customPeriodConversionInfo, setCustomPeriodConversionInfo] = useState<CustomPeriodConversionInfoType>()
  const [year, setYear] = useState<number>(new Date().getFullYear())
  const [month, setMonth] = useState<number>(new Date().getMonth())
  const [weeklyConversionInfo, setWeeklyConversionInfo] = useState<weeklyConversionElement[]>()

  const TestButton = styled.button`
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid lightgray;
  `

  useEffect(() => {
    console.log(customPeriodConversionInfo)
  }, [customPeriodConversionInfo])

  useEffect(() => {
    const getFromServer = async () => {
      const response = await getWeeklyIndicators(year, month)
      setWeeklyConversionInfo(response.data)
    }
    getFromServer()
  }, [])

  const handleWeeklyButton = (): void => {
    setIsWeekly(true)
  }
  const handleCustomButton = (): void => {
    setIsWeekly(false)
  }

  return (
    <>
      <div>
        <TestButton onClick={handleWeeklyButton}>
          주별로 보기
        </TestButton>
        <TestButton onClick={handleCustomButton}>
          특정 시간 검색하기
        </TestButton>
      </div>
      {
        isWeekly ?
          <>
            주별 보기
            <WeeklyInput
              year={year}
              setYear={setYear}
              month={month}
              setMonth={setMonth}
              setWeeklyConversionInfo={setWeeklyConversionInfo}
            />
            <WeeklyOutput
              weeklyConversionInfo={weeklyConversionInfo}
            />
          </>
          :
          <>
            특정 시간 검색
            <CustomPeriodInput
              startingDate={startingDate}
              setStartingDate={setStartingDate}
              endingDate={endingDate}
              setEndingDate={setEndingDate}
              setCustomPeriodConversionInfo={setCustomPeriodConversionInfo}
            />
            <CustomPeriodOutput
              customPeriodConversionInfo={customPeriodConversionInfo}
            />
          </>
      }
    </>
  )
}