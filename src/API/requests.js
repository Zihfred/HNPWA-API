import { url, news,item } from "./constants";

class API {
  getNews = async (page = 1) =>{

   return fetch(`${url}${news}/${page}.json`).then(res => {

      if (res.ok) {
        return res.json();
      }
      throw new Error("Something was wrong");
    })};
  getSelectedPost = async (postId = 22205711) =>
    fetch(`${url}${item}/${postId}.json`).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Something was wrong");
    });
}

export default  new API();
