import React from 'react';
import {table, thead, th} from 'react-materialize'




const Table = (props)=>{

    let urlItem = Object.keys(props.urlData).map(urlkey=>{
        return (
            <tr>
                <td>{urlkey.url}</td>
                <td>{urlkey.thumb}</td>
                <td>{urlkey.meta}</td>
                <td>{urlkey.date}</td>
            </tr>
        )
    })

    return(
        <div>
        <table>
            <thead>
                <th>Thumbnail</th>
                <th>Url</th>
                <th>Description</th>
                <th>Date</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {urlItem}
            </tbody>
            
        </table>
        </div>
        
    )
}
export default Table;

