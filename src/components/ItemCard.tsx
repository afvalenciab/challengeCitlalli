import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Switch,
    FormGroup,
    FormControlLabel,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import * as actionsData from '../store/actions/AData';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ItemCard({ product }: any) {
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);
    const [checked, setChecked] = useState(
        product.availability === 'AVAILABLE' ? true : false
    );

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // setChecked(event.target.checked);
        const payload = {
            productId: product.uuid,
            availability: event.target.checked,
            setChecked,
        };
        dispatch(actionsData.updateProductRequest(payload));
    };

    return (
        <Card>
            <CardMedia
                component="img"
                height="160"
                image={product.imageUrl}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" noWrap>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                color="secondary"
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        }
                        label="Disponible"
                    />
                </FormGroup>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{product.description}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
