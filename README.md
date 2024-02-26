# Debugging Toolset for Web Development

This repository contains two essential files designed to aid in the debugging of CSS issues during the development of web interfaces: `debug.css` and `debug.js`. These tools provide visual cues and console outputs to facilitate the identification and resolution of styling issues.

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/akaienso/debug-css) [![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://debug-css.rmoore.dev/debug.css) [![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://debug-css.rmoore.dev/debug.js)

[![BuyMeATaco](https://github.com/akaienso/debug-css/assets/676056/8d14866a-83e6-4fb3-8271-6b2ac4d12a18)](https://t.co/GeMuimFxW2)

## Features

### `debug.css`

- **Outlines for DOM Element Nesting**: Applies distinct colored outlines to elements up to seven levels deep using `box-shadow`. This method ensures the actual dimensions of the elements are not affected.
- **Color-Coded Debugging**: Offers a simple mechanism to apply a faint background color to any element marked with the `debug` class, further differentiated by color codes representing the seven colors of the rainbow (r, o, y, g, b, i, v).

[![debug-css](https://github.com/akaienso/css-debugger/assets/676056/7e0d8871-4ed3-4a12-9914-d3ea10b140bb)](https://ray.so/dselU7w)

### `debug.js`

- **Console Output for Computed Styles**: For any element with the `debug` class, the script outputs the computed CSS values to the browser's console, facilitating a detailed inspection of applied styles.

[![debug-css-js](https://github.com/akaienso/css-debugger/assets/676056/b3144e8a-3a81-4ade-bae2-43a9b0526b9a)](https://ray.so/7aIEjsF)

## Usage

### CSS

Link the `debug.css` file in the `<head>` of your HTML document:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/akaienso/debug-css/debug.css">
```
 or enqueue it in a WordPress plugin or theme:

 ```php
wp_enqueue_style('akaienso-debug-css', 'https://cdn.jsdelivr.net/gh/akaienso/debug-css/debug.css');
```

### JavaScript

Include the `debug.js` script just before the closing `</body>` tag in your HTML document:

```html
<script src="https://cdn.jsdelivr.net/gh/akaienso/debug-css/debug.js"></script>
```

 or enqueue it in a WordPress plugin or theme:

 ```php
wp_enqueue_script('akaienso-debug-js', 'https://cdn.jsdelivr.net/gh/akaienso/debug-css/debug.js', null, null, false);
```

### Applying Debug Classes

Add the `debug` class to any element you wish to inspect, and optionally add a single-letter class (r, o, y, g, b, i, v) to color-code the background for visual inspection:

```html
<div class="flex-row">
  <h3>Level 3: Grandchild</h3>
  <p class="debug b">Responsive item</p>
  <p class="debug g">Responsive item</p>
</div>
```

[![demo-css demo](https://github.com/akaienso/css-debugger/assets/676056/ee862d64-54e9-4674-b2de-4a4265f7a422)](https://debug-css.rmoore.dev/demo/)

## Contribution

Contributions are welcome! If you wish to improve or extend the functionality, please fork this repository, make your changes, and submit a pull request.

## License

This project is open-sourced under the MIT license. Feel free to use, modify, and distribute it as needed. We only ask that you provide attribution back to this repository.
