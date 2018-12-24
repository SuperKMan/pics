import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 266c31da9d6c77c4a4aee340e4787d688dda2e1ab1813052467a9c04a87066ee"
  }
});
