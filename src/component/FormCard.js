import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'



function FormCard() {
    const [product,setProduct] = useState([])
     
    
    let fecthapi=async()=>{
        try{
        let res=await axios.get("https://fakestoreapi.com/products")
        console.log("res",res);
        let allProducts=res.data
        setProduct(allProducts)
        }
        catch(err){
            console.log("err",err);
        }
        
    }
   
     useEffect(()=>{
       fecthapi();
      
    },[])

    
    
  return (
    <div>
    
   <div className='row'>
   {product.map((item,index)=>(
        <Card className="col-4"  >
        <Card.Body>
        <Card.Img variant="top" src={item.image} />   
        </Card.Body>
      

      
      <Card.Body>
        <Card.Title >{item.title}</Card.Title>
       </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroup.Item >{item.description}</ListGroup.Item>
    </ListGroup>
    </Card>
    ))}
   </div>
  </div>
 )
}

 

export default FormCard