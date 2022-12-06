import "./Button.scss";

export default function Button({ text, type = "primary", ...args }) {
  return (
    <button className="btn" dataType={type} {...args}>
      {text}
    </button>
  );
}
