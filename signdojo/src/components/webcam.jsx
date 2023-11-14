import React, {useRef} from "react"
import Webcam from "react-webcam"

const webcam = () => {
    const[opened, setOpened] = useState(false);
    const [error, setError] = useState("");

    const VidModal = () => {
        return(
            <Modal
              opened={opened}
              withCloseButton={false}
              title="Audio Settings"
            >
            <Stack className = "justify-center mb-15">
                <Stack spacing="sm" >
                    <Center>
                    <Button className = "mt-30"
                        onClick={() => {
                        setOpened(false);
                        console.log('opening camera')
                        }}
                    >
                        Confirm
                    </Button>
                    </Center>
                </Stack>
            </Stack>
            </Modal>
        )
    };

    const [playing, setPlaying] = useState(true);
    const toggleVideo = () => {
        if (playing === true) {
        setPlaying(false)
        } else {
        setPlaying(true)
        }; 
    }

    const webcamRef = Webcam;
    const canvasRef = useRef(null);

    useEffect(() => {

        
        if (playing === true){
            camera.start();
        } else {
            camera.stop()
        };
    }, 
    [playing]);
  
    const Toggle = () => {
      if (playing === false){
      return (
        <Group
        position="center"
        spacing="md"
        >
        <Button
        onClick={() => toggleVideo()}
        variant="subtle"
        style={{width: 120, height: 100}}
        >
          <PlayCircleFilledIcon style={{color: 'green', fontSize: 75}}/>
        </Button>
  
        <Button
        onClick={() => navigate('/reviewandsave')}
        >
          NEXT
        </Button>
        </Group>
      )
    } else {
      return (
        <Button
        onClick={() => toggleVideo()}
        variant="subtle"
        style={{width: 120, height: 100}}
        >
        <StopCircleIcon style={{color: 'red', fontSize: 75}}/>
        </Button>
      )
    }
    }
  
    return(
      <div>
        <VidModal/>
        <Stack
        spacing={0}
        >
          <Group
          position='right'
          style={{marginTop: 5, marginRight: 5}}
          >
            <Button
            onClick={() => setOpened(true)}
            size="md"
            variant="subtle"
            >
              <GraphicEqIcon
                  size="lg"          
              />
            </Button>
          </Group>
  
          <Container
          style={{height: 550, width: 350}}
          >
              <Webcam
                ref={webcamRef}
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zindex: 9,
                  width: width,
                  height: height,
                }}
              />{" "}
  
              <canvas
                ref={canvasRef}
                className="output_canvas"
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zindex: 9,
                  width: width,
                  height: height,
                }}
              ></canvas>
          </Container>
          <Group
          position="center">
            <Toggle/>
          </Group>
        </Stack>
      </div>
    )



    return 
}

export default webcam