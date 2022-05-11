import React from 'react';
import { CustomPeriodConversionInfoType } from './Board'

interface CustomPeriodOutputProps {
  customPeriodConversionInfo: CustomPeriodConversionInfoType|undefined
}

const CustomPeriodOutput:React.FC<CustomPeriodOutputProps> = ({customPeriodConversionInfo}) => {

  return (
    <>
      {
        !customPeriodConversionInfo ?
          <div>로딩중</div>
          :
          <>
            <div>접수 수 : {customPeriodConversionInfo.not_payed_number + customPeriodConversionInfo.payed_number}</div>
            <div>결제 수 : {customPeriodConversionInfo.payed_number} </div>
            <div>전환율 : {customPeriodConversionInfo.conversion_rate} </div>
          </>
      }
    </>
  )
}

export default CustomPeriodOutput;