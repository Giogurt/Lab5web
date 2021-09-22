import "./index.css";
import { Grid, Paper, Typography } from "@material-ui/core";

/**
 * Product Info component
 * @return {string} - HTML markup for the component
 */
const ProductInfo = () => {
  return (
    <div className="productInfo">
                
      <Grid container className="productGrid" spacing={2}>
                
        <Grid item lg={4} container>
          <Grid item lg={12}>
            <Paper className="largeImage">
                                
              <img
                src="https://dummyimage.com/500x500/000/0011ff"
                alt="dummy large"
              />
                            
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <Paper className="mediumImage">
                                
              <img
                src="https://dummyimage.com/250x250/000/0011ff"
                alt="dummy medium"
              />
                            
            </Paper>

            <Grid item lg={6}>
              <Paper className="smallImage">
                                  
                <img
                  src="https://dummyimage.com/100x100/000/0011ff"
                  alt="dummy small"
                />
                              
              </Paper>
            </Grid>
          </Grid>
                        
        </Grid>
        <Grid item lg={8} container>
          <Grid item lg={12}>
             
            <Typography className="productName" variant="h1">
              Levi's 501 Original Fit Jeans Jeans para Hombre
            </Typography>
                 
          </Grid>
           
          <Grid item lg={12}>
            <Typography>
              100% algodón, Cierre de Cremallera, Lavar a máquina, Jeans corte ajustado, Pierna ajustada, Stretch especial que te brinda mayor movilidad
            </Typography>
          </Grid>
           
          <Grid item lg={2}>
              
            <Typography className="dollars crossedout">1027.24</Typography>   
                            
          </Grid>
          <Grid item lg={2}>
              
            <Typography className="dollars">706.93</Typography>   
                            
          </Grid>
             
          <Grid item lg={12} container direction="column">
            <Grid item lg={2}>
              <Typography>200 on hand</Typography>                    
            </Grid>

            <Grid item lg={2}>
              <Typography>color: black</Typography>                    
            </Grid>

            <Grid item lg={2}>
              <Typography>size: 29W X 32L</Typography>                    
            </Grid>
          </Grid>
                                   
        </Grid>
      </Grid>
    </div>
  );
};
export default ProductInfo;
