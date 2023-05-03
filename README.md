# Sdaem.by

React + TS + Redux Toolkit\
Figma, Pixel Perfect

[Ссылка на макет](https://www.figma.com/file/KA7GM9MwNHEfiPcgKNLzPf/%C2%ABSDAEM.BY%C2%BB---%D1%81%D1%82%D0%B0%D0%B6%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0?node-id=0-1)

`Plans`
<ul>
  <li>[ ] PixelPerfect Layout 90%</li>
  <li>[x] CSS modules</li>
  <li>[x] SCSS</li>
  <li>[ ] Semantic Layout 6/8</li>
  <li>[ ] Adaptive Layout 50%</li>
  <li>[ ] TypeScript: 92%</li>
  <li>[x] Redux Toolkit</li>
  <li>[ ] Firebase?</li>
</ul>

`Plans Details 1`
<ul>
  <li>[ ] Redux + TypeScript 12%</li>
  <li>[ ] Components:</li>
    <ul>
      <li>[ ] BreadCrumbs 65%</li>
      <li>[ ] ModalSent</li>
      <li>[ ] Filters 60%</li>
      <li>[ ] Header 87%</li>
      <li>[ ] Footer 95%</li>
      <li>[ ] CardWithDetails</li>
      <li>[ ] Dropdown:</li>
        <ul>
          <li>[ ] out onClick: close options</li>
          <li>[ ] another pages (not CatalogPage) must have 
          innerHTML = "Квартиры на сутки"</li>
        </ul>
      <li>[ ] Button</li>
      <li>[ ] Input</li>
      <li>[ ] Select</li>
      <li>[ ] Tag</li>
        <ul>
          <li>[ ] onClick, filters for neighborhood</li>
          <li>[ ] Filter of filter. Example: amount rooms and neighborhood - together</li>
        </ul>
      <li>[ ] PurpleBackground</li>
    </ul>
  <li>[ ] NewsListPage:</li>
    <ul>
      <li>[ ] Input (adaptability, search icon)</li>
      <li>[x] Button: underline</li>
      <li>[ ] NewsCard: to cut text in block, semantic: picture</li>
      <li>[ ] Pagination??? without backend???</li>
      <li>[x] Typescript</li>
      <li>[ ] Flexibility</li>
      <li>[ ] Check PixelPerfect</li>
    </ul>
  <li>[ ] OneNewsPage:</li>
      <ul>
        <li>[x] Don't work! Check!</li>
        <li>[ ] All text: spaces, enter.. ?</li>
        <li>[ ] Semantic Layout</li>
        <li>[ ] Flexibility</li>
        <li>[ ] Check PixelPerfect</li>
        <li>[ ] Shared? vk, inst...</li>
        <li>[ ] ...maybe something else?</li>
      </ul>
  <li>[ ] ContactPage:</li>
    <ul>
      <li>[ ] icons after phone number </li>
      <li>[ ] ModalSent after Submit </li>
      <li>[ ] add redux </li>
      <li>[ ] post, axios</li>
      <li>[ ] Semantic Layout</li>
      <li>[ ] Flexibility</li>
      <li>[ ] Check PixelPerfect</li>
    </ul>
  <li>[ ] Error404Page:</li>
      <ul>
        <li>[x] button: underline </li>
        <li>[x] dots: yellow -> white </li>
        <li>[ ] Flexibility</li>
        <li>[ ] Check PixelPerfect</li>
      </ul>
  <li>[ ] SignInPage</li>
  <li>[ ] SignUpPage</li>
  <li>[ ] MainPage</li>
  <li>[ ] CatalogPage</li>
</ul>


`Plans Details 2`
<ul>
  <li>[ ] Semantic Layout:</li>
    <ul>
      <li>[x] NewsListPage</li>
      <li>[ ] OneNewsPage</li>
      <li>[ ] ContactPage</li>
      <li>[x] Error404Page</li>
      <li>[x] SignInPage</li>
      <li>[x] SignUpPage</li>
      <li>[x] MainPage</li>
      <li>[x] CatalogPage</li>
    </ul>
  <li>[ ] Adaptive Layout:</li>
    <ul>
      <li>[ ] NewsListPage</li>
      <li>[x] OneNewsPage from 800px</li>
      <li>[x] ContactPage from 800px</li>
      <li>[ ] Error404Page </li>
      <li>[ ] SignInPage</li>
      <li>[ ] SignUpPage</li>
      <li>[x] MainPage from 800px</li>
      <li>[x] CatalogPage from 800px</li>
    </ul>

  <li>[ ] TypeScript:</li>
    <ul>
      <li>[x] NewsListPage</li>
      <li>[x] OneNewsPage</li>
      <li>[x] ContactPage</li>
      <li>[x] Error404Page</li>
      <li>[ ] SignInPage</li>
      <li>[ ] SignUpPage</li>
      <li>[ ] MainPage</li>
      <li>[ ] CatalogPage</li>
    </ul>
</ul>
 and etc.



## react-select and css-modules. Solution

```
import React from 'react';
import RS from 'react-select';
import style from './Select_4.module.scss';

const options = [
  {label: "hi", value: "hi"}
]

function Select5(props: any) {
  return (
    <RS
    placeholder="Выберите"
      options={options}
      className={style.select}
    />
  )
}

export default Select5;
```

Мы имеем вот такой Select
```
<div class=" css-13cymwt-control">

  <div class=" css-1fdsijx-ValueContainer">
    <div class=" css-1jqq78o-placeholder" id="react-select-3-placeholder">Выберите</div>
    <div class=" css-qbdosj-Input" data-value="">
      <input class="" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-3-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-3-placeholder" value="" style="color: inherit; background: 0px center; opacity: 1; width: 100%; grid-area: 1 / 2 / auto / auto; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;">
    </div>
  </div>

  <div class=" css-1hb7zxy-IndicatorsContainer">
    <span class=" css-1u9des2-indicatorSeparator"></span>
    <div class=" css-1xc3v61-indicatorContainer" aria-hidden="true">
      <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-tj5bde-Svg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
    </div>
  </div>

</div>
```
Чтобы стилизовать эту абракадабру мы сделаем следующее.\
Возьмем в пример `<div class=" css-qbdosj-Input" data-value="">`

```
  [class$="-Input"] {
    display: flex !important;
  }
```
И вуаля! Input стилизован.\

Будьте внимательны при копировании имени и помните: одна ошибка и ты ошибся.

## Other solutions
P.S. Есть еще два решения этой проблемы, но на мой взгляд они неразумны. 
1. Отрубить в Webpack хэширование css-modules
2. Забить на css-modules и сделать обычный css-файл. Но тогда css-файлы могут влиять друг на друга, что не безопасно. 


-----------------------------------------------------------------------------

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
