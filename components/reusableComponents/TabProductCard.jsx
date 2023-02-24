// MUI Imports
import { Box, Stack, Typography, Card, CardMedia, CardContent, IconButton, Tooltip, Button } from "@mui/material"

// Icons
import { WhatsAppOutlined } from '@ant-design/icons'




const TabProductCard = () => {
  return (
    <Box>
        <Stack spacing={2}>
            <Box>
                <Stack>
                    <Typography variant="subtitle2">PRODUCTS & MERCHANDISE</Typography>
                    <Typography variant="caption">Buy from Wakadinali or products promoted by Wakadinali</Typography>
                </Stack>
            </Box>
            <Box>
                <Card square>
                    <CardMedia
                        sx={{ height: 320 }}
                        image='/assets/pictures/product.jpg'
                        title="product image"
                    />
                    <CardContent>
                        <Box>
                            <Stack>
                                <Box sx={{display: 'flex', alignItems: 'start', justifyContent: 'space-between'}}>
                                    <Typography className="line-clamp-2 line-clamp" variant="subtitle1">Galactic Earpods</Typography>
                                    <Tooltip title='Order on WhatsApp'>
                                        <IconButton>
                                            <WhatsAppOutlined style={{cursor: 'pointer', fontSize: 20}} />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Stack>
                                    <Typography variant="h6">ksh.3,500</Typography>
                                </Stack>
                                <Stack>
                                    <Typography className="line-clamp-2 line-clamp" variant="body2">Product description goes here jyyiyu uiuhiuh iuiuhiuh iuiuhiuh uiuhiu uhiuhi ygt8ht gyhyu uhuyguygu ugutiuh iyguyguh iyguygiuh</Typography>
                                </Stack>
                                <Box sx={{paddingTop: 2, width: '100%'}}>
                                    <Button fullWidth size="small" variant="contained">Product Details</Button>
                                </Box>
                            </Stack>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Stack>
    </Box>
  )
}

export default TabProductCard