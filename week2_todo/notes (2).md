# Week 2 Reading Notes

**Article:** [MDN: DOM scripting introduction](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting)

## What I learned

- When a browser opens an HTML file, it builds the DOM, a tree of objects in memory with one object per tag. The screen is drawn from that tree, not from the file itself. That is why refreshing the page resets everything.
- JavaScript can find an element with `document.querySelector()`, change it (for example with `textContent` or `classList`), create new elements with `document.createElement()`, and remove them with `.remove()`.
- Changing a JavaScript variable does not change the screen. The browser only redraws when the DOM changes, so every time my data changes (a task is added, ticked or deleted), I also have to write the matching DOM line, such as updating the counter.
- `addEventListener()` is how the Add, checkbox and Delete elements react to the user. The function I pass in runs when the event (like `click` or `submit`) happens.

## How this shows up in my To-Do app

- **Add** creates a new `<li>` and attaches it to the `<ul>`.
- **Tick** toggles a `completed` class on the `<li>`, which CSS turns into a strike-through.
- **Delete** removes the `<li>` from the tree.
- **Counter** is one element whose `textContent` I update after every change.
