# Image Carousel with CSS Keyframes Animation

## Description
This project demonstrates a responsive and elegant image carousel built using **HTML** and **CSS**. The carousel smoothly transitions through multiple background images in an infinite loop, providing a visually appealing gallery effect. It's lightweight, simple, and adaptable to different screen sizes.

## Features
- **Responsive Design**: Uses flexible units (`vw`, `vh`, `rem`) for compatibility across devices.
- **Smooth Animations**: Implements CSS `@keyframes` for seamless image transitions.
- **Polished UI**: Includes shadows and rounded corners for a professional look.
- **Lightweight**: Pure HTML and CSS with no external libraries.



## Usage
1. Clone or download this repository.
2. Open the `index.html` file in any modern browser.

## Code Highlights
- **Keyframes Animation**:
  ```css
  @keyframes gallery {
    0% { background-image: url("image1.jpg"); }
    20% { background-image: url("image2.jpg"); }
    40% { background-image: url("image3.jpg"); }
    60% { background-image: url("image4.jpg"); }
    80% { background-image: url("image5.jpg"); }
    100% { background-image: url("image6.jpg"); }
  }
  ```
- **Responsive Container**:
  ```css
  .container-img {
    width: 60vw;
    height: 50rem;
    border-radius: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-size: cover;
  }
  ```

## Customization
- Replace the `background-image` URLs in the `@keyframes` animation with your own images.
- Adjust the animation duration (`20s`) to change the speed of the transitions.
- Modify the container size (`width`, `height`) as needed.

## Technologies Used
- **HTML5**
- **CSS3**


