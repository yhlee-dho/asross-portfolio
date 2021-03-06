# asross-portfolio

## Check this

- https://www.robertcooper.me/
- . directory 👀
- src/components/animatedgridlines.tsx and src/utils/context
- animated-grid-lines

## Detect Outdated Browser (IE11) via CDN injection

- https://github.com/UnlyEd/next-right-now/tree/v2-mst-aptd-gcms-lcz-sty/public/static/CDN
- https://unlyed.github.io/next-right-now/

## Next Framer Page Transitions

- https://github.com/JoseRFelix/page-transition-tutorial/tree/master/nextjs
- https://dev.to/joserfelix/page-transitions-in-react-1c8g

## Sourcemaps - WithSentry

- https://github.com/vercel/next.js/issues/11642
- https://github.com/vercel/next.js/tree/canary/examples/with-sentry

## Sitemaps

- with TS https://www.pkj.no/p/nextjs-generating-a-sitemap-from-dynamic-content
- Successfully generated 10-7-20
- Revisit generating static slugs associated with dynamic routes
- https://github.com/vercel/next.js/issues/9051
- https://leerob.io/blog/nextjs-sitemap-robots
- https://github.com/BrunoBernardino/nextjs-boilerplate-faunadb-elasticsearch/blob/dd723c8d1066401a6a28989fffade0b25b0b509e/vercel.json#L33-L43
- https://github.com/vercel/next.js/discussions/12403
- https://github.com/vercel/next.js/issues/9051
- https://github.com/iamvishnusankar/next-sitemap
- https://github.com/vercel/next.js/tree/canary/examples/with-next-sitemap

## crawlers

- https://github.com/arunoda/bulletproof-next-app/tree/sitemaps-and-robots-5/lib
- https://getstarted.sh/bulletproof-next/sitemaps-and-robots/1

## COnfigured prettier pre-commit husky hook

- https://andrewross.dev

## Other Domains Linked to this Repository

- https://www.andrewross.dev
- https://andrewross.wtf
- https://www.andrewross.wtf
- https://andrewross.tech
- https://www.andrewross.tech
- https://www.andrewross.engineer
- https://andrewross.engineer
- https://www.asross311.com
- https://asross311.com
- https://asross-portfolio.vercel.app

## Headless CMS

- https://medium.com/@dcorreab/a-brief-introduction-to-a-headless-cms-app-next-js-apollo-and-contentful-with-graphql-7ed5a8168e29

## Prettier Locally Targeted

```git
yarn add -D prettier --save-exact
yarn add -D pretty-quick
```

```.prettierignore
# Ignore Artifacts
node_modules
.next
.vercel
.vscode
yarn-error.log
yarn.lock
patches
public
.VSCodeCounter
_about
_blog
_posts

```

```json
{
	"python.pythonPath": "/usr/local/bin/python3",
	"workbench.sideBar.location": "left",
	"open-in-browser.default": "Google Chrome",
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"files.autoSave": "afterDelay"
}
```

- create a .prettierignore file

- Scripts and Husky in package.json should resemble the following

```json
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start",
		"analyze": "ANALYZE=true yarn build",
		"postinstall": "npx patch-package",
		"prettier-check": "prettier --config .prettierrc --check .",
		"prettier-write": "prettier --config .prettierrc --write ."
	},
	"husky": {
		"hooks": {
			"pre-commit": "pretty-quick --staged"
		}
	},
```

## Favicon generator

- favicon generator: https://favicon.io/favicon-converter/

## Feather - Simply Beautiful Open Source Icons

- https://feathericons.com/

## React-Spring

- https://github.com/pmndrs/react-spring
- https://www.react-spring.io/docs/hooks/use-spring
- Bypass `duration-...` calls

## TS Operators

- https://github.com/typescript-cheatsheets/react#troubleshooting-handbook-operators
- from https://github.com/pmndrs/react-spring/blob/v9/packages/types/interpolation.d.ts

