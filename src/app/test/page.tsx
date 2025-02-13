import "./page.scss";
export default function Test() {
  return (
    <p className="highlight-text">
      这里是需要高亮显示的文字内容。 如果文字超出了一行，它会自动换到下一行，
      并且每一行都将有独立的背景色和间隔。
    </p>
  );
}
