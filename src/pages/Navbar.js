import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
// import { withRouter } from 'react-router'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";




        


export class Navbar extends Component {
         constructor(props) {
           super(props);

           this.state = {
             liquidData: [],
             devid: "",
             errors: {},
             eachdevice: [],
             percent: '',
             devicedata: [],
             exactlevel: "",
             creationtime:'',
             remainingvolume:'',
             timefromserver: []


           };
         }

        //  converthextostring = (str1) => {
        //    var hex = str1.toString();
        //    var str = "";
        //    for (var n = 0; n < hex.length; n += 2) {
        //      str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
        //    }
        //    return str;
        //  };
        
         componentDidMount() {
           axios
             .get("/devices", {
               withCredentials: true,
               auth: {
                 username: "5f2d27250499f52b273378c4",
                 password: "55cc789375ecd3485a0ef1f89c59a06d",
               },
               header: {
                 Accept: "application/json",
                 "Content-Type": "application/json",
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Headers":
                   "Origin,X-Requested-With,Content-Type,Accept",
                 CORS_ORIGIN_ALLOW_ALL: "true",
                 "Access-Control-Allow-Credentials": "true",
                 "Access-Control-Allow-Methods": "GET",
               },
               mode: "no-cors",
               credentials: "include",
             })
             .then((res) => {
               this.setState({
                 liquidData: res.data || [],
               });

               //  console.log(this.state.liquidData.data)
               console.log(res.data);
                  // var d = new Date(1597731743000 * 1000);
                  // var yyyy = d.getFullYear();
                  // var mm = ("0" + (d.getMonth() + 1)).slice(-2); // Months are zero based. Add leading 0.
                  // var dd = ("0" + d.getDate()).slice(-2);
                  // var conc = yyyy + "-" + mm + "-" + dd;
                  // console.log(conc);
                  // this.setState({
                  //   creationtime: conc,
                  // });
                  
                  // var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
                  // d.setUTCSeconds(utcSeconds);
                  // var d = new Date(1597751329000);
                 
                  // console.log(
                  //   d.toLocaleString("en-US", {
                  //     timeZoneName: "short",
                  //   })
                  // );


             })
             .catch((err) => console.log(err));
         }

         handleChange = (event) => {
           this.setState({
             [event.target.name]: event.target.value,
           });
        
         };


