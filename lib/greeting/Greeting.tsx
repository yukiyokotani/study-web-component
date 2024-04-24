type GreetingProps = {
  name?: string;
};

export const Greeting = ({ name = 'World' }: GreetingProps) => {
  return <h1>Hello, {name}!</h1>;
};
