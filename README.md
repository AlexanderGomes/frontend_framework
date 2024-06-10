# Frontend Framework

## Table of Contents

1. [Learnings](#learnings)
   - [Renderer + State Manager](#beginning-renderer--state-manager)
   - [State Manager + Patching](#middle-state-state-manager--patching)
   - [Sub-components + Stateful Components](#before-last-sub-components--stateful-components)
   - [Communication + Asynchronous (Scheduler) + Component Lifecycle](#last-parent-communication--asynchronous-scheduler--component-lifecycle)
2. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Usage](#usage)

## Learnings

### Beginning: Renderer + State Manager

- **Todo Application**: Started with a todo application using vanilla JavaScript, which involved manual DOM manipulation.
- **Virtual DOM**: Introduced the Virtual DOM concept to simplify DOM manipulation.
- **Mount Function**: Created a mount function to render the real representation of the Virtual DOM.
- **State Manager**: Implemented a state manager with a `createApp` function, allowing subscription to reducers for state updates.
- **Render App**: Developed the `renderApp` function for re-rendering the application on state changes.

### Middle-State: State Manager + Patching

- **Reconciliation and Diffing**: Implemented reconciliation, diffing algorithm, and DOM patching to optimize updates.
- **Selective Updating**: Transitioned from destroying and rebuilding the entire view to selectively updating elements.
- **Reconciliation Algorithm**: Utilized reconciliation algorithm to identify changes between old and new virtual DOMs.

### Before Last: Sub-components + Stateful Components

- **Component Factory**: Addressed complexity in passing information down to components by introducing a component factory.
- **Component Render Functions**: Components provide their own render functions for creating virtual DOMs.
- **Component Patching**: Implemented patching mechanism for each component to update its view.

### Last: Parent Communication + Asynchronous (Scheduler) + Component Lifecycle

- **Parent-Subcomponent Communication**: Enabled communication between parent and subcomponents.
- **Component Keys**: Implemented keys for components to aid the reconciliation algorithm.
- **Scheduler**: Utilized the scheduler to perform asynchronous tasks only after the application is fully mounted.
- **NextTick Function**: Implemented a `nextTick` function for executing tasks after the microtask queue is empty.

## Getting Started

### Installation

To start using the Basic Frontend Framework in your project, include the framework by downloading it and importing the necessary files.

![Installation Screenshot](https://github.com/AlexanderGomes/frontend_framework/assets/98370540/1af70df5-81d5-4df9-997c-3501643fad96)

### Usage

Use the component factory, pass your state and render function, utilize the `onMount` for asynchronous calls, and return your virtual nodes.

![Usage Screenshot](https://github.com/AlexanderGomes/frontend_framework/assets/98370540/96e9788a-69e1-42e8-a488-5f90454fff55)
