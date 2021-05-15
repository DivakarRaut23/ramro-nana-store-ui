import { Avatar, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

import './SignUpForm.css'

const SignUpForm = () => {
    return (
        <Grid>

            <Paper elevation={20} className='paperStyle'>
                <Grid align='center'>
                    <Avatar>

                    </Avatar>
                    <h2 className='headerStyle'>Sign Up</h2>
                    <Typography variant='caption'> Please fill this form to create an account!</Typography>
                </Grid>
                
            </Paper>
        </Grid>
    )
}

export default SignUpForm
