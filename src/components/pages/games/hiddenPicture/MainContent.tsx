import { Box, CardMedia, Grid, Typography } from "@mui/material";
import { useGrid } from "./useGrid";


export const MainContent = () => {
    const { gridRow, gridCol, gridState, setGridState } = useGrid();

    return (
        <Box
            sx={{
                position: "relative",
                margin: "auto",
                width: "400px",
                height: "400px",
            }}>
            <CardMedia
                sx={{
                    position: "absolute",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    border: 1,
                }}
                component="img"
                image="https://s2.booth.pm/782207e4-481e-47c5-8d4a-1235eb8a2503/3f7494a3-8553-4c55-8fab-386618953003.png" />
            <Grid
                sx={{
                    position: "absolute",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    // bgcolor: "black",
                }} columns={gridCol} container={true}>
                {[...Array(gridRow * gridCol)].map((_, i) => {
                    return (
                        <Grid
                        sx={{
                            border: 1,
                            color: "white",
                            bgcolor: gridState[i] ? "" : "black",
                        }}
                            item
                            xs={1}
                            onClick={()=>setGridState( gridState.map((state,idx)=>(i==idx ? !state: state)))}
                        >
                            <Typography
                            color="white"
                            >{!gridState[i] && i}</Typography>
             
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};
