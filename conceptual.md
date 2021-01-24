### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  allow for links within React apps; also provides functionality for accessing URL parameters, passing in Components.

- What is a single page application?

  app that doesn't have to reload when individual parts of the DOM change

- What are some differences between client side and server side routing?

  server side - click a link and entrie page reloads. HTML is replaced.
  client side - doesn't fully chnage HTML. changes a part

- What are two ways of handling redirects with React Router? When would you use each?

  You can use Redirect and useHistory; 

- What are two different ways to handle page-not-found user experiences using React Router? 

  usehistory or within Switch Component, Switch if you want to have a default pageg for all redirects like a catch all

- How do you grab URL parameters from within a component using React Router?

  useParams hook and /: within to parameter

- What is context in React? When would you use it?

  allows for utilization of a prop without having to drill through every child component

- Describe some differences between class-based components and function
  components in React.

  traiditional hooks like useState are created in the constructor in class components

  prevalent use of this keyword in class component

  much more wordy than functional components

- What are some of the problems that hooks were designed to solve?

  rewriting similiar code multiple times
  useState without writing class
  useContext