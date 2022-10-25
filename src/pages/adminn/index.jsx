import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import BgShape from 'assets/images/shape-1.svg';
import shapeTop from 'assets/images/icons/btn-shape-top.svg';
import shapeBottom from 'assets/images/icons/btn-shape-bottom.svg';
import { Box, Heading, Button, Container } from 'theme-ui';

// import styles from "../../styles/Admin.module.css";

const Index = () => {
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
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Eat Souffle Petra"
          description="Japanese Pancake Souffle Near UK Petra Surabaya"
        />
        <Container sx={styles.container}>
        <Box sx={styles.contentBox}>
          <Heading sx={styles.heading}>
            Do you have any question? Feel free to contact us
          </Heading>
          <Box sx={styles.btnWrapper}>
            <Button variant="text">Contact us now</Button>
          </Box>
        </Box>
      </Container>
      </Layout>
    </ThemeProvider>
  );
};

const styles = {
  section: {
    position: 'relative',
    zIndex: 1,
    ':before': {
      backgroundColor: '#F9FAFC',
      bottom: 0,
      content: `''`,
      height: '50%',
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: '-1',
    },
  },
  container: {
    px: [0, '0 !important', '30px !important'],
  },
  contentBox: {
    padding: [
      '35px 60px 60px',
      null,
      null,
      '40px 30px 45px',
      '55px 30px 60px',
      '55px 50px 60px',
    ],
    backgroundColor: '#183656',
    backgroundImage: ['none', null, null, `url(${BgShape})`],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60% center',
    backgroundSize: ['120px', null, null, null, 'auto'],
    borderRadius: '7px',
    display: 'flex',
    alignItems: 'center',
    textAlign: ['center', null, null, 'left'],
    flexDirection: ['column', null, null, 'row'],
    justifyContent: ['center', null, null, 'space-between'],
  },
  heading: {
    fontSize: [3, 7, 8, 7, 10, 11],
    color: 'white',
    letterSpacing: 'heading',
    lineHeight: [1.4, 1.53],
    maxWidth: ['100%', '80%', null, 340, '50%', '45%'],
    mb: [11, null, null, 0],
  },
  btnWrapper: {
    display: 'flex',
    position: 'relative',
    ':before, :after': {
      content: `''`,
      position: 'absolute',
      width: '73px',
      height: '26px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundSize: ['55%', null, null, '100%'],
    },
    ':before': {
      backgroundImage: `url(${shapeTop})`,
      top: '-28px',
    },
    ':after': {
      backgroundImage: `url(${shapeBottom})`,
      bottom: '-28px',
    },
    button: {
      backgroundColor: 'white',
      padding: 0,
      fontSize: [0, null, null, null, 2],
      minHeight: [40, null, null, 45, 60],
      padding: ['0 28px', null, null, null, '0 40px'],
      textTransform: 'uppercase',
    },
  },
};

export default Index;