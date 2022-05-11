import React, { useEffect } from 'react'
import { weeklyConversionElement } from './Board'
import styled from 'styled-components'

type weeklyConversionProps = {
  weeklyConversionInfo: weeklyConversionElement[]|undefined
}

const WeeklyOutput: React.FC<weeklyConversionProps> = ({ weeklyConversionInfo }) => {
  useEffect(() => {
    console.log(weeklyConversionInfo)
    // console.log(weeklyConversionInfo.weeklyConversionInfo)  // TODO : 왜 이렇게 되는지 궁금
  }, [weeklyConversionInfo])

  const StyledTable = styled.table`
    border: 1px;
    width: 500px;
    height: 300px;
    text-align: center;
  `

  return (
    <>
      {
        !weeklyConversionInfo ?
          <>로딩중</>
          :
          <StyledTable>
            <tbody>
            {weeklyConversionInfo.map((conversionInfoElement: weeklyConversionElement) => (

                !conversionInfoElement ?
                  <>로딩중</>
                  :
                  <tr key={conversionInfoElement.start_date.toDateString()}>
                    <>
                      <td>
                        <>
                          기준시작일 : {conversionInfoElement.start_date}
                        </>
                      </td>
                      <td> 총 접수 : {conversionInfoElement.payed_number + conversionInfoElement.not_payed_number} </td>
                      <td> 결제 수 : {conversionInfoElement.payed_number} </td>
                      <td> 전환율 : {conversionInfoElement.conversion_rate} </td>
                    </>
                  </tr>

              ),
            )}
            </tbody>
          </StyledTable>
      }
    </>
  )
}

export default WeeklyOutput