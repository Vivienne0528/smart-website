import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render the button", () => {
    render(<button>About</button>);
    expect(screen.getByRole("button", { name: "About" }));
  });
  it("should render the button", () => {
    render(<button>News</button>);
    expect(screen.getByRole("button", { name: "News" }));
  });
  it("should render the button", () => {
    render(<button>Community</button>);
    expect(screen.getByRole("button", { name: "Community" }));
  });
  it("should render the button", () => {
    render(<button>Store</button>);
    expect(screen.getByRole("button", { name: "Store" }));
  });
});