```ts
import { Arrify, Constrain } from './util';
import { Animatable } from './animated';

export type EasingFunction = (t: number) => number;

export type ExtrapolateType = 'identity' | 'clamp' | 'extend';

export interface InterpolatorFactory {
	<In, Out>(interpolator: InterpolatorFn<In, Out>): typeof interpolator;

	<Out>(config: InterpolatorConfig<Out>): (input: number) => Animatable<Out>;

	<Out>(
		range: readonly number[],
		output: readonly Constrain<Out, Animatable>[],
		extrapolate?: ExtrapolateType
	): (input: number) => Animatable<Out>;

	<In, Out>(...args: InterpolatorArgs<In, Out>): InterpolatorFn<In, Out>;
}

export type InterpolatorArgs<In = any, Out = any> =
	| [InterpolatorFn<Arrify<In>, Out>]
	| [InterpolatorConfig<Out>]
	| [
			readonly number[],
			readonly Constrain<Out, Animatable>[],
			(ExtrapolateType | undefined)?
	  ];

export type InterpolatorFn<In, Out> = (...inputs: Arrify<In>) => Out;

export type InterpolatorConfig<Out = Animatable> = {
	/**
	 * What happens when the spring goes below its target value.
	 *
	 *  - `extend` continues the interpolation past the target value
	 *  - `clamp` limits the interpolation at the max value
	 *  - `identity` sets the value to the interpolation input as soon as it hits the boundary
	 *
	 * @default 'extend'
	 */
	extrapolateLeft?: ExtrapolateType;

	/**
	 * What happens when the spring exceeds its target value.
	 *
	 *  - `extend` continues the interpolation past the target value
	 *  - `clamp` limits the interpolation at the max value
	 *  - `identity` sets the value to the interpolation input as soon as it hits the boundary
	 *
	 * @default 'extend'
	 */
	extrapolateRight?: ExtrapolateType;

	/**
	 * What happens when the spring exceeds its target value.
	 * Shortcut to set `extrapolateLeft` and `extrapolateRight`.
	 *
	 *  - `extend` continues the interpolation past the target value
	 *  - `clamp` limits the interpolation at the max value
	 *  - `identity` sets the value to the interpolation input as soon as it hits the boundary
	 *
	 * @default 'extend'
	 */
	extrapolate?: ExtrapolateType;

	/**
	 * Input ranges mapping the interpolation to the output values.
	 *
	 * @example
	 *
	 *   range: [0, 0.5, 1], output: ['yellow', 'orange', 'red']
	 *
	 * @default [0,1]
	 */
	range?: readonly number[];

	/**
	 * Output values from the interpolation function. Should match the length of the `range` array.
	 */
	output: readonly Constrain<Out, Animatable>[];

	/**
	 * Transformation to apply to the value before interpolation.
	 */
	map?: (value: number) => number;

	/**
	 * Custom easing to apply in interpolator.
	 */
	easing?: EasingFunction;
};
```

```txt
typeof and instanceof: type query used for refinement
keyof: get keys of an object
O[K]: property lookup
[K in O]: mapped types
+ or - or readonly or ?: addition and subtraction and readonly and optional modifiers
x ? Y : Z: Conditional types for generic types, type aliases, function parameter types
!: Nonnull assertion for nullable types
=: Generic type parameter default for generic types
as: type assertion
is: type guard for function return types
Conditional Types are a difficult topic to get around so here are some extra resources:

fully walked through explanation https://artsy.github.io/blog/2018/11/21/conditional-types-in-typescript/
Bailing out and other advanced topics https://github.com/sw-yx/ts-spec/blob/master/conditional-types.md
Basarat's video https://www.youtube.com/watch?v=SbVgPQDealg&list=PLYvdvJlnTOjF6aJsWWAt7kZRJvzw-en8B&index=2&t=0s
```

## Sitemap generation

- https://github.com/jplhomer/site/blob/master/scripts/generate-sitemap.js
- next.config.js

```js
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [require('remark-slug')]
	}
});
const withSvgr = require('next-svgr');
const withPlugins = require('next-compose-plugins');
module.exports = withPlugins(
	withMDX({
		webpack: (config, { isServer }) => {
			if (isServer) {
				require('./scripts/generate-sitemap');
			}

			return config;
		}
	})
);
```

