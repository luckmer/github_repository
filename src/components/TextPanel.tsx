import isUrl from "../helper/isUrl";

const TextPanel = ({ description }: { description: string }) => {
  const checkUrl = isUrl(description);

  const TextLength =
    description.length > 100 ? `${description.substr(0, 100)}...` : description;

  return checkUrl ? (
    <a href={description}>{description}</a>
  ) : (
    <p role="dialog">{TextLength}</p>
  );
};

export default TextPanel;
