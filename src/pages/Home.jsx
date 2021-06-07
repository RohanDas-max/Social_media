import { Typography } from '@material-ui/core'
import React from 'react'
import useStyle from "./styles"

export default function Home() {
const classes = useStyle();

    return (
        <div>
            <Typography variant="h2" className={classes.home} >

            Home Page Yo!
            </Typography>
        </div>
    )
}
