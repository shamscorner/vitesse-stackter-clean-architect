---
title: About
---

<div class="text-center">
  <!-- You can use Vue components inside markdown -->
  <carbon-dicom-overlay class="mx-auto text-4xl" />
  <h3 class="mt-5">About</h3>
</div>

[Vitesse](https://github.com/antfu/vitesse) is an opinionated [Vite](https://github.com/vitejs/vite) starter template made by [@antfu](https://github.com/antfu) for mocking apps swiftly. With **file-based routing**, **components auto importing**, **markdown support**, I18n, PWA and uses **UnoCSS** for UI.

However, most industry standard applications follow a microservice based modular clean architecture pattern instead of monolithic architecture. Because it gives a better team collaboration advantages and efficient future maintainability. This is exactly what you will get in this repository which is a forked version of vitesse template with some customizations.

- Apollo GraphQL with Typescript support
- [Tailwind CSS V3](https://tailwindcss.com/) instead of [UnoCSS](https://github.com/unocss/unocss)
- Modular Architecture Pattern with separation of concern

### Quick Overview

First thing you will notice there are no `components/`, `pages/`, `stores/`, `styles/` folders under the `src/` folder. You will see,

- `common/`
- `orders/`
- `users/`

and that's it. Everything has been moved into the `common/` folder (global settings). The `orders/` and `users/` folders are more like modules ([modular architecture](https://en.wikipedia.org/wiki/Module_pattern)). In this project, I have made a demo order process using these two modules but in your case, you will delete everything other than the `common/` folder. You will add a new module whenever you need it without breaking any changes. The main advantage you can see is that you don't have to jump around different folders to implement a feature that is completely separate from other features ([separation of concern](https://en.wikipedia.org/wiki/Separation_of_concerns)). You can add the following folders in each module without any manual imports,

- `components/`
- `modules/`
- `pages/`
- `stores/`

I will highly recommend you to try [Vitesse](https://github.com/antfu/vitesse) using [monolithic architecture](https://en.wikipedia.org/wiki/Monolithic_application) first. Then you can move to my repo https://github.com/shamscorner/vitesse-stackter-clean-architect when you feel comfortable.

```js
// syntax highlighting example
function vitesse() {
  const foo = 'bar'
  console.log(foo)
}
```

Check out the [GitHub repo](https://github.com/antfu/vitesse) for more details.
