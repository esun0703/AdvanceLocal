import React from 'react';
import './ResultTable.scss';


const ResultTable = ({data}) => {

    // This isn't required but I figured it looked better.
    const formatString = (string) => {
        const firstLetter = string.charAt(0).toUpperCase();
        const restOfWord = string.slice(1);
        return `${firstLetter}${restOfWord}`;
    }

    // limits data just for the sake of ease, we could potentially create collapsable rows, and pagination. but for the sake of this exercise, I've just simplfied it.
    const getLimitedData = (data, limit = 1) => {
        const limitedData =  data.slice(0, limit);
        return limitedData.map((move) => {
            return <li key={`${move.move.name}`} >{move.move.name}</li>
        })
    }
    return (
        <table>
            <tbody>
            <tr>
                <td className="row-header">Name:</td>
                <td>{formatString(data?.name)}</td>
            </tr>
            { data?.types?.length > 0 ? (
            <tr>
                <td className="row-header">Type:</td>
                {data.types.map(type => <td key={formatString(type.type.name)}>{formatString(type.type.name)}</td>)}
            </tr>
            ) : null}
            { data?.weight ? (
            <tr>
                <td className="row-header">Weight:</td>
                <td>{data.weight}</td>
            </tr> 
            ) : null}
            { data?.base_experience ? (
            <tr>
            <td className="row-header">Base Experience:</td>
            <td>{data.base_experience}</td>
            </tr>
            ) : null} 
            {data?.moves?.length > 0 ? (
            <tr>
                <td className="row-header">Moves:</td>
                <td>
                    <ul>
                        {getLimitedData(data.moves, 5)}
                    </ul>
                </td>
            </tr>
            ) : null }
        </tbody>
    </table>
    )
} 

export default ResultTable