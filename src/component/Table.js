import React from 'react'
import './Table.css'
const Table = () => {
  return (
    <div className='table'>
    <table >
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
        </tr>

        <tr>
            <td>Ashish</td>
            <td>ashish@gmail.com</td>
            <td>Delhi</td>
        </tr>
        <tr>
            <td>Manshu</td>
            <td>manshu@gmail.com</td>
            <td>Lucknow</td>
        </tr>

        <tr>
            <td>Shivam</td>
            <td>shivam@gmail.com</td>
            <td>Delhi</td>
        </tr>

        <tr>
            <td>Akash</td>
            <td>akash@gmail.com</td>
            <td>Kanpur</td>
        </tr>
    </table>

    </div>
  )
}

export default Table