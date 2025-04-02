function statusPage(request, response) {
  response.status(200).json({ message: "Está open" });
}

export default statusPage;
