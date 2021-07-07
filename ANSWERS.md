- [ ] Why would you use class component over function components (removing hooks from the question)?
    
    To access the built-in methods that React provides via the Class syntax. Previously, this was the only way to use "State," but that
    changed with the birth of hooks like useState. But it's still good to learn this syntax as React explicitly told developers to not
    concern themselves with refactoring all the code since it could cause problems (read: we'll most likely see classes in the wild).

- [ ] Name three lifecycle methods and their purposes.

    1. Render is used along with a return statement to display information on the screen.
    2. setState is used to change a component's state data and automatically leads to a re-render.
    3. Constructor provides a component with its intial state, without which it wouldn't be able to render.

- [ ] What is the purpose of a custom hook?

    You create a custom hook in order to apply non-visual behavior and stateful logic throughout your components. For example, a custom
    hook named "useInput" could be used to set a default value in a form and update the value whenever a user types something in an input.

- [ ] Why is it important to test our apps?

    Because the cost of investing time in testing early in the process is typically a lot less than the time and/or money it would cost
    later in the process if you get stuck with some nasty bugs that cause the app to behave in undesired and unexpected ways.