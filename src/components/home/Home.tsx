import {Box} from "@mui/material";
import TopoWallpaper from "../../static/topo-wallpaper.jpg";
export default function Home() {
    return(
        <>
            <Box
                sx={{
                    backgroundImage: `url(${TopoWallpaper})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100vw',
                    height: '100vh'
                }}
            >
            </Box>
        </>
    )
}
