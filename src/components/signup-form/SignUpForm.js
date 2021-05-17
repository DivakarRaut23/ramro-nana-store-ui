import React from 'react'
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd';


import './SignUpForm.css'

const SignUpForm = () => {
    return (
        <Grid align='center'>

            <Paper elevation={20} className='paperStyle'>
                <Grid align='center'>
                    <Avatar className='avatarStyle'>
                        <PersonAddIcon />
                    </Avatar>
                    <h2 className='headerStyle'>Sign Up</h2>
                    <Typography variant='caption' gutterBottom> Please fill this form to create an account!</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='First Name' placeholder='Enter your First Name' />
                    <TextField fullWidth label='Last Name' />
                    <TextField fullWidth label='Email' />
                    <TextField fullWidth label='Password' />
                    <TextField fullWidth label='Confirm Password' />
                    <FormControlLabel
                        control={<Checkbox name="checked" />}
                        label="Accept Terms and Conditions"
                    />
                    <Button type='submit' variant='contained' color='primary'>SIGN UP</Button>
                </form>

            </Paper>
        </Grid>
    )
}

export default SignUpForm
