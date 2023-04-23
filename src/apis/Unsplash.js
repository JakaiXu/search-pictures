import axios from "axios";


const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID GHfFMb8EOFBn-xKKTgzcbRy_V28sMJimRwy88Qi5uFM",
    },
    params: { query: term },
  });
  return response.data.results;
};
export default searchImages;
