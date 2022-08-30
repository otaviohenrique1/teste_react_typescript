import { ReactNode } from "react";

interface Props {
  label?: ReactNode;
  children?: ReactNode;
}

const Card = ({ children, label }: Props) => {
  return (
    <div>
      {label && <div>{label}</div>}
      {children}
    </div>
  );
};

export default function RenderPropsTeste2() {
  const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <h1>RenderPropsTeste2</h1>
      <Card
        label="Card"
      >
        {lista.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </Card>
    </div>
  );
}