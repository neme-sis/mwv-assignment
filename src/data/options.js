import { ReactComponent as CodeIcon } from "../assets/code.svg";
import { ReactComponent as ConvertIcon } from "../assets/convert.svg";
import { ReactComponent as RegexIcon } from "../assets/regex.svg";
import { ReactComponent as GrammarIcon } from "../assets/grammar.svg";
import { ReactComponent as TodoIcon } from "../assets/todo.svg";
export const options = [
  { Icon: CodeIcon, name: "Explain Code" },
  { Icon: RegexIcon, name: "Regex" },
  { Icon: ConvertIcon, name: "Convert Code" },
  { Icon: GrammarIcon, name: "Fix Grammar" },
  { Icon: TodoIcon, name: "Todo" },
];
export const optionData = [
  {
    title: "code",
    desc: "Explain some code based on the syntax provided",
  },
  {
    title: "regex",
    desc: "Explain some Regex provided",
  },
  {
    title: "code",
    desc: "Convert Code from one language to another",
  },
  {
    title: "paragraph",
    desc: "Fix your grammartical errors with help of AI",
  },
  {
    title: "tasks",
    desc: "Arrange your tasks in a intellectual way with help of AI",
  },
];
export const outputHighlights = [
  {
    title: "What does this code do?",
    desc: "The following code does:",
  },
  {
    title: "What does this regex do?",
    desc: "The following regex does:",
  },
  {
    title: "What will be the converted code?",
    desc: "The converted code will be: ",
  },
  {
    title: "What will be the text after fixing grammartical errors?",
    desc: "The refined text will be: ",
  },
  {
    title: "How the tasks will be arranged?",
    desc: "The todo list as per the tasks is: ",
  },
];
