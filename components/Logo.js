import styled from "@emotion/styled";
import { useTrail, animated } from "react-spring";
import { useState } from "react";

const config = { mass: 0.2, tension: 150, friction: 10 }
const items = "LEXEND".split("")
const isE = letter => letter === "E"

export default () => {
  const [toggled, toggle] = useState(false);
  const trail = useTrail(items.length, {
    config,
    opacity: toggled ? 1 : 0,
    x: toggled ? 0 : 20,
    width: toggled ? 25 : 0,
    fontVariationSettings: toggled ? "'LXND' 100" : "'LXND' 0",
    from: {
      opacity: 0,
      x: 20,
      width: 0,
      padding: 0,
      fontVariationSettings: "'LXND' 0"
    }
  });

  return (
    <Logo
      onMouseEnter={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
      >

      {trail.map(({ x, width, opacity, ...rest }, index) => (
        <Span key={`${items[index]}-${index}`} style={{
          x: isE(items[index]) ? x : null,
          width: isE(items[index]) ? width : null,
          opacity: isE(items[index]) ? opacity : null,
          ...rest }}
        >
          {items[index]}
        </Span>
      ))}

    </Logo>
  );
};

const Logo = styled("h1")`
  font-size: 1.4rem;
  cursor: default;
  background: red;
  display: inline-block;
  color: white;
  padding: 0.092em 0.392em;
  margin-left: auto;
  position: relative;
  z-index: 100;
`;

const Span = styled(animated.span)`
  display: inline-block;
  position: relative;
  &:nth-of-type(4) { right: -1px; }
`;
