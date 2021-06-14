import { ButtonGroup, Button } from "@material-ui/core";

export default function RightBar() {
    return (
        <div >
           <ButtonGroup orientation="vertical" color="primary" size="small">
               <Button>button1</Button>
               <Button>button2</Button>
               <Button>button3</Button>
               <Button>button4</Button>
               <Button>button5</Button>
               <Button>button6</Button>
           </ButtonGroup>
        </div>
    )
}
