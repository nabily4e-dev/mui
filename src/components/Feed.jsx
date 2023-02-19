import {
    ExpandMoreRounded,
    Favorite,
    FavoriteBorderRounded,
    FavoriteRounded,
    MoreVertRounded,
    ShareRounded,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    Collapse,
    IconButton,
    Typography,
} from "@mui/material";
import React from "react";

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertRounded />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://images.pexels.com/photos/13207675/pexels-photo-13207675.jpeg?cs=srgb&dl=pexels-joost-van-os-13207675.jpg&fm=jpg&w=1280&h=853"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun
                        meal to cook together with your guests. Add 1 cup of
                        frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorderRounded />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareRounded />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    );
};

export default Feed;
