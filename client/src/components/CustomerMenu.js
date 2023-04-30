import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import {Row, Col, Button} from 'antd';
import ItemCard from "../components/ItemCard.js";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };

const CustomerMenu = (props) => {
    const [itemsData,setItemsData] = useState([])

    useEffect(() => {
        getAllMenu()
    },[])

    const getAllMenu = async() => {
      axios.get(`http://localhost:3001/serverPage`, config)
      .then(res => {
        const menuData = res.data;
        setItemsData(menuData);
        console.log(menuData);
        //this.setState({ data: menuData });
      })
      .catch((err) => {
        console.error(err);
      });
    }

    const getEntrees = async() => {
      axios.get(`http://localhost:3001/serverPage/getEntrees`, config)
      .then(res => {
        const menuData = res.data;
        setItemsData(menuData);
        console.log(menuData);
        //this.setState({ data: menuData });
      })
      .catch((err) => {
        console.error(err);
      });
    }

    const getSides = async() => {
      axios.get(`http://localhost:3001/serverPage/getSides`, config)
      .then(res => {
        const menuData = res.data;
        setItemsData(menuData);
        console.log(menuData);
        //this.setState({ data: menuData });
      })
      .catch((err) => {
        console.error(err);
      });
    }

    const getDesserts = async() => {
      axios.get(`http://localhost:3001/serverPage/getDesserts`, config)
      .then(res => {
        const menuData = res.data;
        setItemsData(menuData);
        console.log(menuData);
        //this.setState({ data: menuData });
      })
      .catch((err) => {
        console.error(err);
      });
    }

    return (
        <div className="serverPage">
        
          <div className = "server-tab">
            <Button 
            className="category-button"
            variant = "outlined" 
            style={{fontSize : '18px',paddingLeft : '3%', paddingRight : '3%', alignContent : 'center', flexDirection : 'column', marginBottom : '10px', textTransform : 'capitalize'}}
            onClick={getEntrees}
            >
              <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
              <lord-icon
                  src="https://cdn.lordicon.com/xnfkhcfn.json"
                  trigger="hover"
                  colors="primary:#c71f16,secondary:#121331"
                  style={{width:'75px' ,height:'75px'}}>
            </lord-icon>
              <p>
              Entrees
              </p>
            </Button>  

            <Button 
            className="category-button"
            variant = "outlined" 
            style={{fontSize : '18px' ,marginLeft : '2%', paddingLeft : '3%', paddingRight : '3%', alignContent : 'center', flexDirection : 'column', marginBottom : '10px', textTransform : 'capitalize'}}
            onClick = {getSides}
            >
              <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/fkytfmrm.json"
                trigger="hover"
                colors="primary:#121331,secondary:#c71f16"
                style={{width:'75px',height:'75px'}}>
              </lord-icon>
              <p>
              Sides
              </p>
            </Button>

            <Button 
            className="category-button"
            variant = "outlined" 
            style={{fontSize : '18px' , marginLeft : '2%', paddingLeft : '3%', paddingRight : '3%', alignContent : 'center', flexDirection : 'column', marginBottom : '10px', textTransform : 'capitalize'}}
            onClick = {getDesserts}
            >
              <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/elzyzcar.json"
                trigger="hover"
                colors="primary:#121331,secondary:#c71f16"
                style={{width:'75px',height:'75px'}}>
              </lord-icon>
              <p>
              Desserts
              </p>
            </Button>
            <div className='order-info'>
              <div className = 'shopping-cart'>
                <div id = 'num-items'>
                  {props.OrderItems.length}
                </div>
                <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
              </div>
              <h2 id = "total" >
                Order Total: {props.OrderTotal}
              </h2>
            </div>
          </div>
          <Grid container spacing={2}>
          <Grid xs={12}>  
            <Row >
                {
                  itemsData.map(item => (
                      <Col span = {4}>
                      <ItemCard item = {item} AddItem = {props.AddItem} />
                      </Col>
                  ))
                }
            </Row>
          </Grid>
          </Grid>
       
  
      </div>
    );
};

export default CustomerMenu;