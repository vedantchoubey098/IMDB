import React from 'react';


import { CardGroup, Card } from 'react-bootstrap';

function ImgSection() {
    return (
        <div className="imgsection">
                    <CardGroup>
            <Card style={{border:'5px solid #000', background:'#000' }}> 
                <Card.Img variant="top" src="banner-1.JPG" style={{ background:'#000',
            }} />
                
            </Card>
            <Card style={{border:'5px solid #000', background:'#000' }}> 
                <Card.Img variant="top" src="banner-2.JPG" style={{ background:'#000',
            }} />
                
            </Card>
            <Card style={{border:'5px solid #000',  background:'#000' }}> 
                <Card.Img variant="top" src="banner-3.JPG" style={{ background:'#000',
            }} />
                
            </Card>
            
            </CardGroup>   
        </div>
    )
}

export default ImgSection;
