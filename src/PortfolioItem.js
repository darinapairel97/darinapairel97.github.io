import React from 'react'
import { Link, generatePath } from "react-router-dom"

// material-ui imports
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import theme from './theme.js'
import { withStyles } from '@material-ui/core/styles';


function PortfolioItem(props){

    return(
        <Link onClick={()=>{console.log(props.item); props.viewPortfolio(props.item.vk.id)}} to={generatePath("/:id", {id:props.item.vk.id})} >

            <Card className={`${props.classes.flex} ${props.classes.card}`}>
                <div className={`${props.classes.flex} ${props.classes.flexCol}`}>
                    <CardContent className={props.classes.cardContent}>
                        <Typography variant="subtitle1">{props.item.vk.name}</Typography>
                    </CardContent>
                    <CardMedia className={`${props.classes.bigAvatar} ${props.classes.avatar}`} image={props.item.vk.photo} />
                </div>
            </Card>
        </Link>

    )
}

export default withStyles(theme)(PortfolioItem)