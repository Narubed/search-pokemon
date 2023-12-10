/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import CardDetail from './CardDetail'

export default function CardPokemon(props: any) {
    const { pokemon, useFetchFindOne } = props;
    const [isOpen, setOpen] = React.useState<boolean>(false);
    const [isDetail, setDetail] = React.useState<any>({});

    const headleClickDetail = async (props: string) => {
        let data = JSON.stringify({
            query: `query Query {
                query {
                    pokemon(id: "${props}") {
                        id
                        name
                        classification
                        types
                        resistant
                        weaknesses
                        fleeRate
                        maxCP
                        maxHP
                        image
                        evolutions {
                            id
                        }
                        weight {
                            minimum
                            maximum
                        }
                        height {
                            minimum
                            maximum
                        }
                        attacks {
                            fast {
                                name
                                type
                                damage
                            }
                            special {
                                name
                                type
                                damage
                            }
                        }
                    }
                }
            }`
        });
        const response: any = await useFetchFindOne(data);
        await setDetail(response)
        setOpen(true)
    }

    return (
        <Card sx={{ maxWidth: "100%" }}>
            {isDetail &&
                <CardDetail

                    isOpen={isOpen}
                    setOpen={setOpen}
                    isDetail={isDetail}
                    headleClickDetail={headleClickDetail}
                />
            }
            <CardActionArea onClick={() => headleClickDetail(pokemon?.id)}>
                <CardMedia
                    component="img"
                    height="300"
                    image={pokemon?.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Grid style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography gutterBottom variant="h5" component="span">
                            {pokemon?.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {pokemon?.classification}
                        </Typography>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}
