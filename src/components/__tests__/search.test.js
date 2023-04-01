//import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../body";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { json } from "react-router-dom";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Test Shimmer UI", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer-UI");

  // To check if shimmer loaded in the document
  // expect(shimmer).toBeInTheDocument();
  expect(shimmer.children.length).toBe(15);
});

test("Restaurant Data Should load on home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });

  const restaurantList = body.getByTestId("restaurant-list");

  // To check if shimmer loaded in the document
  // expect(shimmer).toBeInTheDocument();
  expect(restaurantList.children.length).toBe(15);
});

test("Search function should work", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "cafe",
    },
  });

  const SearchBtn = body.getByTestId("search-btn");

  fireEvent.click(SearchBtn);

  const restaurantList = body.getByTestId("restaurant-list");

  expect(restaurantList.children.length).toBe(1);
});
