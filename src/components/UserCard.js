import React from 'react'
import {
    Card,
    CardBody
} from "reactstrap"

export default function UserCard({user}) {
    return (
        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} className="img-thumbnail"/>
            <CardBody>
            <div className="text-primary">Name: {user.name}</div>
            <div className="text-primary"> Location : {user.location}</div>
            <div className="text-primary">Email :{user.email ? user.email: 'Not Available'}</div>
            <div className="text-primary">Bio :{user.bio ? user.bio : 'Not Available'}</div>
            <div className="text-info">Available for Hire: {user.hireable ? 'YES':'NOPE' }</div>
            <div className="text-info">Folowers :{user.followers}</div>
            
            </CardBody>

        </Card>
    )
}
