import request from "superagent";

const URL = "http://localhost:7850";

export async function getAllTheDataFromTheBackEndAndTransferItToTheFrontEndPleaseWork(
  city,
  state
) {
  const res = await request.get(`${URL}/api/v1?city=${city}&state=${state}`);

  return res.body;
}
