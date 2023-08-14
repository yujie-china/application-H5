import { log } from "console"
import hyRequest from "../index"

export function applyMainFormData (combinedFormData: any) {
  const formDataJson = JSON.stringify(combinedFormData)
  // console.log(formDataJson);

  return hyRequest.post({
    url: "/mobile",
    data: formDataJson,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
