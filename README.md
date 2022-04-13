# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge **on** Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor **challenges** help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - REST Countries API with color theme switcher solution](#frontend-mentor---rest-countries-api-with-color-theme-switcher-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![countries](https://user-images.githubusercontent.com/85683069/162770021-aca6be56-65cc-4c38-a663-821726b51387.png)

![countries dark mode](https://user-images.githubusercontent.com/85683069/162770024-95eacf46-5570-4e08-afb9-7b3aa35a4c16.png)

![countries mobile](https://user-images.githubusercontent.com/85683069/162770029-ffa2c180-8f94-461d-a3a4-530356dd1406.png)

![countries mobile dark mode](https://user-images.githubusercontent.com/85683069/162770032-91bee71e-ef91-4ba5-9871-8427c0d63110.png)

![country](https://user-images.githubusercontent.com/85683069/162770035-8b581c52-3726-4566-b052-202153fb873d.png)

![country dark mode](https://user-images.githubusercontent.com/85683069/162770038-35d170a0-c1c5-4fff-a89b-c9859de7b67e.png)

![country mobile](https://user-images.githubusercontent.com/85683069/162770039-cc90006f-b4da-4351-ac4f-bfea2382546d.png)

![country mobile dark mode](https://user-images.githubusercontent.com/85683069/162770041-f391ebc1-247d-4317-8b01-d69a1a381b1f.png)

### Links

- Solution URL: [Github](https://github.com/lauriselvijs/countries-api)
- Live Site URL: [Netlify](https://d25a1f-countries-api.netlify.app/)

## My process

### Built with

- HTML5 markup
- [SCSS](https://sass-lang.com/) - advanced variant of CSS
- [React](https://reactjs.org/) - JS library
- [React Icons](https://react-icons.github.io/react-icons/) - Include popular icons in your React projects easily with react-icons
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language for JS
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
- [Redux thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for Redux
- [Redux persist](https://github.com/rt2zz/redux-persist) - Persist and rehydrate a redux store
- [React Router ](https://v5.reactrouter.com/web/guides/quick-start) - Enables you to implement dynamic routing in a web app

### What I learned

I learned to use redux to make async request to API

```js
 (country: string) => async (dispatch: Dispatch<CountryActions | any>) => {
    const onSuccess = (data: ICountryCard["country"][]) => {
      dispatch({ type: Country.GET_COUNTRY_DATA_BY_SEARCH, payload: data });
    };

    const onError = (error: IError) => {
      dispatch(setError(error));
    };

    try {
      dispatch(setLoading());
      const { data }: any = await axios.get(
        `${FIND_COUNTRY_BY_NAME_URL}${country.toLowerCase()}`
      );

      return onSuccess(
        data.map((country: any) => {
          return { ...country, name: { common: country.name } };
        })
      );
    } catch (error: any) {
      return onError(error.response.data);
    }
```

I used lazy loading and code spliting to optimize app performance

```js
const App = () => {
  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  const Country = lazy(() => import("./route/Country"));
  const NoMatch = lazy(() => import("./route/NoMatch"));
  const CountriesInfo = lazy(() => import("./route/CountriesInfo"));

  return (
    <div className={darkMode ? "app-dark-mode" : "app"}>
      <Router>
        <Routes>
          <Route path={ROOT} element={<Root />}>
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <CountriesInfo />
                </Suspense>
              }
            />
            <Route
              path={COUNTRY_CCA3}
              element={
                <Suspense fallback={<Loader />}>
                  <Country />
                </Suspense>
              }
            />
          </Route>

          <Route
            path={NO_MATCH_ROUTE}
            element={
              <Suspense fallback={<Loader />}>
                <NoMatch />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
```

### Continued development

I want keep working on state management in future using new tools like context api and redux toolkit

### Useful resources

- [Redux API](https://redux.js.org/api/api-reference) - This helped me to better understand Redux
- [React Router](https://reactrouter.com/docs/en/v6) - Great documentation to understand react router
- [TypeScript Docs](https://www.typescriptlang.org/docs/) - Docs to better understand typescript
- [JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - JS docs
- [w3schools CSS docs](https://www.w3schools.com/css/default.asp) - Great documentation to understand CSS
- [w3schools HTML docs](https://www.w3schools.com/html/default.asp) - Great documentation to understand HTML
- [ReactJS](https://reactjs.org/docs/getting-started.html) - Great documentation to understand ReactJS
- [Axios Docs](https://reactjs.org/docs/getting-started.html) - Axios Docs -[SCSS Docs](https://sass-lang.com/documentation) - Documentation for SCSS

## Author

- Website - [Lauris](https://portfolio-rouge-seven.vercel.app/)
- Frontend Mentor - [lauriselvijs](https://www.frontendmentor.io/profile/lauriselvijs)
