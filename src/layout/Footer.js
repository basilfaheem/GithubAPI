import React from 'react'
import {Container,CardFooter} from "reactstrap"

export default function Footer() {
    return (
        <Container 
        fluid 
        tag="footer"
        color="black"
        light
        className="text-center bg-dark text-white text-uppercase fixed-bottom p-3">
                Github Search App with Firebase.    
        </Container>
        
    )
}
