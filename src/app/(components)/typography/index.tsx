// ** React Imports
import { forwardRef } from "react";

// ** Utils imports
import cn from "@/utils/cn";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Typography = forwardRef<any, TypographyPropsTypes>(
  ({ children, className, variant }, ref) => {
    const tpgTypeClasses: TpgClasses = {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-bold",
      h3: "text-2xl font-bold",
      h4: "text-xl font-bold",
      p: "text-sm font-medium",
      blockquote: "text-lg font-medium",
    };

    const typographyCombinedClasses = cn(
      "text-md text-white font-extrabold",
      tpgTypeClasses[variant],
      className
    );

    const Component = variant;

    return (
      <>
        <Component ref={ref} className={typographyCombinedClasses}>
          {children}
        </Component>
      </>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
