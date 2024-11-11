# Futuristic Space Station 

## Description

The Futuristic Space Station with Ketu Background is an interactive, animated 3D visualization created using HTML, CSS, and minimal JavaScript. This project showcases advanced CSS techniques, including 3D transforms, animations, and responsive design. The space station features six rotating modules representing different aspects of Ketu, a celestial body in Vedic astrology.

## Features

- **3D Rotating Space Station**: A fully animated 3D space station that rotates smoothly.
- **Interactive Modules**: Six clickable modules with hover effects, each representing a different aspect of Ketu.
- **Ketu Background**: A captivating background image of Ketu, adding depth to the visualization.
- **Responsive Design**: Adapts to different screen sizes, including mobile devices.
- **Pure CSS Animations**: All animations are implemented using CSS, demonstrating the power of modern CSS capabilities.
- **Twinkling Star Background**: A dynamic starfield created using JavaScript for an immersive space environment.
- **Accessibility Considerations**: Includes options for reduced motion.

## Modules

1. 7 (Ketu's number)
2. Renunciation
3. Uncertainty
4. Vindictive
5. Isolation
6. Spirituality

## Technologies Used

- HTML5
- CSS3
- JavaScript (for star generation only)



## Customization

You can easily customize the space station by modifying the CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #00ffff;
    --secondary-color: #ff00ff;
    --background-color: #000033;
}
```

Adjust these values to change colors and the overall appearance of the space station.

## Responsive Design

The space station is designed to be responsive:

- On larger screens, it displays at full size (300px x 300px).
- On screens smaller than 600px wide, it automatically scales down (200px x 200px) for better visibility on mobile devices.

## Accessibility

This project includes a media query for users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
    .space-station, .module::before, .star {
        animation: none;
    }
}
```

This ensures that users who are sensitive to motion can still enjoy the space station without animations.


## Author

Tushar Mishra

## Acknowledgments

- Inspiration: Vedic astrology and futuristic space concepts
- CSS 3D Transforms: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d)

---

Explore the mystical aspects of Ketu through this interactive Futuristic Space Station! 🚀✨