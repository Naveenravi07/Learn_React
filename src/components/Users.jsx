import React from 'react'

function Users(props) {
    return (
        <div>
           
            <blockquote className='blackbg'>
                Name:{props.name},
                <br />
                Age:{props.age}
                <br />
                Place:{props.place}

            </blockquote>
        </div>
    )
}

export default Users
