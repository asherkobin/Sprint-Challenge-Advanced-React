- [ ] Why would you use class component over function components (removing hooks from the question)?
You have direct access to the component life-cycle events.  You can sub-class (extend) a component.
- [ ] Name three lifecycle methods and their purposes.
componentDidMount: component is rendered and you can create side-effects
componentDidUpdate: state was updated, component can react and update its DOM
comonentWillUnmount: cleanup/destroy unmanaged resources
- [ ] What is the purpose of a custom hook?
abstract out functionality so it can be reused
- [ ] Why is it important to test our apps?
to give developer confidence that the work is correct