import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    styled,
} from "@mui/material";
import FitbitRoundedIcon from "@mui/icons-material/FitbitRounded";
import React, { useState } from "react";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    padding: "0 10px",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

const Navbar = () => {
    const [avatarMenu, setAvatarMenu] = useState(false);
    const [openWelcoming, setOpenWelcoming] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography
                    onClick={e=>setOpenWelcoming(true)}
                    variant="h6"
                    sx={{ display: { xs: "none", sm: "block" } }}
                >
                    NABIL DEV
                </Typography>
                <Menu
                open={openWelcoming}
                onClose={(e) => setOpenWelcoming(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <MenuItem>Hi</MenuItem>
            </Menu>
                <FitbitRoundedIcon
                    sx={{ display: { xs: "block", sm: "none" } }}
                />
                <Search>
                    <InputBase placeholder="search..." sx={{width:"100%"}} />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>{" "}
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 35, height: 35 }}
                        src="https://avatars.githubusercontent.com/u/75049983?s=96&v=4"
                        onClick={(e) => setAvatarMenu(true)}
                    />
                </Icons>
                <UserBox onClick={(e) => setAvatarMenu(true)}>
                    <Avatar
                        sx={{ width: 35, height: 35 }}
                        src="https://cdn.pixabay.com/photo/2016/04/01/12/11/avatar-1300582_960_720.png"
                    />
                    <Typography variant="span">Nabil</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={avatarMenu}
                onClose={(e) => setAvatarMenu(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
