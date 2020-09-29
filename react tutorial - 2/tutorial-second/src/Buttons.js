import React from 'react'

export default function Buttons({handleDelete}) {
    return (
        <button style={{background:'red', color:'white'}} onClick={handleDelete}>
            Delete me
        </button>
    )
}
