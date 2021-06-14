import { ButtonGroup, Button } from "@material-ui/core";

export default function RightBar() {
    return (
        <div style={{
            display:"flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "70px",
        }}>
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
