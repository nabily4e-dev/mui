import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Toolbar,
    Typography,
    styled,
} from "@mui/material";
import FitbitRoundedIcon from "@mui/icons-material/FitbitRounded";
import React from "react";
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
    [theme.breakpoints.up("sm")]:{
        display:"flex",
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
    
}));

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: "none", sm: "block" } }}
                >
                    NABIL DEV
                </Typography>
                <FitbitRoundedIcon
                    sx={{ display: { xs: "block", sm: "none" } }}
                />
                <Search>
                    <InputBase placeholder="search..." />
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
                        src="https://cdn.pixabay.com/photo/2016/04/01/12/11/avatar-1300582_960_720.png"
                    />
                </Icons>
                <UserBox>
                    <Avatar
                        sx={{ width: 35, height: 35 }}
                        src="https://cdn.pixabay.com/photo/2016/04/01/12/11/avatar-1300582_960_720.png"
                    />
                    <Typography variant="span">Nabil</Typography>
                </UserBox>
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;
