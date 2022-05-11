import React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { getIndicatorsStartToEndDate } from './utils'
import { CustomPeriodConversionInfoType } from './Board'

interface CustomPeriodInputProp {
  startingDate: Date,
  endingDate: Date,
  setStartingDate: (startingDate: Date) => void,
  setEndingDate: (endingDate: Date) => void,
  setCustomPeriodConversionInfo: (customPeriodConversionInfo: CustomPeriodConversionInfoType) => void
}

const CustomPeriodInput : React.FC<CustomPeriodInputProp> = ( {startingDate, endingDate, setStartingDate, setEndingDate, setCustomPeriodConversionInfo} ) => {
  return (
    <>
      <DatePicker selected={startingDate} onChange={(date: Date) => setStartingDate(date)} />
      <DatePicker selected={endingDate} onChange={(date: Date) => setEndingDate(date)} />
      <button onClick={async () => {
        const response = await getIndicatorsStartToEndDate(startingDate, endingDate)
        setCustomPeriodConversionInfo(response.data)
      }
      }>검색
      </button>
    </>
  )
}

export default CustomPeriodInput;
