import React, {useState, useEffect} from 'react';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {useHistory, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import { sendLogin, userAutoLogin } from '../../pages/login/loginAction';
import './LoginForm.css'

const initialState = {
    email: 'db7@gmail.com',
    password: '123456',
};


const LoginForm = () => {

    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const { isLoading, loginResponse, isAuth } = useSelector(
        state => state.login
    );

    const [login, setLogin] = useState(initialState);

    let { from } = location.state || {from: {pathname: '/'}};
    
    // useEffect(() => {
	// 	// !isAuth && sessionStorage.getItem("accessJWT") && dispatch(updateLogin());

	// 	if (isAuth) history.replace(from);
	// 	// if (isAuth) history.push("/dashboard");

	// 	!isAuth && dispatch(userAutoLogin());
	// }, [isAuth]);

	const handleOnChange = e => {
		const { name, value } = e.target;

		setLogin({
			...login,
			[name]: value,
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();

		if (!login.email || !login.password) {
			return alert("Plz fill up all the input fields");
		}

		dispatch(sendLogin(login));
	};




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
           <form onSubmit={handleOnSubmit}>
                    <TextField
                    fullWidth
                    onChange={handleOnChange}
                    name='email'
                    value={login.email}
                    label='Email'
                    placeholder='Enter your Email Address'
                    required
                    />
                    <TextField
                    fullWidth
                    onChange={handleOnChange}
                    name='password'
                    value={login.password}
                    label='Password'
                    placeholder='Enter your Password'
                    required
                    />

                    <FormControlLabel
                        control={<Checkbox name="checked" />}
                        label="Save login details"
                    />
                    <Button type='submit' variant='contained' color='primary'>Login</Button>
                    Not registered yet ? <Button href='/sign-up' variant='contained'> Register </Button>
                </form>

           </Paper>
       </Grid>
    )
}

export default LoginForm
