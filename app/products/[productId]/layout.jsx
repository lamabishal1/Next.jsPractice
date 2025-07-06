export default function ProductDetailsLayout({ children }) {

  function getRandomInt({number}) {
  return Math.floor(Math.random() * number);
}
const random = getRandomInt({number: 2});
if (random === 1){
    throw new Error( "Error loading product.");
  }
    return  (
    <section>
      
      {children}
      <h2>Featured products</h2>
    </section>
    );
}