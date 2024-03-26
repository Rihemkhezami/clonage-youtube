import React from 'react'
import { Card ,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Cardmembre(props) {
    return (
        <div className="col">
            <Card style={{ width: '250px'}} >
                <Card.Title><h1> <i> {props.name} </i> </h1></Card.Title>
                <Card.Img variant="top" src={props.src} style={{height: "320px"}} alt="..."/>
                <Card.Body> 
                    <Card.Text>
                      <span className='h3 text-muted'>{props.description}</span>
                    </Card.Text>
                </Card.Body>
                <Card.Footer  style={{padding: 0}}>
                    <Link to={"/"+props.lien}>
                        <Button className='btn btn-primary' style={{width: '100%' , margin:"0",height: "40px",fontSize: "16px" }} >Voir Video</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    )
}
