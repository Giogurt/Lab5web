import React from "react";
import './App.css';
import ProductDetail from './containers/ProductDetail';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar, Typography } from "@material-ui/core";

const App = () => {
  return (
    <React.Fragment>
      <AppBar >
          <Typography variant="h3" > Best Ecommerce</Typography>
      </AppBar>
      <CssBaseline />
      <ProductDetail/>
    </React.Fragment>
  );
}

export default App;