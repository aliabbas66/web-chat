import { Avatar, Grid } from '@mui/material'
import React from 'react'

export const Header = ({receiverHeader, onlineMessage}) => {
    return (
        <div className='header-avatar'>
            <div className='name-container'>
                <div>
                    <Avatar sx={{ background: 'rgb(255, 87, 34)' }}>{receiverHeader.fullName ? receiverHeader.fullName.charAt(0) : 'X'}</Avatar>
                </div>
                <div>
                    <h4 className='name'>{receiverHeader.fullName}</h4>
                    <p className='online'>{onlineMessage}</p>
                </div>
            </div>
            <div className='info-container'>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div>Name:</div>
                    </Grid>
                    <Grid item xs={8}>
                        <div>{receiverHeader.fullName}</div>
                    </Grid>
                    <Grid item xs={4}>
                        <div>Email:</div>
                    </Grid>
                    <Grid item xs={8}>
                        <div>{receiverHeader.email}</div>
                    </Grid>
                    <Grid item xs={4}>
                        <div>Phone:</div>
                    </Grid>
                    <Grid item xs={8}>
                        <div>{receiverHeader.phone}</div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
