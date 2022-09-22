import React from "react";
import { Container } from "react-bootstrap";

interface Props {
  title: String;
  content: String;
  image: String;
}

export default function CardL(props: Props) {
  return (
    <>
      <Container>props.title</Container>
    </>
  );
}