## React-TS Hooks

- https://github.com/typescript-cheatsheets/react#context
- note: consider using amVim extension for VIM in VSCODE

## Framer Motion Page Animations on load

- https://reacttricks.com/animating-next-page-transitions-with-framer-motion/
- https://www.framer.com/api/motion/examples/
- Quality examples (tsx)
- https://codesandbox.io/s/framer-motion-viewport-scroll-and-svg-path-animation-mwi35?fontsize=14&module=/src/Example.tsx&file=/src/Example.tsx

## Tailwind Dark Mode

- https://mayashavin.com/articles/dark-theme-tailwind-nuxt

## Configure method to reveal user ISP

- https://www.3whitehats.com/knowledge/how-to-get-service-provider-back-in-google-analytics

## Google Analytics Added

- https://github.com/react-ga/react-ga
- https://github.com/react-ga/react-ga/blob/master/demo/app/Events.jsx
- https://coderrocketfuel.com/article/add-google-analytics-to-a-next-js-and-react-website
- https://analytics.google.com/analytics/web/#/a177780141w246030893p228624158/admin/tracking/tracking-code/

## GA Events + TS

- https://kellenfujimoto.com/posts/strongly-typed-google-analytics-events/

## Social Extended Types Mapping

- https://stackoverflow.com/questions/60284442/react-ts-how-to-map-through-fontawesome-icons-and-display-them

## React Animations

- https://dev.to/joserfelix/getting-started-with-react-animations-308a

## Dark Mode React App Aug 5, 2020

- https://www.carlrippon.com/implementing-dark-mode-in-a-react-app-with-css-properties/

## Smooth Scrolling React Library (alternative to global html css call scroll-behavior: smooth)

- https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react

## Mobile-Detect and React-Sizes

- https://stackoverflow.com/questions/55394365/conditional-rendering-on-server-side
- https://www.npmjs.com/package/mobile-detect
- https://www.npmjs.com/package/react-sizes

## Conditionally render by device type

- https://stackoverflow.com/questions/55394365/conditional-rendering-on-server-side
- https://medium.com/applike/https-medium-com-applike-react-responsive-conditional-rendering-of-component-c97ab247097d
- https://github.com/applike/react-responsive
- https://www.npmjs.com/package/responsive-react
- https://www.npmjs.com/package/typed-responsive-react

### TS interfaces vs Types

- https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types
-

### TS Classes vs interfaces

- https://passionfordev.com/typescript-classes-vs-interfaces/
- https://stackoverflow.com/questions/40973074/difference-between-interfaces-and-classes-in-typescript
- https://stackoverflow.com/questions/12764247/typescript-interface-vs-class-vs-modules-vs-program-vs-function

nextjs portfolio

## To-do

- About section beneath portfolio items
  - Sub routed About
- Sub-routing for blog
- everything is blue toggle for global theme shift
- style it out
  - screen size dependent refactoring for xs:sm:md:lg:xl/portrait vs landscape etc etc
- ship!

## odd/even offset columns

- 108px in height
- 32px gap-x (2.2284 vw)
- 1232px frame
- 328px mobile frame
- one card per row (mobile)
- 40px gap-y
- coverphoto height 37.5em

### VW conversions for cards (md or larger viewport)

- 2.2284vw gap-x
- 600 px in a 1436px viewport -> 41.7827vw
- px -> 7.1031vw

## About section

- aboutOffsetPR - 7.7994vw
- aboutGapX - 8.9136vw
- HFA column-right pt - 6.6852vw
- description text (48pt) - 3.3426vw
- header text (200pt) - 13.9276vw;
- image
  - 300x300px width - 20.8914vw
  - 400x536px width - 27.8552vw
  - 600x600px width - 41.7827vw

## Z-index tailwind

- https://tailwindcss.com/docs/z-index#negative-values

## Window Size

- https://usehooks.com/useWindowSize/
- https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook

## Sitemaps in nextjs

