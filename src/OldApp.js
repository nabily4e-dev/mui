import { Button, ThemeProvider, Typography, styled } from "@mui/material";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import { Add, Palette } from "@mui/icons-material";
import { theme } from "./Theme.js";

function App() {
    const BlueButton = styled(Button)(({theme})=>({
        backgroundColor: theme.palette.secondary.light,
        color: "white",
        margin: 5,
        "&:hover": {
            backgroundColor: "lightblue",
        },
        "&:disabled": {
            backgroundColor: "darkgrey",
            color: "white",
        },
    }));

    return (
        <div className="App">
            <Button variant="text">Text</Button>
            <Button
                startIcon={<SettingsSuggestRoundedIcon />}
                variant="contained"
                size="small"
            >
                Settings
            </Button>
            <Button startIcon={<Add />} variant="contained" size="small">
                Add a new ...
            </Button>
            <Button startIcon={<Add />} variant="outlined">
                Outlined
            </Button>
            {/* <ThemeProvider theme={theme}>
                <Palette variant="h3">Responsive h3</Palette>
            </ThemeProvider> */}
            <BlueButton >Blue button!</BlueButton>
        </div>
    );
}

export default App;
