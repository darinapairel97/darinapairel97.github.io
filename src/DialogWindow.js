import React from 'react'

// material-ui imports
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Close from '@material-ui/icons/Close'
import { withStyles } from '@material-ui/core/styles';
import theme from './theme.js'

const StyledCloseBtn = withStyles({
    root: {
        position: 'absolute',
        right: '0',   
        top: '0',    
        '&:hover': {
            color: "black"
        }
    }
})(Link)

export const btnOpen = () => {
    document.getElementsByClassName("dialog__animation")[0].showModal()
}
export const btnClose = () => {
    document.getElementsByClassName("dialog__animation")[0].close()
}
class DialogWindow extends React.Component{

    render(){
        const {childElm, btnText, styleForButton} = this.props
        return(
            <div>
                <Button ref={'dialog__open'}  onClick={btnOpen} className={`dialog__open ${styleForButton}`}>{btnText}</Button>
                <dialog ref={'dialog'} className={`dialog__animation`}>
                    <StyledCloseBtn component="button" ref={'dialog__close'} onClick={btnClose} className={`dialog__close`}><Close/></StyledCloseBtn>
                    {childElm}
                </dialog>
            </div>
        )
    }
}
export default withStyles(theme)(DialogWindow)