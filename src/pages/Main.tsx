import { FormDiv, FormBox, SearchInput, SearchButton } from "../css/Main.style";
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";

import formHandle from "../helper/formHandle";
import styled from "styled-components";

interface ErrorInterface {
  status: boolean;
  response: string;
}

const Section = styled.section``;

const Main = () => {
  const [checkedCheckboxes, setCheckedCheckboxes] = useState<
    { value: string }[]
  >([]);
  const [text, setText] = useState<{ [x: string]: string }>({
    user: "",
    repository: ""
  });
  const [errors, setErrors] = useState<ErrorInterface | undefined>(undefined);
  const [data, setData] = useState({});
  const [keys, setKeys] = useState<string[]>([]);
  // const { getDataByUserName, getDataByRepositoryName } = formHandle;

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!text) {
  //     const errorPanel = {
  //       status: false,
  //       response: "input can't by empty"
  //     };

  //     setErrors(errorPanel);
  //     return;
  //   }

  //   const byUser = text.includes(",");

  //   const PROPS = { text, setData };

  //   switch (byUser) {
  //     case true:
  //       getDataByUserName({ ...PROPS });
  //       break;
  //     case false:
  //       getDataByRepositoryName({ ...PROPS });
  //       break;
  //     default:
  //       break;
  //   }
  // };
  const handleSubmit = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    setText({ ...text, [target.name]: target.value });
  };

  console.log(text);

  const handleCheckboxChange = (data: { value: string }) => {
    const isChecked = checkedCheckboxes.some(
      ({ value }: { value: string }) => value === data.value
    );
    if (isChecked) {
      setCheckedCheckboxes(
        checkedCheckboxes.filter(
          ({ value }: { value: string }) => value !== data.value
        )
      );
    } else setCheckedCheckboxes((prev) => prev.concat(data));
  };

  const receivedData = [{ value: "user" }, { value: "repository" }];

  return (
    <Section>
      <FormDiv>
        {receivedData?.map((data, index) => {
          const Sort = checkedCheckboxes.filter(
            ({ value }: { value: string }) => value === data.value
          );
          return (
            <div key={`cb-${index}`}>
              <div>
                <input
                  value={data.value}
                  type="checkbox"
                  checked={checkedCheckboxes.some(
                    ({ value }: { value: string }) => {
                      return value === data.value;
                    }
                  )}
                  onChange={() => handleCheckboxChange(data)}
                />
                {data.value}
              </div>
              <form>
                {Sort.map(({ value }: { value: string }) => (
                  <div key={value}>
                    <input
                      name={value}
                      placeholder="write content"
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </form>
            </div>
          );
        })}
      </FormDiv>
    </Section>
  );
};

export default Main;
