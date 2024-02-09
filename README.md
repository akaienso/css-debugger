# Debugging Toolset for Web Development

This repository contains two essential files designed to aid in the debugging of CSS issues during the development of web interfaces: `debug.css` and `debug.js`. These tools provide visual cues and console outputs to facilitate the identification and resolution of styling issues.

**Direct Download:** [`debug.css`](https://debug-css.rmoore.dev/debug.css) | [`debug.js`](https://debug-css.rmoore.dev/debug.js)

**Direct Download:** <a id="raw-url" href="https://raw.githubusercontent.com/akaienso/debug-css/main/debug.css" download>`debug.css`</a> or <a id="raw-url" href="https://raw.githubusercontent.com/akaienso/debug-css/main/debug.js" download>`debug.js`</a>
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
<link rel="stylesheet" href="path/to/debug.css">
```


### JavaScript

Include the `debug.js` script just before the closing `</body>` tag in your HTML document:

```html
<script src="path/to/debug.js"></script>
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
