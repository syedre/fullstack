import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MyButton from './styledButton';
import Grid from '@material-ui/core/Grid';



function Addtodo() {
    return (
        <div>
            <Grid container>
                <Grid item md={4} lg={4}>
                    {/* <div>acsdc</div> */}

                </Grid>
                <Grid item md={4} lg={4}>
                    {/* <div>skdv</div> */}
                </Grid>

            </Grid>
            <MyButton color="green">Submit</MyButton>
            
        </div>
    )
}

export default Addtodo;
