# MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

##应用功能
在此应用中，主页面显示了一个“书架”列表（即类别），每个书架都包含一个图书数量。三个书架分别为：
*当前阅读
*想要阅读
*已经阅读
![](https://user-gold-cdn.xitu.io/2019/4/10/16a05fd84b520c0f?w=620&h=710&f=png&s=224158)
每本图书都有一个控件，使你能够为该图书选择书架。当你选择其他书架时，图书就移到该书架上。注意，控件的默认值应该始终为图书当前所在书架。
![](https://user-gold-cdn.xitu.io/2019/4/10/16a06003ed566d69?w=620&h=710&f=png&s=231919)
主页面还有一个“搜索”链接，该链接是一个搜索页面，使你能够查找图书并将其添加到书库中。

搜索页面具有一个文本输入框，可以用来查找图书。当文本输入的值更改后，与该查询匹配的图书将显示在页面上，以及使你将该图书添加到书库中的控件。要使界面保持一致性，你可以考虑重复利用用于在主页面上显示图书的一些代码。
![](https://user-gold-cdn.xitu.io/2019/4/10/16a0600fcd5899a6?w=620&h=710&f=png&s=310709)
当图书位于书架上时，它在主应用页面和搜索页面上的状态应该相同。
![](https://user-gold-cdn.xitu.io/2019/4/10/16a0601a076eed3b?w=640&h=400&f=png&s=95305)
搜索页面具有一个指向 /（根 URL）的链接，并返回主页面。

当你从搜索页面返回主页面时，应该立即看到在书库的搜索页面所做的所有选择。

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
