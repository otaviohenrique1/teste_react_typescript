import React from "react";

type Props = {
  children: (ctx: { hello: string }) => React.ReactElement;
};

const ControlledWrapper: React.FC<Props> = ({ children }) => {
  const state: { hello: string } = { hello: 'hello' };

  return children(state);
};

export default function RenderPropsTeste1() {
  return (
    <ControlledWrapper>
    {({ hello }) => <div>{hello}</div>}
  </ControlledWrapper>
  );
}