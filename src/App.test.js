import { getAllTheDataFromTheBackEndAndTransferItToTheFrontEnd } from "../src/Components/ApiUtils.js";
import { data } from "../src/data.js";

test("getAllTheDataFromTheBackEnd", async () => {
  const res = await getAllTheDataFromTheBackEndAndTransferItToTheFrontEnd(
    "Portland",
    "OR"
  );

  expect(res).toEqual(data);
});
