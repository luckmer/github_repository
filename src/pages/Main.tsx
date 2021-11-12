import styled from "styled-components";

import React, { useState } from "react";
const Section = styled.section``;

interface ErrorInterface {
  status: boolean;
  response: string;
}

const clearSpacer = (word: string) => {
  const correctWord = word.includes(",");

  if (!correctWord) return undefined;

  const user = word.replace(/ /g, "").split(",").shift();

  return user;
};

const Main = () => {
  const [text, setText] = useState("");
  const [errors, setErrors] = useState<ErrorInterface | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) {
      const errorPanel = {
        status: false,
        response: "input can't by empty"
      };

      setErrors(errorPanel);
      return;
    }

    const byUser = text.includes(",");

    switch (byUser) {
      case true:
        getDataByUserName();
        break;
      case false:
        getDataByRepositoryName();
        break;
      default:
        break;
    }
  };

  const getDataByUserName = () => {};

  const getDataByRepositoryName = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;
    if (!value) return;
    setText(value);
  };

  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />

        <input value="submit" type="submit" />
      </form>
    </Section>
  );
};

export default Main;
