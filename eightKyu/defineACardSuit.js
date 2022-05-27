// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
  let suit = ''
  if(card.includes('♣')){
    suit = 'clubs'
  } else if(card.includes('♦')) {
    suit = 'diamonds'
  }else if(card.includes('♥')) {
    suit = 'hearts'
  }else if (card.includes('♠')){
    suit = 'spades'
  }
  return suit
  }