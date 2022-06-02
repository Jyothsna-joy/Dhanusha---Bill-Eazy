import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.Id}</th>
            <th>{individualExcelData.FullName}</th>
            <th>{individualExcelData.Month}</th>
            <th>{individualExcelData.Usage}</th>
            <th>{individualExcelData.BuildingName}</th>
            <th>{individualExcelData.BuildingNo}</th>
            
        </>
    )
}