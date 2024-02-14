# Frontend Framework

## Features

### DOM Abstraction

I created a Virtual DOM, offering a lightweight JavaScript object that mirrors the real DOM. This abstraction simplifies DOM manipulation and updates the UI efficiently on state changes.

### Dispatcher

Components can emit events, and their parent components can listen to these events by utilizing the dispatcher class. This enables effective communication between different parts of the application.

### Patching DOM

The reconciliation and diffing algorithms are implemented from scratch to identify differences between the new and old virtual DOMs. This approach optimizes DOM updates by selectively patching elements rather than rebuilding the entire structure.

### Component Factory

With the component factory, each component can pass its render function to create its representation of the virtual DOM. This feature enables breaking down the application into manageable subcomponents, improving modularity and maintainability.

### Scheduler

The library includes a scheduler that adds the onMount function to the microtask queue. This ensures that APIs are called only after the application has been fully mounted, enhancing performance and preventing potential issues.


## Learnings

### Beginning: Renderer + State Manager

- Started with a todo application using vanilla JavaScript, which involved manual DOM manipulation.
- Introduced the Virtual DOM concept to simplify DOM manipulation.
- Created a mount function to render the real representation of the Virtual DOM.
- Implemented a state manager with a createApp function, allowing subscription to reducers for state updates.
- Developed the renderApp function for re-rendering the application on state changes.

### Middle-State: State Manager + Patching

- Implemented reconciliation, diffing algorithm, and DOM patching to optimize updates.
- Transitioned from destroying and rebuilding the entire view to selectively updating elements.
- Utilized reconciliation algorithm to identify changes between old and new virtual DOMs.

### Before Last: Sub-components + Stateful Components

- Addressed complexity in passing information down to components by introducing a component factory.
- Components provide their own render functions for creating virtual DOMs.
- Implemented patching mechanism for each component to update its view.

### Last: Parent Communication + Asynchronous (Scheduler) + Component Lifecycle

- Enabled communication between parent and subcomponents.
- Implemented keys for components to aid the reconciliation algorithm.
- Utilized the scheduler to perform asynchronous tasks only after the application is fully mounted.
- Implemented a nextTick function for executing tasks after the microtask queue is empty.


## Getting Started
To start using the Basic Frontend Framework in your project, follow these simple steps:

1. **Installation:** You can include the framework in your project by downloading it and importing the following.
![Installation Screenshot](https://github.com/AlexanderGomes/frontend_framework/assets/98370540/1af70df5-81d5-4df9-997c-3501643fad96)


2. **Usage:** Use the component factory, pass your state and render function, utilize the onMount for asynchronous calls, and return your virtual nodes.
![Usage Screenshot](https://github.com/AlexanderGomes/frontend_framework/assets/98370540/96e9788a-69e1-42e8-a488-5f90454fff55)
