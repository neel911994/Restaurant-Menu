import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories=['all', ...new Set(items.map((item)=>item.category))]

function App() {
  const [category, setCategory] = useState(allCategories);
  const[menu, setMenu]=useState(items);

  const filterItems = (category)=>{
    if(category=== 'all'){
      setMenu(items);
      return;
    }
    const newItems = items.filter((item)=>item.category === category)
    setMenu(newItems)
  }
  return (<main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories menu={filterItems} categories={category}/>
      <Menu items={menu}/>

    </section>
  </main>);
}

export default App;
