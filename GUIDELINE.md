## Yarn over NPM

It's no secret that Yarn has better performance than NPM. Furthermore, Yarn includes features like [Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [SDR](https://classic.yarnpkg.com/en/docs/selective-version-resolutions) out of the box, which are missing in NPM.

It's encouraged to only use Yarn (and not NPM) to keep the `.lock` file consistent.

## Ant Design

It is encouraged that you use Ant Design components wherever possible, in cases where Ant Design does not cover our needs and we are forced to write custom styles, we can use `styled-components`.

## Grid System

In order to achieve responsive and consistent layouts throughout the projects, we will use [Ant's Grid System](https://ant.design/components/grid/).

## Folder Structure

React is a UI library (not a framework). That means it does not force any folder structure and we're allowed to choose whatever structure we want. However, without a proper convention our codebase will get messy which will hurt the productivity of the team.

Before we set any conventions, let's recall that in React everything is a component.

- If you want to create a custom UI element (button, input), that will be a component.
- If you want to create a route page (Dashboard), that will be a component.
- If you want to create a generic pattern that'll be used throughout the app, then it's gonna be a component.
- If you want to split your logic to improve readability, then you're probably going to split into multiple components again.

So, how'd we structure our code to have a clear seperation between these concepts?

1. Put all of your generic components into `components` directory at the root of your project. That includes all of the form elements (Input, Button) and other generic components (Header, Modal, InfiniteLoader, ...).

2. Put your route components into `pages` directory which is located at the root of your project.

3. Put your nested route components into `pages/ParentRoute/pages/NestedRoute` directory.

4. Put your components which are not meant to be reused within the project into your route directory under `/components` folder.

So if you want to create a `DeleteModal` component which is only used by `ParentRoute` route component, then you'll need to put it under `/pages/ParentRoute/components/DeleteModal`.

The same goes for nested routes. `/pages/ParentRoute/pages/NestedRoute/components/DeleteModal`

## Dos and Don'ts

1. Don't add global classnames to the elements. Use `styled-components` instead.
2. Don't override Ant's styles with nested selectors. Use their `API`s instead.
