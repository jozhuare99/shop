import People, {ExpertScientist, List2 , List3, List4} from './people'
import RecipeList, {ExtractRecipeComponent} from './recipe'


function Item({name, isPacked}){ 
    return (
     <li className='item'>
       {/* {isPacked ? name+ ' ✔':name} */}
        {name} {isPacked && '✔'}
        </li>
        )


}
export default function PackingList(){
    return(
        <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
        <Item isPacked={true} name='Space Suit' />
        <List2 />
        <Item isPacked={true} name='Helmet with GOlden Leaf' />
        <ExpertScientist />
        <Item isPacked={false} name='Photo of Tam' />
        <People />
        </ul>
        </section>
    )
}

  
  export function PackingList2() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item2 
            importance={9} 
            name="Space suit" 
          />
          <List3/>
          <Item2 
            importance={0} 
            name="Helmet with a golden leaf" 
          />
          <List4/>
          <Item2 
            importance={6} 
            name="Photo of Tam" 
          />
          <RecipeList/>
          
        </ul>
      </section>
    );
  }
  

  
function Item2({ name, importance }) {
    
    return (
      <li className="item">
      {name}
      {importance > 0 && ' '}
      {importance > 0 &&
        <i>(Importance: {importance})</i>
      }
      </li>
    );
  }
  const drinks = {
    tea: {
      part: 'leaf',
      caffeine: '15–70 mg/cup',
      age: '4,000+ years'
    },
    coffee: {
      part: 'bean',
      caffeine: '80–185 mg/cup',
      age: '1,000+ years'
    }
  };
  
  function Drink({ name }) {
    const info = drinks[name];
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{info.part}</dd>
          <dt>Caffeine content</dt>
          <dd>{info.caffeine}</dd>
          <dt>Age</dt>
          <dd>{info.age}</dd>
        </dl>
      </section>
    );
  }
  
  export function DrinkList() {
    return (
      <div>
        <ExtractRecipeComponent/>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }