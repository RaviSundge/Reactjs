import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import items from "./Item";
import { Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const Task2 = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [fav, setFav] = useState(false);
  const [favItem, setFavItem] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 100000 });
  useEffect(() => {
    setProducts(items);
  }, []);

  const categoryItem = [
    "All",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  const handleChange = (event) => {
    const filCat = event.target.value;
    setCategory(filCat);
    if (filCat === "All") setProducts(items);
    else {
      const filtered = items.filter((val) => {
        return val.category === filCat;
      });
      setProducts(filtered);
    }
  };
  const handleFav = (item) => {
    setFav(!fav);
    setFavItem([...favItem, item]);
    // console.log(item);
  };
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPrice({ ...price, [name]: value });
  };
  const filterProducts = () => {
    const arr = items.filter((prod) => {
      return (
        prod.price >= price.min &&
        prod.price <= price.max &&
        prod.category === category
      );
    });
    setProducts([...arr]);
  };
  useEffect(() => {
    setProducts();
    filterProducts();
  }, [category]);

  return (
    <>
      <Container>
        <Grid
          container
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
          spacing={2}
        >
          <Grid item md={3}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  {Array.isArray(categoryItem) &&
                    categoryItem.map((val, i) => {
                      return (
                        <MenuItem value={val} key={i + val}>
                          {val}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Box>
            <input type={"number"} name="min" onChange={handlePriceChange} />
            <input type={"number"} name="max" onChange={handlePriceChange} />
            <button onClick={filterProducts}>filter</button>
          </Grid>
          <Grid
            item
            md={9}
            style={{ display: "flex", flexWrap: "wrap", margin: "2" }}
          >
            {Array.isArray(products) &&
              products.map((val, i) => {
                return (
                  <Card
                    sx={{ maxWidth: 345 }}
                    key={val.id + i}
                    style={{
                      border: "2px solid cyan",
                      padding: 10,
                      margin: 10,
                      boxShadow: "5px 5px 5px #888888",
                    }}
                  >
                    <CardHeader
                      title={val.title}
                      subheader={val.category}
                      height="500"
                    />
                    <CardMedia
                      component="img"
                      height="250"
                      image={val.image}
                      width="200"
                      alt={val.title}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.primary">
                        <b>Price:</b> {val.price} $
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        height={100}
                        overflow="auto"
                      >
                        {val.description}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton
                        aria-label="add to favorites"
                        onClick={() => handleFav(val)}
                      >
                        <FavoriteIcon color={fav ? "error" : "inherit"} />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                );
              })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Task2;
