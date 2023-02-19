import {
    AddRounded,
    DateRangeRounded,
    DeleteRounded,
    EmojiEmotions,
    EmojiEmotionsRounded,
    ImageRounded,
    PersonAddRounded,
    VideoCameraBackRounded,
} from "@mui/icons-material";
import {
    Avatar,
    Backdrop,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Fade,
    Modal,
    Stack,
    TextField,
    Tooltip,
    Typography,
    styled,
} from "@mui/material";
// import { Modal, ModalDialog, Typography } from "@mui/joy";
import React, { useState } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
});

function AddOld() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Tooltip
                onClick={(e) => setOpen(true)}
                title="Delete"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 },
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddRounded />
                </Fab>
            </Tooltip>

            {/* <Modal
            variant="soft"
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={(e)=>setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Text in a modal
                        </Typography>
                    </Box>
                </Fade>
            </Modal> */}

            {/* <Transition in={open} timeout={400}>
                {(state) => (
                    <Modal
                        keepMounted
                        open={!["exited", "exiting"].includes(state)}
                        onClose={() => setOpen(false)}
                        slotProps={{
                            backdrop: {
                                sx: {
                                    opacity: 0,
                                    backdropFilter: "none",
                                    transition: `opacity 400ms, backdrop-filter 400ms`,
                                    ...{
                                        entering: {
                                            opacity: 1,
                                            backdropFilter: "blur(8px)",
                                        },
                                        entered: {
                                            opacity: 1,
                                            backdropFilter: "blur(8px)",
                                        },
                                    }[state],
                                },
                            },
                        }}
                        sx={{
                            visibility:
                                state === "exited" ? "hidden" : "visible",
                        }}
                    >
                        <ModalDialog
                        
                            color="primary"
                            layout="center"
                            size="md"
                            variant="soft"
                            aria-labelledby="fade-modal-dialog-title"
                            aria-describedby="fade-modal-dialog-description"
                            sx={{

                                opacity: 0,
                                transition: `opacity 300ms`,
                                ...{
                                    entering: { opacity: 1 },
                                    entered: { opacity: 1 },
                                }[state],
                            }}
                        >
                            <Typography
                                id="fade-modal-dialog-title"
                                component="h2"
                                textColor={"primary.softBg"}
                            >
                                Transition modal
                            </Typography>
                            <Typography
                                id="fade-modal-dialog-description"
                                textColor="text.tertiary"
                            >
                                Using `react-transition-group` to create a fade
                                animation.
                            </Typography>
                        </ModalDialog>
                    </Modal>
                )}
            </Transition> */}

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography
                            variant="h6"
                            color="gray"
                            textAlign="center"
                        >
                            Create post
                        </Typography>
                        <UserBox>
                            <Avatar
                                src="https://avatars.githubusercontent.com/u/75049983?s=96&v=4"
                                sx={{ width: 30, height: 30 }}
                            />
                            <Typography fontWeight={500} variant="span">
                                NabiL Ashbat
                            </Typography>
                        </UserBox>
                        <TextField
                            sx={{ width: "100%" }}
                            id="standard-multiline-static"
                            multiline
                            rows={3}
                            placeholder="What's on your mind?"
                            variant="standard"
                        />
                        <Stack direction="row" gap={1} mt={2} mb={3}>
                            <EmojiEmotionsRounded color="primary" />
                            <ImageRounded color="secondary" />
                            <VideoCameraBackRounded color="success" />
                            <PersonAddRounded color="error" />
                        </Stack>
                        <ButtonGroup
                            fullWidth
                            variant="contained"
                            aria-label="outlined primary button group"
                        >
                            <Button>Post</Button>
                            <Button sx={{ width: "100px" }}>
                                <DateRangeRounded />
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default AddOld;
