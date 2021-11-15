import React, { useState } from "react";
import formHandle from "./formHandle";
import { TextInterface, ErrorInterface, CheckInterface } from "./interface";

const Helpers = () => {
  const [text, setText] = useState<TextInterface>({ user: "", repository: "" });
  const [errors, setErrors] = useState<ErrorInterface | undefined>(undefined);
  const [data, setData] = useState({ title: "", key: "", data: [] });
  const [loading, setLoading] = useState(false);
  const [checkedCheckboxes, setCheckedCheckboxes] = useState<CheckInterface[]>(
    []
  );

  const { getDataByUserName, getDataByRepositoryName } = formHandle;

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    setSlicer: React.Dispatch<React.SetStateAction<number>>,
    setEnd: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    e.preventDefault();

    const box = checkedCheckboxes
      .map(({ value }) => {
        return text[`${value}`] === "" ? true : false;
      })
      .every((el) => el !== true);

    if (!checkedCheckboxes.length || !box) {
      const errorPanel = {
        status: false,
        response: "please fill correct data"
      };
      setErrors(errorPanel);
      return;
    } else {
      const errorPanel = { status: true, response: "" };
      setErrors(errorPanel);
    }

    const option = checkedCheckboxes.map(({ value }) => value);
    const user = option.includes("user");
    const repository = option.includes("repository");

    const PROPS = { text, setData, setLoading };

    if (user && !repository) {
      getDataByUserName({ ...PROPS });
    }

    if (repository && !user) {
      getDataByRepositoryName({ ...PROPS });
    }

    if (user && repository) {
      getDataByUserName({ ...PROPS });
    }
    setText({ user: "", repository: "" });
    setCheckedCheckboxes([]);
    setSlicer(15);
    setEnd(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    setText({ ...text, [target.name]: target.value });
  };

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

  return {
    data,
    handleCheckboxChange,
    handleChange,
    handleSubmit,
    errors,
    loading,
    checkedCheckboxes,
    text
  };
};

export default Helpers;
