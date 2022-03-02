import { ReactNode, useState, SyntheticEvent } from 'react';
import { Tabs, Tab, Box, Grid } from '@mui/material';
import ItemCard from './ItemCard';

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
    category: string;
    products: Array<any>;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, products, category, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Grid
                    container
                    spacing={2}
                    paddingTop={'2rem'}
                    style={{
                        padding: '2rem',
                    }}
                >
                    {products.map((product: any, index: number) => {
                        return product.category.name === category ? (
                            <Grid
                                key={`${product.name}-${index}`}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                            >
                                <ItemCard product={product} />
                            </Grid>
                        ) : null;
                    })}
                </Grid>
            )}
        </div>
    );
}

function a11yProps(index: string) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ products, categories }: any) {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }} color="pink">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    {categories.map((category: any, index: number) => {
                        const key: string = `${category}-${index}`;
                        return (
                            <Tab
                                label={category}
                                key={key}
                                {...a11yProps(key)}
                            />
                        );
                    })}
                </Tabs>
            </Box>
            {categories.map((category: any, index: number) => (
                <TabPanel
                    key={`${category}-${index}-tab`}
                    value={value}
                    index={index}
                    products={products}
                    category={category}
                />
            ))}
        </Box>
    );
}
