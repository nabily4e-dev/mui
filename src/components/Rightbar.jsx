import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";

function Rightbar() {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" },}}>
            <Box  position={"fixed"} width={350}>
                <Typography variant="h6" fontWeight={100}>
                    Online Friends
                </Typography>

                <AvatarGroup max={7}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://material-ui.com/static/images/avatar/2.jpg"
                    />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://material-ui.com/static/images/avatar/3.jpg"
                    />
                    <Avatar alt="Agnes Walker" src="" />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/6.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/7.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/8.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/7.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/8.jpg"
                    />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={1.5}>
                    Latest Photos
                </Typography>
                <Box sx={{ height:"120px", overflow: "scroll", }}>
                    <ImageList variant="masonry" sx={{}} cols={2} gap={8} rowHeight={100}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Latest Conversation
                </Typography>
                <Box height={250} sx={{overflow:"scroll"}}>
                    <List
                        sx={{
                            width: "100%",
                            maxWidth: 360,
                            bgcolor: "background.paper",
                        }}
                    >
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/1.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {
                                            " — I'll be in your neighborhood doing errands this…"
                                        }
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Travis Howard"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Summer BBQ"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            to Scott, Alex, Jennifer
                                        </Typography>
                                        {
                                            " — Wish I could come, but I'm out of town this…"
                                        }
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Cindy Baker"
                                    src="/static/images/avatar/3.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {
                                            " — Do you have Paris recommendations? Have you ever…"
                                        }
                                    </React.Fragment>
                                }
                            />
                        </ListItem><Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Cindy Baker"
                                    src="/static/images/avatar/3.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {
                                            " — Do you have Paris recommendations? Have you ever…"
                                        }
                                    </React.Fragment>
                                }
                            />
                        </ListItem><Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Cindy Baker"
                                    src="/static/images/avatar/3.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {
                                            " — Do you have Paris recommendations? Have you ever…"
                                        }
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    );
}

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
        title: "Bed",
    },
    {
        img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
        title: "Books",
    },
    {
        img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
        title: "Sink",
    },
    {
        img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
        title: "Kitchen",
    },
    {
        img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
        title: "Blinds",
    },
    {
        img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
        title: "Chairs",
    },
    {
        img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
        title: "Laptop",
    },
    {
        img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
        title: "Doors",
    },
    {
        img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
        title: "Coffee",
    },
    {
        img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
        title: "Storage",
    },
    {
        img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
        title: "Candle",
    },
    {
        img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
        title: "Coffee table",
    },
];

export default Rightbar;
