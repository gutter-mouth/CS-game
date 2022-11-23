import { Box, Card, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { pagesPath } from "@/utils/pathpida/$path";

export const TopPageComponent = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" align="center" marginY="40px">
          CS ゲーム
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Link href={pagesPath.games.hiddenPicture.$url()}>
            <Card
              sx={{
                width: "300px",
                margin: "auto",
                cursor: "pointer",
              }}>
              <Typography align="center" marginY="40px" variant="h5">
                かくしえクイズ
              </Typography>
            </Card>
          </Link>
        </Grid>
        <Grid item>
          <Link href={pagesPath.games.scriptMemorize.$url()}>
            <Card
              sx={{
                width: "300px",
                margin: "auto",
                cursor: "pointer",
              }}>
              <Typography align="center" marginY="40px" variant="h5">
                暗唱聖句
              </Typography>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
