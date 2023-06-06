## To start dev mode immediately

### clone the repository

Then, in the project directory, you should run:

### `yarn`

Installs all the dependencies

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it
in the browser.

## Or you can find deployed version [here](https://ypi-food-delivery.netlify.app/)

---

## Main project stack

### [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)

using create-react-app

### [React-Redux](https://react-redux.js.org/)

as a state manager using [Redux Toolkit](https://redux-toolkit.js.org/)

### [React-router-dom](https://reactrouter.com/en/main) latest version

for simple navigation

### [Tailwind](https://tailwindcss.com/)

for styling w/o using off-the-shelf components

## Additional libraries

#### [Formik](https://formik.org/) with [yup](https://www.npmjs.com/package/yup) validation

#### [Axios](https://axios-http.com/docs/intro) for queries

#### [React Toastify](https://www.npmjs.com/package/react-toastify) both for better UX

#### [React icons](https://www.npmjs.com/package/react-icons)

#### [Classnames](https://www.npmjs.com/package/classnames)

#### and others (see the package.json file)

### IMPORTANT

This is Front-end part of application. To get all the features of the app please use the
[backend part of the link](https://github.com/YarPetru/food-delivery-back)

### Details About App (some features)

#### Main page (Shops)

On this page, you are able to choose a shop and add products to your shopping cart. To see the
available products, you need to select a shop in the left section. When you add the first product to
your shopping cart, three things happen:

1. Only one shop remains available because, according to the terms and regulations (TR), users can
   only make orders from one shop.

2. The "Add to cart" button becomes disabled. You can change the quantity of a product or delete it
   from your shopping cart on the Shopping Cart Page.
3. The shopping cart icon on the right part of the header becomes filled. If you remove all products
   from the shopping cart, the icon becomes empty again.

#### Shopping Cart page

1. Here, you have an order form and a link to the Shops page if your Cart is empty, or a products
   list with the total price of the order if you have already added some products on the Shops page.
2. The product list allows you to delete a product from the order or change its quantity. The total
   price updates dynamically. If all products are deleted from the shopping cart, the content of the
   Shopping cart section changes.
3. Back to user data form. Here, you have to fill all inputs before the submit button becomes
   available. However, if your shopping cart is empty, the submit button will remain unavailable.
   Pay attention: the phone number must start with +380. Any other requirements will be displayed if
   you make mistakes or leave inputs empty.
4. When you successfully confirm the order, you will receive a toast notification about it, and the
   form and your shopping cart will be cleared.

Generally, the app uses local storage to provide a better user experience (UX) and avoid unnecessary
queries when returning to the main page.

Have fun!
