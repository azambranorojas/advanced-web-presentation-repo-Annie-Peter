import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
// import SquirrelCard from './components/SquirrelCard'; 
// import squirrelData from './squirreldata';

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    );
  });

  // Create squirrel cards constant here

  return (
    <div>
      <Navbar />
      <h1>React Duck Demo</h1>
      <section className="cards-list">
        {cards}
      </section>
      
      <h1>Squirrel Showcase</h1> 
      {/* implement squirrel card section */}
    </div>
  );
}

