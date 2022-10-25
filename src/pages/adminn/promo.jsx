import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Grid, Box, Input, Button, Container } from 'theme-ui';

// import styles from "../../styles/Admin.module.css";

const Promo = () => {
  const [promoList, setpromoList] = useState([]);
  const [editmod, seteditmod] = useState(false);
  const [tempcust, settempcust] = useState("");
//   const [orderList, setOrderList] = useState();
  const status = ["preparing", "on the way", "delivered"];

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    // console.log(id);
    try {
      const res = await axios.get(
        "http://localhost:3000/api/promo/"
      ).then(function (response) {
        if (response.status == 200) {
          // const resdata = response.data[0];
          console.log("res", response.data);
          setpromoList(response.data);
          // setData(resdata.record);
          // settotalPage(resdata.totalCountData);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
      console.log()
    //   setpromoList();
    } catch (err) {
      console.log(err);
    }
  };

  const AddCustomer = async (id) => {
    // console.log(id);
    try {
      let payload = {
        customer: tempcust,
        status: "Lock",
      }
      const res = await axios.put(
        "http://localhost:3000/api/promo/" + id, payload
      ).then(function (response) {
        if (response.status == 200) {
          // const resdata = response.data[0];
          // console.log("res", response.data);
          // let a = promoList.map((as) => {
          //   if (as._id === id) {
          //     as.edit = false;
          //   }
          //   return as;
          // })
          // console.log("aaa", a);
          // setpromoList(a);
          GetData();
          seteditmod(false);
          // setpromoList(response.data);
          // setData(resdata.record);
          // settotalPage(resdata.totalCountData);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
      console.log()
    //   setpromoList();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container p={4} bg="muted">
      <Grid gap={2} columns={[2, null, 4]}>
        <Box bg="primary"><strong>Kode</strong></Box>
        <Box bg="muted"><strong>Status</strong></Box>
        <Box bg="muted"><strong>Customer</strong></Box>
        <Box bg="muted"><strong>Action</strong></Box>
      </Grid>
      {promoList.map((ae) => (
        <>
          <Grid gap={2} columns={[2, null, 4]} mb={2}>
            <Box bg="primary">{ae.kode}</Box>
            <Box bg="muted">{ae.status}</Box>
            <Box bg="muted">
              {ae?.edit == true ? 
              <>
                <Input 
                  // defaultValue={ae.customer == null ? "" : ae.customer}
                  value={tempcust}
                  onChange={(e) => settempcust(e.target.value)}
                  disabled={ae.customer == null ? false : true} 
                  placeholder="Customer" 
                /> 
                <Button 
                  backgroundColor={ae.customer == null ? "green" : "secondary"} 
                  disabled={ae.customer == null ? false : true}
                  onClick={() => {
                    AddCustomer(ae._id);
                    
                  }}
                >
                  Save
                </Button>
                <Button 
                  backgroundColor={ae.customer == null ? "red" : "secondary"} 
                  disabled={ae.customer == null ? false : true}
                  onClick={() => {
                    let a = promoList.map((as) => {
                      if (as._id === ae._id) {
                        as.edit = false;
                      }
                      return as;
                    })
                    console.log("aaa", a);
                    setpromoList(a);
                    seteditmod(false);
                  }}
                >
                  Cancel
                </Button>
              </>
              : 
              <>
                {ae.customer !== null ? 
                ae.customer : ""}
                
                <Button 
                  backgroundColor={ae.customer == null ? "blue" : "white"} 
                  disabled={ae.customer !== null || editmod == true ? true : false}
                  onClick={() => {
                    let a = promoList.map((as) => {
                      if (as.kode === ae.kode) {
                        as.edit = true;
                      }
                      return as;
                    })
                    console.log("aaa", a);
                    setpromoList(a);
                    seteditmod(true);
                  }}
                >
                  Add
                </Button>
              </>
            }
              
            </Box>
            <Box bg="">
              
              <Button 
                ml={2} 
                backgroundColor={ae.customer == null || ae.status == "claimed" ? "white" : "green"} 
                disabled={ae.customer == null || ae.status == "claimed" ? true : false}
                onClick={() => console.log("claim")}
              >
                Claim
              </Button>
            </Box>
          </Grid>
          <hr />  
        </>      
      ))}
    </Container>
  );
};


export default Promo;