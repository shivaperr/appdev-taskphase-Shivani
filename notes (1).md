# Week 1 Reading Note

**Article:** [MDN: The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

- Every HTML element is a box made of content, padding, border and margin, from the inside out.
- Padding is space inside the border, while margin is space outside it, between neighbouring boxes.
- By default, width only covers the content, so padding and border make the box bigger than expected.
- Setting `box-sizing: border-box` fixes this by including padding and border in the width, which is why I used it in my CSS.
