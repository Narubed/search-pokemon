import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {
    Grid, CardMedia, Typography, IconButton, Button
} from '@mui/material';
import { Icon } from '@iconify/react';
export default function AlertDialog(props: any) {
    const {
        isOpen,
        setOpen,
        isDetail,
        headleClickDetail
    } = props;

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth="lg"
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} p={1}>
                        <DialogContent >
                            <DialogContentText id="alert-dialog-description">
                                <CardMedia
                                    sx={{ border: '1px solid #FFFFE0' }}
                                    component="img"
                                    // height="500"
                                    image={isDetail?.image}
                                    alt="green iguana"
                                />
                                {isDetail?.evolutions && (
                                    <Button
                                    onClick={()=> headleClickDetail(isDetail?.evolutions[0]?.id)}
                                    color='secondary'
                                    variant="outlined"
                                    sx={{ position: 'absolute', top: "10%", right: '50%' }}>
                                    Next evolutions <Icon icon="grommet-icons:link-next" />
                                </Button>
                                )}
                                
                            </DialogContentText>
                        </DialogContent>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DialogContent>
                            <a style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <DialogContentText id="alert-dialog-description">
                                    <Typography gutterBottom variant="h5" component="span" color="primary">
                                        Pokemon Name : {isDetail?.name}
                                    </Typography>
                                </DialogContentText>
                                <IconButton aria-label="delete" onClick={handleClose} color="error" sx={{ borderRadius: '50%' }}>
                                    <Icon icon="octicon:x-12" />
                                </IconButton>
                            </a>

                            <DialogContentText id="alert-dialog-description" m={1}>
                                <Typography gutterBottom variant="subtitle2" component="span" sx={{ display: "flex", alignItems: "center" }}>
                                    <a style={{ background: 'blue', color: 'white', margin: 2, marginRight: 10, padding: 6, borderRadius: '5px', boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" }}>
                                        MaxCP : {isDetail?.maxCP} {" "}
                                    </a>
                                    <a style={{ background: 'red', color: 'white', margin: 2, padding: 6, borderRadius: '5px', boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" }}>
                                        MaxCP : {isDetail?.maxCP}
                                    </a>
                                </Typography>
                            </DialogContentText>
                            <DialogContentText id="alert-dialog-description" m={1}>
                                <Typography gutterBottom variant="subtitle2" component="span">
                                    Classification : {isDetail?.classification}
                                </Typography>
                            </DialogContentText>
                            <DialogContentText id="alert-dialog-description" m={1}>
                                <Typography gutterBottom variant="subtitle2" component="span" color="primary">
                                    Pokemon Type : {isDetail?.types?.map((item: string) => <a key={item}>{item}  {" "}</a>)}
                                </Typography>
                            </DialogContentText>
                            <DialogContentText id="alert-dialog-description" m={1}>
                                <Typography gutterBottom variant="subtitle2" component="span" color="green" >
                                    Resistant : {isDetail?.resistant?.map((item: string) =>
                                        <a key={item} style={{ margin: 2, padding: 2, borderRadius: '5px', border: '1px solid green' }}>
                                            {item}
                                        </a>
                                    )}
                                </Typography>
                            </DialogContentText>
                            <DialogContentText id="alert-dialog-description" m={1}>
                                <Typography gutterBottom variant="subtitle2" component="span" color="error">
                                    Weaknesses : {isDetail?.weaknesses?.map((item: string) =>
                                        <a key={item} style={{ margin: 2, padding: 2, borderRadius: '5px', border: '1px solid red' }}>{item}</a>
                                    )}
                                </Typography>
                            </DialogContentText>
                            <DialogContentText id="alert-dialog-description" m={1}>
                                <Typography gutterBottom variant="subtitle2" component="span" color="secondary">
                                    Weight : {isDetail?.weight?.minimum} - {isDetail?.weight?.maximum}
                                </Typography>
                            </DialogContentText>
                            <DialogContentText id="alert-dialog-description" m={1}>
                                <Typography gutterBottom variant="subtitle2" component="span" color="lime">
                                    Height : {isDetail?.height?.minimum} - {isDetail?.height?.maximum}
                                </Typography>
                            </DialogContentText>
                            <DialogContentText id="alert-dialog-description" m={1}>
                                <Typography gutterBottom variant="subtitle2" component="span" color="primary">
                                    <a> Attacks : Fast</a>
                                </Typography>
                                <br />
                                {isDetail?.attacks?.fast?.map((item: any) =>
                                    <a key={item.name} style={{ margin: 2, padding: 2 }}>
                                        <Button variant="contained" disabled sx={{ fontSize: '10px', mt: 1 }}>
                                            Name : {item.name} <br />
                                            Type : {item.type} <br />
                                            Damage : {item.damage}
                                        </Button>
                                    </a>
                                )}
                            </DialogContentText>
                            <DialogContentText id="alert-dialog-description" m={1}>
                                <Typography gutterBottom variant="subtitle2" component="span" color="secondary">
                                    <a> Attacks : Special</a>
                                </Typography>
                                <br />
                                {isDetail?.attacks?.special?.map((item: any) =>
                                    <a key={item.name} style={{ margin: 2, padding: 2 }}>
                                        <Button variant="contained" disabled sx={{ fontSize: '10px', mt: 1 }}>
                                            Name : {item.name} <br />
                                            Type : {item.type} <br />
                                            Damage : {item.damage}
                                        </Button>
                                        {" "}
                                    </a>
                                )}
                            </DialogContentText>
                        </DialogContent>
                    </Grid>
                </Grid>
            </Dialog>
        </React.Fragment>
    );
}