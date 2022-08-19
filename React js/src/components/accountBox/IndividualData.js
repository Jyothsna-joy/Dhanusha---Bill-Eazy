import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.fullName}</th>            
            <th>{individualExcelData.email}</th>
            <th>{individualExcelData.month}</th>
            <th>{individualExcelData.usage}</th>
            <th>{individualExcelData.buildingname}</th>
            <th>{individualExcelData.buildingno}</th>
            
        </>
    )
}