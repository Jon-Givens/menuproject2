import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system';
import { Divider} from '@mui/material';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <Box align="center" mt={5} >
          <Typography variant="h3" style={{fontWeight: 'bold'}}>Our Menu</Typography>
          <Divider sx={{width: 100, height: 5}} color="#c59d5f"></Divider>
        </Box>

        <Categories
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
            />

        <Menu items={menuItems} />

      </section>
    </main>
  )
}

export default App;

