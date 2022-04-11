import React from 'react';
import Badge from 'react-bootstrap/Badge'
const BadgeR = () => {
    return ( <>
    <button className='btn btn-danger position-relative'>
        MyCart  <Badge bg="secondary" className='position-absolute top-0'>+9</Badge>
    </button>

    </> );
}
 
export default BadgeR;