
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Slack from '/image/slack.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel';
import Im from '/image/im.png';
import Stro from '/image/store.png';
import Product from '/image/product.png';
import Bus from '/image/businuss.png';
import Help from '/image/help.png';




function ghome(){

 
    

    const headerStyle = {
        backgroundColor: 'white',
        color: '#fff',
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height : '100px'
      };

  
    
      const userActionsStyle = {
        display: 'flex',
        alignItems: 'center',
        
      
      };
 
      
        
    return(

      <div>
<header style={headerStyle}>
  <div style={{marginLeft: '190px'}}>
      <div style={{fontSize: '40px',fontFamily: 'Impact', color: '#54545B'}}>Safic</div>
      
      </div>
      <img src={Slack} alt="user" style={{ width: '40px', height: '40px', right:'1350px', position: 'absolute' }}/>
      <button style={{ marginLeft: '-70px', 
                         backgroundColor: 'rgb(103,208,167)', 
                         color: '#fff', 
                         border: 'none', 
                         borderRadius: '40px', 
                         height: '40px',
                         width: '100px',
                         fontSize: '12px',
                         position: 'absolute',
                         right: '30px'
                         
                      
                         }}> START FOR FREE</button>
      
      
      <div style={userActionsStyle}>
      
      
        <label  style={{position: 'absolute', left: '380px',color:'#383C60',border: 'none',fontFamily:"arial black"}}>Featcher</label>
        <label style={{position: 'absolute', left: '500px' , color:'#383C60',fontFamily: 'arial black'}}>Pricing</label>
        <label  style={{position: 'absolute', left: '620px' , color:'#383C60',fontFamily: 'arial black' }}>Themes </label>
        <label style={{position: 'absolute', left: '740px'  , color:'#383C60',fontFamily: 'arial black'}}>Coustemers</label>
        <label href='' style={{position: 'absolute', right: '140px'  , color:'#383C60',fontFamily: 'arial black'}}>Login</label>


        <Dropdown  style={{position: 'absolute',left: '860px'}}>
        <Dropdown.Toggle id="dropdown-autoclose-true" style={{ backgroundColor: 'white',  position: 'black' ,color:'#383C60',border: 'none',fontFamily:"arial black"}}>
          Resource
        </Dropdown.Toggle>

        <Dropdown.Menu >
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown  style={{position: 'absolute',left: '980px'}}>
        <Dropdown.Toggle id="dropdown-autoclose-true" style={{ backgroundColor: 'white',  position: 'black' ,color:'black',border: 'none' , color:'#383C60',fontFamily: 'arial black'}}>
          Service
        </Dropdown.Toggle>

        <Dropdown.Menu >
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown  style={{position: 'absolute',left: '1100px'}}>
        <Dropdown.Toggle id="dropdown-autoclose-true" style={{ backgroundColor: 'white',  position: 'black' ,color:'black',border: 'none' , color:'#383C60',fontFamily: 'arial black'}}>
          Partner
        </Dropdown.Toggle>

        <Dropdown.Menu >
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
   
       
        
      </div>  
 </header>
   
    

    <h2 style={{position: 'absolute', fontSize: '50px', color:'#252534', left: '490px',top: '100px',fontFamily: 'goudy old style'}}>Ecommerce for everyone</h2>
    <h2 style={{position: 'absolute', fontSize: '20px', color:'#57575C', left: '440px',top: '180px',fontFamily: 'goudy old style'}}>Every thig you need to Online.Try it free for 14 days.No ceradit card requierd</h2>

    <button style={{ marginLeft: '650px', 
                         backgroundColor: 'rgb(103,208,167)', 
                         color: '#fff', 
                         border: 'none', 
                         borderRadius: '40px', 
                         height: '40px',
                         width: '180px',
                         fontSize: '12px',
                         position: 'absolute',
                        top: '220px'
                         
                      
                         }}> START FOR FREE</button>
      

    <div style={{position: 'absolute',width: '100%',height: '200px', top: '260px',left: '0px'}}>
      <Carousel>
      <Carousel.Item>
        <img src={Im} text="First slide" style={{ width: '100%', height: '370px' }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Im} text="First slide" style={{ width: '100%', height: '370px' }} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Im} text="First slide" style={{ width: '100%', height: '370px' }}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>

    <div style={{top: '620px', position: 'absolute',}}>
      <div style={{ display: 'inline',position: 'absolute',position: 'absolute', left: '400px', }}>
      <img src={Stro} alt="user"  style={{position: 'absolute',width:'50px',height: '50px'}}/>
      <label style={{position: 'absolute',top: '50px',left:'5px',color:'#F39B13'}}> store</label>
      </div>

      <div style={{ display: 'inline',position: 'absolute', left: '600px', }}>
      <img src={Product} alt="user" style={{position: 'absolute',width:'50px',height: '50px'}} />
      <label style={{position: 'absolute',top: '50px',color:'#F2B250'}}>product</label>
      </div>

      <div style={{ display: 'inline',position: 'absolute', left: '800px', }}>
      <img src={Bus} alt="user" style={{position: 'absolute',width:'50px',height: '50px'}} />
      <label  style={{position: 'absolute',top: '50px',color: '#54C347'}}>businus</label>
      </div>

      <div style={{ display: 'inline',position: 'absolute', left: '1000px',}}>
      <img src={Help} alt="user"  style={{position: 'absolute',width:'50px',height: '50px'}}/>
      <label style={{position: 'absolute',top: '50px',left:'8px',color:'#F57575'}} >help</label>
      
      </div>

    </div>



  


     

    </div>


    )
}

export default ghome;