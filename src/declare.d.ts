interface ResultData {
  title: string;
  score: number;
  maxScore: number;
  icon: string;
  color: string;
}

interface SummaryProps {
  results: ResultData[];
}

type TpgTypes = "h1" | "h2" | "h3" | "h4" | "p" | "blockquote";

type TpgClasses = { [key: string]: string };

interface TypographyPropsTypes {
  className?: string;
  children: React.ReactNode;
  variant: TpgTypes;
}
