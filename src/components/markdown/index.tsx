import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import CopyButton from "./copy-buttom";
import "./index.scss";

const Markdown = ({ content }: { content: string }) => {
  return (
    <div className="article-markdown">
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        components={{
          pre: ({ children }) => <pre className="p-0">{children}</pre>,
          code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            if (match?.length) {
              const id = Math.random().toString(36).substr(2, 9);
              return (
                <div className="code-container">
                  <div className="code-container-header">
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {node?.data?.meta}
                      </p>
                    </div>
                    <CopyButton id={id} />
                  </div>
                  <div className="overflow-x-auto">
                    <div id={id} className="p-4">
                      {children}
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <code {...props} className="short-code">
                  {children}
                </code>
              );
            }
          },
        }}
        className="markdwon-content"
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
