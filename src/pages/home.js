import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import axios from 'axios';
export class home extends Component {

    render() {
        return (



            <Grid container spacing={10}>
                <Grid item sm={4} xs={4}>
                    <Box boxShadow={2}
                        display="flex"
                        flexWrap="nowrap"
                        p={1}
                        m={1}

                        css={{
                            maxWidth: 1000,
                            maxHeight: 1000
                        }}
                        bgcolor="grey.300"
                    >
                        <Box
                            p={1}



                        > 
                         </Box>
                    </Box>
                </Grid>
                <Grid item sm={8} xs={8}>
                    <Box boxShadow={2}
                        display="flex"
                        flexWrap="nowrap"
                        p={1}
                        m={1}

                        css={{
                            maxWidth: 1000,
                            maxHeight: 1000
                        }}
                        bgcolor="grey.300"
                    >
                        <Box
                            p={1}



                        > Testing </Box>
                    </Box>
                </Grid>
            </Grid>

        )
    }
}

export default home
