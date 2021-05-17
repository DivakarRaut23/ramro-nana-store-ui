import React from 'react'
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './LoginForm.css'

const LoginForm = () => {
    return (
       <Grid align='center'>
           <Paper elevation={20} className='loginForm'>
           <Grid align='center'>
                    <Avatar className='avatarStyle'>
                        <AccountCircleIcon />
                    </Avatar>
                    <h2 className='headerStyle'>Login IN</h2>
                    <Typography variant='caption' gutterBottom> Please enter your login details !</Typography>
                </Grid>
           <form>
                    <TextField fullWidth label='Email' placeholder='Enter your Email Address' />
                    <TextField fullWidth label='Password' placeholder='Enter your Password' />
                    
                    <FormControlLabel
                        control={<Checkbox name="checked" />}
                        label="Save login details"
                    />
                    <Button type='submit' variant='contained' color='primary'>Login</Button>
                    Not registered yet ? <Button href='/signup' variant='contained'> Register </Button>
                </form>

           </Paper>
       </Grid>
    )
}

export default LoginForm
