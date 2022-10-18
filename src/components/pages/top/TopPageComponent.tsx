import { Box, Card, Typography } from "@mui/material";
import Link from "next/link";

export const TopPageComponent = () => {
    return (
        <>
            <Box>
                <Typography
                    variant="h4"
                    align="center"
                    marginY="40px"
                >
                    CS ゲーム
                </Typography>
            </Box>
            <Link href="/games/hiddenPicture">
                <Card
                    sx={{
                        // display: "inline-block",
                        width: "300px",
                        margin: "auto",
                        cursor: "pointer",
                    }}
                >
                    <Typography
                        align="center"
                        marginY="40px"
                        variant="h5"
                    >
                        かくしえクイズ
                    </Typography>
                </Card>
            </Link>
        </>
    );
}