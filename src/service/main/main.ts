import hyRequest from "../index"

export function applyMainFormData (combinedFormData: any) {
  const formDataJson = JSON.stringify(combinedFormData)

  return hyRequest.post({
    url: "/application/main",
    data: formDataJson,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
