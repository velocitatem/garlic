# Garlic 🧄🧛

Garlic is a simple, fast and secure way to protect your website from being scraped by bots.


---

You write your code and text as you would any other day, just let garlic protect your content from scraping.

| POV          | Result                                |
|--------------|---------------------------------------|
| You Write    | `<p>This is a test piece of text</p>` |
| Scraper Sees | ![final](https://raw.githubusercontent.com/velocitatem/garlic/main/media/final.png)           |
| User Sees    | ![user](https://raw.githubusercontent.com/velocitatem/garlic/main/media/user.png)             |

# Try Now!

1. Go to this website: https://garlic-astro.netlify.app/
2. You will see normal text the way it should be
3. Run the following command: `wget https://garlic-astro.netlify.app/`
4. Open the index.html
5. You will see the encoded text :)



# How?
Currently, this is in development, but the beta works like this:

## React

Install the packages with `npm i garlic-react`, you should then import the `Garlic` class with:

```js
import Garlic from 'garlic';
```

You just need to wrap your html in the `Garlic.clove` method:

```js
function App() {
  return Garlic.clove(
          <div className="App">
            <p>Go away robots :)</p>
          </div>
  );
};
```

Go to `index.js` or anywhere before render. Add the following line of code:

```js
Garlic.peal(document);
```

And all is done!

## Astro

install the package with `npm i garlic-astro`. With Astro, you just need to import the `Garlic` and `Clove` components into your layout:

```astro
import {Garlic, Clove} from 'garlic-astro';
---
<Garlic>
<!DOCTYPE html>
  <html lang="en">
      <head>
          <title>{title}</title>
      </head>
      <body>
        <Clove>
          <slot />
        </Clove>
      </body>
  </html>
</Garlic>
```

Ideally, `Garlic` should wrap the entire page, and `Clove` should wrap the content you want to protect. You can also use `Clove` multiple times, if you want to protect different parts of your page.

You can then use the layout in `.astro` or `.mdx` files, and the content will be protected.


# Why?
AI needs data, your website might end-up in the dataset it uses for training. Dont want that? Garlic should help :)

## Stargazers over time

[![Stargazers over time](https://starchart.cc/velocitatem/garlic.svg)](https://starchart.cc/velocitatem/garlic)
