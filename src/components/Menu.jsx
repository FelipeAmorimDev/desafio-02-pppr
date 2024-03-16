import { Burger } from './Burger'

export function Menu() {
  const burgers = [
    {
      id: crypto.randomUUID(),
      name: 'Duo',
      ingredients:
        'Pão selado na manteiga, hambúrguer BOVINO de 160gr, cheddar, cebola caramelizada e molho especial',
      price: 37,
      photoName: 'img/burgers/duo.jpg',
      soldOut: false,
    },
    {
      id: crypto.randomUUID(),
      name: 'Kids',
      ingredients:
        'Burger de blend de cogumelos e mandioca, abacaxi caramelizado, muçarela, alface, tomate e molho verde',
      price: 29,
      photoName: 'img/burgers/kids.jpg',
      soldOut: false,
    },
    {
      id: crypto.randomUUID(),
      name: 'Master',
      ingredients:
        'Pão selado na manteiga, hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue',
      price: 51,
      photoName: 'img/burgers/master.jpg',
      soldOut: false,
    },
    {
      id: crypto.randomUUID(),
      name: 'Monster',
      ingredients:
        'Pão selado na manteiga, 2x hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue',
      price: 47,
      photoName: 'img/burgers/monster.jpg',
      soldOut: false,
    },
    {
      id: crypto.randomUUID(),
      name: 'Prime',
      ingredients:
        'Pão selado na manteiga, hambúrguer de CARNE DE SOL de 160gr, queijo coalho, bacon, alface, tomate, cebola roxa e melaço de cana',
      price: 43,
      photoName: 'img/burgers/prime.jpg',
      soldOut: true,
    },
    {
      id: crypto.randomUUID(),
      name: 'Slim',
      ingredients:
        'Pão selado na manteiga, hambúrguer CUPIM de 180gr, 2 fatias de muçarela, alface, tomate, picles de cebola roxa e molho especial de alho',
      price: 27,
      photoName: 'img/burgers/slim.jpg',
      soldOut: false,
    },
  ]

  return (
    <div className="menu">
      <h2>CARDÁPIO</h2>
      <p>
        Depois de uma semana desafiadora, nada melhor do que saborear um burger
        onde cada mordida é um abraço saboroso, não é mesmo?🍔✨
      </p>

      <div className="burgers">
        {burgers.map((burger) => {
          return <Burger key={burger.id} {...burger} />
        })}
      </div>
    </div>
  )
}