- https://github.com/axross/kohei.dev/blob/9a396055f59a8ef8428b80b3682a38afb33c351d/pages/sitemap.xml.ts

## Tips of nextjsv9 with typescript

- https://www.kohei.dev/posts/7-tips-of-next-js-9-with-typescript?hl=en-US

## Tailwind Templates

- https://www.codeinwp.com/blog/tailwind-css-templates/

## Notes

- Drop me a line
  - a tag -- href="mailto:andrew@windycitydevs.io" style="transform: translate3d(0px, 0%, 0px)"
- Opens email so they can email right away
- Call out what specialize in
- Helvetica New
- Goudy Bookletter 1911
- 1232 grid on a 1440
- 77em (1232px &rarr; grid width, xl viewport)
- 600x600 squares
- will be a 6.5 em offset between col 1 and col 2 for projects

```xml
<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32.5" cy="32.5" r="31.5" stroke="#151515" stroke-width="2"/>
<path d="M30.116 39H32.816L27.956 26.238H25.076L20.18 39H22.808L23.87 36.084H29.054L30.116 39ZM26.462 28.992L28.226 33.816H24.698L26.462 28.992ZM40.7482 39H43.5202L40.7842 33.78C42.4582 33.294 43.5022 31.944 43.5022 30.162C43.5022 27.948 41.9182 26.238 39.4342 26.238H34.4482V39H36.9502V34.086H38.2462L40.7482 39ZM36.9502 31.944V28.398H38.9662C40.2262 28.398 40.9642 29.1 40.9642 30.18C40.9642 31.224 40.2262 31.944 38.9662 31.944H36.9502Z" fill="#151515"/>
</svg>
```

## Typography themes for utils

- https://kyleamathews.github.io/typography.js/
- - https://tailwindcss.com/docs/typography-plugin
- Jose Felix
  - https://dev.to/joserfelix/using-react-spring-to-animate-svg-icons-dark-mode-toggle-2c86
  - https://dev.to/joserfelix/kick-start-your-newsletter-mailchimp-custom-form-with-react-og5
  - https://dev.to/joserfelix/dynamic-theme-switching-in-ant-design-how-to-change-between-light-and-dark-themes-5b8p
  - https://dev.to/joserfelix/how-to-make-text-match-any-background-color-1n0f

```git
yarn add typography-theme-sutro typeface-merriweather typeface-open-sans
```

## Mailchimp for contact page

- https://dev.to/joserfelix/kick-start-your-newsletter-mailchimp-custom-form-with-react-og5

## lquip 86'd over security vulnerability

- removed lquip-loader package as it flagged a high security vulnerability alert (regex)
- https://github.com/cyrilwanner/next-optimized-images#optimization-packages

## Markdown

- https://dev.to/joserfelix/how-to-make-a-static-blog-with-next-js-2bd6**
- https://dev.to/jfelx/how-to-make-a-static-blog-with-next-js-2bd6
- https://github.com/vriad/devii
- https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/

## SCSS + Tailwind

- https://nextjs.org/blog/next-9-3#built-in-sass-css-module-support-for-component-level-styles
- https://codeburst.io/next-js-boilerplate-with-tailwindcss-and-sass-ecc1df90f501

## Add several components to bitsrc.io

- https://blog.bitsrc.io/react-typescript-cheetsheet-2b6fa2cecfe2

## Patching Node_Modules

- https://stackoverflow.com/questions/13300137/how-to-edit-a-node-module-installed-via-npm

```git
npx patch-package @fortawesome/fontawesome-common-types
```

- then, add the following to scripts in package.json

```
"postinstall": "npx patch-package"
```

- https://www.aristidebenoist.com/

- 09/05/20
- https://github.com/vercel/next.js/discussions/14810

```tsx
import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};


const Navbar = () => {
   const isBreakpoint = useMediaQuery(768)
   return (
    <div>
      { isBreakpoint ? (
        <div>
          <HamburgerMenu />
        </div>
      ) : (
        <div>
           <FullMenu />
        </div>
   )
)}

export default Navbar;
```
