import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home", () => {
  it("renders the primary resources", () => {
    const page = renderToStaticMarkup(<Home />);

    expect(page).toContain("Hello NextJS");
    expect(page).toContain("Templates");
    expect(page).toContain("Documentation");
  });
});
