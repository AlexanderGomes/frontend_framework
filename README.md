# Frontend Framework

## Features
- **DOM Abstraction:** Created a Virtual DOM which is a lightweight JavaScript object, alongside a renderer to update the UI on state change.
- **Dispatcher:** Components can emit events and their parent components can listen by utilizing the dispatcher class.
- **Patching DOM:** Implemented the reconciliation algorithm and diffing algorithm from scratch to find differences between the new and old vDOM.
- **Component Factory:** With the component factory, each component can pass its render function to create its representation of the virtual DOM, breaking the application down into subcomponents.
- **Scheduler:** We add the onMount function to the microtask queue and execute it after the event loop empties the JavaScript execution stack, allowing for APIs to be called only after the application has been mounted.

## Getting Started
To start using the Basic Frontend Framework in your project, follow these simple steps:

1. **Installation:** You can include the framework in your project by downloading it and importing the following.
![Installation Screenshot](https://github.com/AlexanderGomes/frontend_framework/assets/98370540/1af70df5-81d5-4df9-997c-3501643fad96)


2. **Usage:** Use the component factory, pass your state and render function, utilize the onMount for asynchronous calls, and return your virtual nodes.
![Usage Screenshot](https://github.com/AlexanderGomes/frontend_framework/assets/98370540/96e9788a-69e1-42e8-a488-5f90454fff55)
