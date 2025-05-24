const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor() {
   
  }

  async getData(category) {
    try {
      const response = await fetch(`${baseURL}products/search/${category}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await convertToJson(response);
      return data.Result;
    } catch (error) {
      console.error("Error fetching products:", error);
      return null;
    }
  }



  async findProductById(id) {
    try {
      const response = await fetch(`${baseURL}product/${id}`);
      if (!response.ok) throw new Error("Failed to fetch product");
      const data = await convertToJson(response);
    
      return data.Result;
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  }
  
}
