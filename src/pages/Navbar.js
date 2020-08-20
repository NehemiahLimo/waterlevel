import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liquidData: [],
      devid: "",
      errors: {},
      eachdevice: [],
      percent: "",
      devicedata: [],
      exactlevel: "",
      creationtime: "",
      remainingvolume: "",
      timefromserver: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.sigfox.com/v2/device-types",
        {
          //  withCredentials: true,

          auth: {
            username: "5f2d27250499f52b273378c4",
            password: "55cc789375ecd3485a0ef1f89c59a06d",
          },

          header: {
            Accept: "application/json;charset=UTF-8",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://waterlevel.codesoft.co.ke/",
            "Access-Control-Allow-Headers":
              "Origin,X-Requested-With,Content-Type,Accept",
            CORS_ORIGIN_ALLOW_ALL: "true",
            "Access-Control-Allow-Methods": "GET",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            origin: "https://waterlevel.codesoft.co.ke/",
            vary: "Accept-Encoding,Origin",
            Pragma: "no-cache",
            Expires: 0,
            " If-Modified-Since": "Tue, 18 Aug 2020 09:18:22 GMT",
            "Accept-Encoding": "gzip,deflate,br",
          },
          mode: "no-cors",
        }
      )
      .then((res) => {
        this.setState({
          liquidData: res.data || [],
        });

        //  console.log(this.state.liquidData.data)
        //  console.log(res.data);
        //  console.log(res.status);
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
    if (devID===""){
            this.setState({
              errors:"Device ID cannot be empty",
            });
    }
    else{ 


      //  console.log("Device ID:", devID);

      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.sigfox.com/v2/devices/${devID}`,
          {
            auth: {
              username: "5f2d27250499f52b273378c4",
              password: "55cc789375ecd3485a0ef1f89c59a06d",
            },

            header: {
              Accept: "application/json;charset=UTF-8",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin":
                "https://waterlevel.codesoft.co.ke/",
              "Access-Control-Allow-Headers":
                "Origin,X-Requested-With,Content-Type,Accept",
              CORS_ORIGIN_ALLOW_ALL: "true",
              "Access-Control-Allow-Methods": "GET",
              "Cache-Control": "no-cache, no-store, must-revalidate",
              origin: "https://waterlevel.codesoft.co.ke/",
              vary: "Accept-Encoding,Origin",
              Pragma: "no-cache",
              Expires: 0,
              " If-Modified-Since": "Tue, 18 Aug 2020 09:18:22 GMT",
              "Accept-Encoding": "gzip,deflate,br",
            },
            mode: "no-cors",
          }
        )
        .then((res) => {
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
            });
          this.setState({
            timefromserver: date,
          });
          //dateObject.toLocaleString("en-US", {month: "long"}) // December
          // dateObject.toLocaleString("en-US", { minute: "numeric" }); // 30
          //dateObject.toLocaleString("en-US", { second: "numeric" }); // 15
          //dateObject.toLocaleString("en-US", {timeZoneName: "short"}) // 12/9/2019, 10:30:15 AM CST
        })
        .catch((err) => {
          this.setState({
            errors: err.response.data,
          });
          //  console.log(this.state.errors.message);
        });

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.sigfox.com/v2/devices/${devID}/messages`,
        {
          auth: {
            username: "5f2d27250499f52b273378c4",
            password: "55cc789375ecd3485a0ef1f89c59a06d",
          },

          header: {
            Accept: "application/json;charset=UTF-8",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://waterlevel.codesoft.co.ke/",
            "Access-Control-Allow-Headers":
              "Origin,X-Requested-With,Content-Type,Accept",
            CORS_ORIGIN_ALLOW_ALL: "true",
            "Access-Control-Allow-Methods": "GET",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            origin: "https://waterlevel.codesoft.co.ke/",
            vary: "Accept-Encoding,Origin",

            Pragma: "no-cache",
            Expires: 0,
            " If-Modified-Since": "Tue, 18 Aug 2020 09:18:22 GMT",
            "Accept-Encoding": "gzip,deflate,br",
          },
          mode: "no-cors",
        }
      )
      .then((res) => {
        //  let devicedataiterate = res.data;
        let tmpArray = [];
        //  console.log(res.data);

        this.setState({
          devicedata: res.data,
        });

        for (var i = 0; i < Array.length; i++) {
          tmpArray.push(this.state.devicedata.data[i]);
        }

        //calculate total volume

        console.log(tmpArray);
        this.setState({
          exactlevel: tmpArray[0].data,
        });
        var hex = this.state.exactlevel.toString();
        var str = "";
        for (var n = 0; n < hex.length; n += 2) {
          str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
        }
        //  let totalvolume = (3.142 * 67 * 67 * 140) / 1000;
        //  console.log(totalvolume);
        let remainingvolume = (str * 3.142 * 67 * 67) / 1000;
        //  console.log(remainingvolume);

        //  console.log(str);
        let remainingvolumepercentage = (str * 100) / 140;
        //  let usedvolumepercentage = 100 - remainingvolumepercentage;
        //  console.log(usedvolumepercentage);
        if (remainingvolumepercentage<0){
           this.setState({
             remainingvolume: 0,
             percent:0,
           });
        }
        else if(remainingvolumepercentage>100){
              this.setState({
                remainingvolume: 1974,
                percent: 100,
              }); 
        }
        else{
             this.setState({
               remainingvolume: parseInt(remainingvolume),
             });
               this.setState({
                 percent: parseInt(remainingvolumepercentage),
               });
         }
       

        //  console.log(str);
      
      })
      .catch((err) => console.log(err));
    }
  };
  render() {
    const { errors } = this.state;

    return (
      <div>
        <div flexGrow="1">
          <AppBar position="static" paddingTop="1">
            <Toolbar
              paddingTop="1"
              paddingBottom="2"
              className="nav-container"
              spacing="1"
            >
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
                  paddingTop="2"
                ></TextField>
                <Button className="butondesign"
                  paddingTop="2"
                  
                  type="submit"
                  variant="contained"
                  color="default"
                >
                  Search
                </Button>
              </form>
            </Toolbar>
          </AppBar>
        </div>
        <div className="container">
          <Grid container spacing={10}>
            <Grid item sm={4} xs={12}>
              <Box
                boxShadow={3}
                display="flex"
                flexWrap="nowrap"
                width={1}
                bgcolor="grey.300"
              >
                <Box>
                  <Typography guttertop="true" variant="h5" component="h2">
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

                  <Typography guttertop="true" variant="h5" component="h2">
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

                  <Typography guttertop="true" variant="h5" component="h2">
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
            <Grid item sm={8} xs={12}>
              <Box
                boxShadow={2}
                display="flex"
                flexWrap="nowrap"
                bgcolor="grey.300"
              >
                <Box>
                  <Box
                    boxShadow={0}
                    display="flex"
                    flexWrap="nowrap"
                    bgcolor="grey.300"
                  >
                    <Box width={1}>
                      <Typography
                        guttertop="true"
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Amount of water available in %
                      </Typography>
                      <Progress
                        gutterBottom
                        type="circle"
                        percent={this.state.percent}
                        theme={{
                          error: {
                            symbol: this.state.percent + "%",
                            trailColor: "	#FFFFFF",
                            color: "red",
                          },
                          default: {
                            symbol: this.state.percent + "%",
                            trailColor: "	#FFFFFF",
                            color: "blue",
                          },
                          active: {
                            symbol: this.state.percent + "%",
                            trailColor: "	#FFFFFF",
                            color: "orange",
                          },
                          success: {
                            symbol: this.state.percent + "%",
                            trailColor: "	#FFFFFF",
                            color: "green",
                          },
                        }}
                        strokeWidth={8}
                        width={150}
                      />
                    </Box>
                    <Box p={2}>
                      <Typography guttertop="true" variant="h5" component="h2">
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

export default Navbar;
