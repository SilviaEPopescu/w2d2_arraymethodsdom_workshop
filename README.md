# Using Array Methods with the DOM

## Task 1:  

In [main.js](main.js), you'll find a list of things you might find kicking around your house:

```js
const things = [
  "nail file",
  "lotion",
  "pool stick",
  "washing machine",
  "box",
  "button",
  "flowers",
  "mouse pad",
  "phone",
  "tomato",
  "cup",
  "remote",
  "eye liner",
  "iPad",
  "picture frame",
  "apple",
  "toothpaste",
  "mirror",
  "piano",
  "bowl",
];
```

👉 1a. Use the relevant array method to make a new filtered array of the items from that list that doesn't contain items that begin with a vowel.

👉 1b. From that array without items that begin with a vowel, use a different array method to make another new array with the first letters of each word capitalised.

👉 1c. For each of the items in that new capitalised array:
- Make a new `li` element
- Give it a class of `"list-item"`
- Add it to the `ul` in [index.html](index.html) which has an id of `"random-things"`

# Task 2:

Now that we've organised your junk drawer in a perfectly logical way, let's move on to the kitchen.

👉 2a. Select all of the `li` elements with the class `"food"` and store them in a variable called `foodList`.

👉 2b. Use an array method to iterate through the list, and for each item, console.log each food item's name (the text content of the `li`) in turn.

👉 2c. Now use the appropriate array method to sort the food list items into alphabetical order and store that in a new variable called `sortedFoodList`.

<details>Hint
<summary>Remember what we talked about in the lecture - at this point, you'll have to do something with the contents of that variable first so you can do this step!</summary>
</details>

👉 2d. You've read about a new trend in the Daily Mail that seems 100% legit that espouses that foods beginning with the letter "c" are unhealthy. Use the appropriate array method to remove the list item of any food whose name begins with "c" from your list, and store that new list in a variable called `healthyFoodList`.

👉 2e. Time to tidy up what's on the page for your foods:

- Use an array method on your original variable (`foodList`) to remove all of the original food list items.
- Now append the food items in your `healthyFoodList` to the `ul` with the id `"kitchen-things"`. Check in your browser, and you should see your updated list instead of the original list.