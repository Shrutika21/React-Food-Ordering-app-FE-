import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../body";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { json } from "react-router-dom";
import { RESTAURANT_MENU } from "../../mocks/data";
import { RESTAURANT_DETAILS } from "../../mocks/data";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MENU);
    },
  });
});

test("Add items to the cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("addBtn");

  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);

  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("2");
});
