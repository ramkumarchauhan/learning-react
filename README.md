### React Tutorial

Day_01. Components
  - Arrow Function Component -> Uses Arrow function approach.
  - Traditional functional component -> Uses function keyword to create component.
  - Class component -> Uses class keyword and extends React.Comopnent.
  - Note: Only one default export is allowed per module.

Day_02. Props
  - Props simply means properties, passed from a parent component too child component.
  - Props are read-only, means child component cannot modify the props it receives from its parent.
  - Props are passed to components in a manner similar to HTML attributes.
  - When you define a component, you can specify its props by adding parameters to the component's function.
  - In the parent component, you can pass props to a child component by adding attributes to the child component's JSX tag. 
  <code>
    // Parent component
    const App = () => {
      return <Greeting name="John" />;
    };
    // Functional component with props
    const Greeting = (props) => {
      return <p>Hello, {props.name}!</p>;
    };
  </code>
  - Here, the name prop with the value "John" is passed to the Greeting component.
  - Inside the child component, props can be accessed using the "props" object. The props passed to the component are available as properties of this object.

Day_03. States
  - State is a built-in feature of React that allows components to manage their internal data.
  - Unlike props, which are passed down from parent components and remain immutable, state is managed internally by the component and can be modified using the 'setState' method.
  - In functional components, state is managed using the 'useState' hook.
  - In class components, state is declared within the component's constructor using this.state.
  <code>
    // Syntax for declaring state with useState hook
    const [stateVariable, setStateVariable] = useState(initialValue);
  </code>
  - The useState hook returns an array containing- 1. current state value and 2. a function to update that value.
  - State should not be modified directly. Instead, use the appropriate function returned by useState in functional components.
  - It's common to initialize state with an initial value to set its initial state. This is done by passing an argument to useState in functional components.

Day_04. Events(Synthetic Events)
  - In JSX, event handlers are defined as attributes using camelCase naming convention. For example, onClick, onChange, onSubmit, etc
  - These attributes accept a function as their value, which will be executed when the corresponding event occurs. 
  <code>
    <button onClick={handleClick}>Click Me</button>
    // Standalone function
    const handleClick = () => {
      console.log('Button clicked');
    };
  </code>
  - Preventing default behavior using preventDefault().
  <code>
    const handleSubmit = (event) => {
    event.preventDefault();
      // Additional form submission logic
    };
  </code>

Day_05. List & Keys
  - Lists and keys are used to render multiple components or elements dynamically.
  - Lists allow you to iterate over an array of data and render a component or element for each item in the array.
  - Keys are special attributes that help React identify which items have changed, are added, or are removed from the list.
  - To render a list in React, map() method is used to map over an array of data and return a component or element for each item in the array.
  <code>
    const items = ['item1', 'item2', 'item3'];
    const itemList = items.map((item) => <list>{item}</list>);
    return <unorderedList>{itemList}</unorderedList>;
  </code>
  <code>
    const items = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' }
    ];
    const itemList = items.map((item) => <list key={item.id}>{item.name}</list>);
    return <unorderedList>{itemList}</unorderedList>;
  </code>

Day_08. Styling

Day_06. Hooks
  - React Hooks are functions.
  - They were introduced to address several issues with class components, such as code reuse, complex lifecycle methods, and state management.
  1. useState Hook
  2. useEffect Hook
  3. useContext Hook
  4. useReducer Hook
  5. useCallback and useMemo Hooks
  6. Custom Hooks

Day_07. Form handling
  - Formik, Redux

Day_08. Routing
  - Routing is the process of determining which components or views to display in response to a URL change
  - In single-page applications (SPAs) built with React, routing allows users to navigate between different pages or views without causing a full page reload.
  - React Router uses a component-based approach, where each route is represented by a React component.
  - To use it -> npm install react-router-dom
  - Then, we can define routes using the <Route> component and render them within a <Router> component.
  <code>
    import React from 'react';
    import { BrowserRouter as Router, Route } from 'react-router-dom';
    import Home from './Home';
    import About from './About';
    const App = () => {
      return (
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Router>
      );
    };
    export default App;
  </code>
  - We can navigate between routes programmatically using the history object provided by React Router. The history object allows you to push, replace, or go back in the browser history.
  <code>
    import { useHistory } from 'react-router-dom';
    const MyComponent = () => {
      const history = useHistory();
      const handleClick = () => {
        history.push('/new-page');
      };
      return <button onClick={handleClick}>Go to New Page</button>;
    };
  </code>