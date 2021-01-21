require('module-alias/register');

const { 
  foldMap, 
  requiresNumber, 
  requiresBoolean
} = require('@/utils');

/* Core */
const Just = (v) => ({ 
  map: (fn) => Just(fn(v)), 
  chain: (fn) => fn(v), 
  ap: (other) => other.map(v)
});

const Nothing = () => ({
  map: Nothing,
  chain: Nothing,
  ap: Nothing
});

const Maybe = {
  Just,
  Nothing,
  of: Just
};

const Product = (x) => 
  requiresNumber(x) && ({
    x,
    concat: other => 
        Product(x * other.x)
  });

Product.empty = () => Product(1);
Product.fold = foldMap(Product);


const Any = x => 
  requiresBoolean(x) && ({
    x,
    concat: other => 
        Any(x || other.x)
  });

Any.empty = () => Any(false);
Any.fold = foldMap(Any);

const All = x => 
  requiresBoolean(x) && ({
    x,
    concat: other => 
        All(x && other.x)
  });

All.empty = () => All(false);
All.fold = foldMap(All);

const Sum = x => 
  requiresNumber(x) && ({
    x,
    concat: other => 
        Sum(x + other.x)
  });

Sum.empty = () => Sum(0);
Sum.fold = foldMap(Sum);

module.exports = {
  Sum,
  Product,
  Any,
  All,
  Just,
  Nothing,
  Maybe
};