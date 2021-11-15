import { useState, useEffect } from "react";

import DatePicker from "../components/datePicker";
import TextPanel from "../components/TextPanel";
import Helpers from "../helper/MainHelpers";

import { FormDiv } from "../css/Main.style";
import {
  Form,
  BoxSpacer,
  CheckBox,
  InputSpacer,
  Input,
  FormButton,
  Footer,
  Label,
  Section,
  SectionDiv,
  CardMain,
  Card,
  Small,
  CardDescription,
  CardOwner,
  CardFooter
} from "../css/CardMain.style";

const Main = () => {
  const [slicer, setSlicer] = useState(15);
  const [end, setEnd] = useState(false);

  const {
    handleCheckboxChange,
    checkedCheckboxes,
    handleChange,
    handleSubmit,
    loading,
    errors,
    data,
    text
  } = Helpers();

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setSlicer(slicer + 15);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [slicer]);

  useEffect(() => {
    const slicedData = data.data.slice(0, slicer);
    const content = data.data;

    if (!content.length) return;

    if (content.length === slicedData.length) {
      setEnd(true);
    } else {
      setEnd(false);
    }
  }, [data, slicer]);

  const receivedData = [{ value: "user" }, { value: "repository" }];
  const slicedData = data.data.slice(0, slicer);

  return (
    <section>
      <FormDiv id="here">
        <Form onSubmit={(e) => handleSubmit(e, setSlicer, setEnd)}>
          {receivedData?.map((data, index) => {
            const Sort = checkedCheckboxes.filter(
              ({ value }: { value: string }) => value === data.value
            );
            const animateMove = Sort.some(
              ({ value }: { value: string }) => value === data.value
            );

            return (
              <BoxSpacer key={`cb-${index}`} move={animateMove}>
                <CheckBox>
                  <input
                    value={data.value}
                    type="checkbox"
                    checked={checkedCheckboxes.some(
                      ({ value }: { value: string }) => value === data.value
                    )}
                    onChange={() => handleCheckboxChange(data)}
                  />
                  <label>{data.value}</label>
                </CheckBox>
                {Sort.map(({ value }: { value: string }) => (
                  <InputSpacer key={value} id="here">
                    <Input
                      name={value}
                      value={text[value]}
                      placeholder="write content"
                      onChange={handleChange}
                    />
                  </InputSpacer>
                ))}
              </BoxSpacer>
            );
          })}
          <FormButton type="submit" value="submit" />
          {!errors?.status && errors !== undefined && (
            <Footer status={errors?.status}>
              <Label>{errors?.response}</Label>
            </Footer>
          )}
        </Form>
      </FormDiv>
      {data.title && (
        <Section>
          <SectionDiv>
            <label>{data.title}</label>
          </SectionDiv>
          <div>
            <CardMain>
              {slicedData.map(({ node }: { node: any }, index: number) => (
                <Card key={index}>
                  <Small>description</Small>
                  <CardDescription>
                    {node.description && (
                      <TextPanel description={node.description} />
                    )}
                  </CardDescription>
                  <CardOwner>
                    <a href={node.url}>
                      <p>By {node.owner.login}</p>
                    </a>
                  </CardOwner>
                  <CardFooter>
                    <small>
                      Create At: <DatePicker date={node.createdAt} />
                    </small>
                  </CardFooter>
                </Card>
              ))}
            </CardMain>
          </div>
        </Section>
      )}
      {end || loading ? (
        <Footer status={errors?.status}>
          <Label>{loading ? "loading..." : "loaded content"}</Label>
        </Footer>
      ) : (
        ""
      )}
    </section>
  );
};

export default Main;