         handleSubmit = (event) => {
           event.preventDefault();  
         


           const devID = this.state.devid;

           // do stuff
           console.log("Device ID:", devID);
           // var alldevicedata = this.state.liquidData.data;
           // let tmpArray = []
           // for (var i = 0; i < alldevicedata.length; i++) {
           //   var k = alldevicedata[i];
           //   var id = this.state.liquidData.data[k];

           //   tmpArray.push(this.state.liquidData.data[i])

           // }
           // console.log(this.state.liquidData);
           // console.log(tmpArray);

           //      const devid ={
           // "devicetype-id":this.state.devid
           //      }
           axios
             .get(`/devices/${devID}`, {
               withCredentials: true,
               auth: {
                 username: "5f2d27250499f52b273378c4",
                 password: "55cc789375ecd3485a0ef1f89c59a06d",
               },
               header: {
                 Accept: "application/json",
                 "Content-Type": "application/json",
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Headers":
                   "Origin,X-Requested-With,Content-Type,Accept",
                 CORS_ORIGIN_ALLOW_ALL: "true",
                 "Access-Control-Allow-Credentials": "true",
                 "Access-Control-Allow-Methods": "GET",
               },
               mode: "no-cors",
               credentials: "include",
             })
             .then((res) => {
                              // console.log(res.data);
                              // console.log(res.data.id);

                              this.setState({
                                eachdevice: res.data,
                              });
                                 var det = new Date(res.data.lastCom);

                                
                                let date =
                                  det.toLocaleString("en-US", {
                                    month: "numeric",
                                  }) +
                                  "/" +
                                  det.toLocaleString("en-US", {
                                    day: "numeric",
                                  }) +
                                  "/" +
                                  det.toLocaleString("en-US", {
                                    year: "numeric",
                                  }) +
                                  ",  " +
                                  det.toLocaleString("en-US", {
                                    hour: "numeric",
                                  }) +
                                  ":" +
                                  det.toLocaleString("en-US", {
                                    minute: "numeric",
                                  });
                                  this.setState({
                                    timefromserver: date,
                                  });

                                
// console.log(res.data.lastCom);
      //  var date = new Date(res.data.lastCom);
      //  console.log(date.toGMTString());

          // this.setState({
          //   timefromserver: date,
          // });
                              // //TIME
                             
                              // var d = new Date(1597731743000 * 1000);
                              // var yyyy = d.getFullYear();
                              // var mm = ("0" + (d.getMonth() + 1)).slice(-2); // Months are zero based. Add leading 0.
                              // var dd = ("0" + d.getDate()).slice(-2);
                              // var conc = yyyy + mm + dd;
                              // console.log(this.state.liquidData.lastCom);
                              // this.setState({
                              //   creationtime: conc,
                              // });
                            })
             .catch((err) => {
               this.setState({
                 errors: err.response.data,
               });
               console.log(this.state.errors.message);
             });

             //creation time
         
          //  var hexcreationtime = this.state.eachdevice.creationTime.toString();
          //  var strcreationtime = "";
          //  for (var n = 0; n < hexcreationtime.length; n += 2) {
          //    strcreationtime += String.fromCharCode(
          //      parseInt(hexcreationtime.substr(n, 2), 16)
          //    );
          //  }
          //  this.setState({
          //    creationtime: strcreationtime
          //  })
           //data

           axios
             .get(`/devices/${devID}/messages`, {
               withCredentials: true,
               auth: {
                 username: "5f2d27250499f52b273378c4",
                 password: "55cc789375ecd3485a0ef1f89c59a06d",
               },
               header: {
                 Accept: "application/json",
                 "Content-Type": "application/json",
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Headers":
                   "Origin,X-Requested-With,Content-Type,Accept",
                 CORS_ORIGIN_ALLOW_ALL: "true",
                 "Access-Control-Allow-Credentials": "true",
                 "Access-Control-Allow-Methods": "GET",
               },
               mode: "no-cors",
               credentials: "include",
             })
             .then((res) => {
              //  let devicedataiterate = res.data;
               let tmpArray = [];
               console.log(res.data);

               this.setState({
                 devicedata: res.data,
               });

               for (var i = 0; i < Array.length; i++) {
                 // var k = devicedataiterate[i];
                 // var id = res.data.data[k];

                 tmpArray.push(this.state.devicedata.data[i]);
               }

               //calculate total volume
               //volume=pi*r*r*h
               //h=300cm r=100cm

               console.log(tmpArray);
               this.setState({
                 exactlevel: tmpArray[0].data,
               });
               var hex = this.state.exactlevel.toString();
               var str = "";
               for (var n = 0; n < hex.length; n += 2) {
                 str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
               }
               let totalvolume = (3.142 * 67 * 67 * 140) / 1000;
               console.log(totalvolume);
               let remainingvolume = (str * 3.142 * 67 * 67) / 1000;
               console.log(remainingvolume);

               // let remainingvolumepercentage = (remainingvolume * 100) / totalvolume;
              //  let f = (str * 3.142 * 67 * 67) / 1000;
               console.log(str);
               let remainingvolumepercentage = (str * 100) / 140;
               let usedvolumepercentage = 100 - remainingvolumepercentage;
               console.log(usedvolumepercentage);
               this.setState({
                 remainingvolume: parseInt(remainingvolume),
               });

               console.log(str);
               this.setState({
                 percent: parseInt(remainingvolumepercentage),
               });
             })
             .catch((err) => console.log(err));
         };
         render() {
           const { errors } = this.state;

           return (
             <div>
               <AppBar>
                 <Toolbar className="nav-container">
                   <form noValidate onSubmit={this.handleSubmit}>
                     <TextField
                       id="input"
                       variant="outlined"
                       label="device ID"
                       color="secondary"
                       bgcolor="grey.300"
                       name="devid"
                       value={this.state.devid}
                       onChange={this.handleChange}
                       error={errors.message ? true : false}
                       helperText={errors.message}
                     ></TextField>
                     <Button type="submit" variant="contained" color="default">
                       Search
                     </Button>
                   </form>
                 </Toolbar>
               </AppBar>
               <div className="container">
                 <Grid container spacing={10}>
                   <Grid item sm={4} xs={4}>
                     <Box
                       boxShadow={3}
                       display="flex"
                       flexWrap="nowrap"
                       p={1}
                       m={1}
                       css={{
                         maxWidth: 1000,
                         maxHeight: 1000,
                       }}
                       bgcolor="grey.300"
                     >
                       <Box p={2}>
                         <Typography
                           guttertop="true"
                           variant="h5"
                           component="h2"
                         >
                           Device ID:
                         </Typography>
                         <Typography
                           variant="body2"
                           color="textSecondary"
                           component="p"
                           gutterBottom
                         >
                           {this.state.eachdevice.id}{" "}
                         </Typography>

                         <Typography
                           guttertop="true"
                           variant="h5"
                           component="h2"
                         >
                           Name:
                         </Typography>
                         <Typography
                           variant="body2"
                           color="textSecondary"
                           component="p"
                           gutterBottom
                         >
                           {" "}
                           {this.state.eachdevice.name}{" "}
                         </Typography>
                         {/* <Typography
                           guttertop="true"
                           variant="h5"
                           component="h2"
                         >
                           Description:
                         </Typography> */}
                         {/* <Typography
                           variant="body2"
                           color="textSecondary"
                           component="p"
                           gutterBottom
                         >
                           {" "}
                           {this.state.eachdevice.description}
                         </Typography> */}
                         <Typography
                           guttertop="true"
                           variant="h5"
                           component="h2"
                         >
                           Last seen in:
                         </Typography>
                         <Typography
                           variant="body2"
                           color="textSecondary"
                           component="p"
                           gutterBottom
                         >
                           {this.state.timefromserver}
                         </Typography>
                       </Box>
                     </Box>
                   </Grid>
                   <Grid item sm={8} xs={8}>
                     <Box
                       boxShadow={2}
                       display="flex"
                       flexWrap="nowrap"
                       p={1}
                       m={1}
                       css={{
                         maxWidth: 1000,
                         maxHeight: 1000,
                       }}
                       bgcolor="grey.300"
                     >
                       <Box p={1}>
                         <Box
                           boxShadow={0}
                           display="flex"
                           flexWrap="nowrap"
                           p={1}
                           m={1}
                           css={{
                             maxWidth: 500,
                             maxHeight: 500,
                           }}
                           bgcolor="grey.300"
                         >
                           <Box p={2}>
                             <Typography
                               guttertop="true"
                               gutterBottom
                               variant="h5"
                               component="h2"
                             >
                               Amount of water available in %
                             </Typography>
                             <Progress
                               type="circle"
                               percent={this.state.percent}
                               theme={{
                                 success: {
                                  //  symbol: "🏄‍",
                                   symbol: this.state.percent + "%",
                                   color: "red",
                                 },
                                 default: {
                                   symbol: this.state.percent + "%",

                                   color: "green",
                                 },
                               }}
                               strokeWidth={8}
                               width={300}
                             />
                           </Box>
                           <Box p={2}>
                             <Typography
                               guttertop="true"
                               variant="h5"
                               component="h2"
                             >
                               Amount in(L):
                             </Typography>
                             <Typography
                               variant="body2"
                               color="textSecondary"
                               component="p"
                               gutterBottom
                             >
                               {this.state.remainingvolume}
                             </Typography>
                           </Box>
                         </Box>
                       </Box>
                     </Box>
                   </Grid>
                 </Grid>
               </div>
             </div>
           );
         }
       }

export default Navbar
