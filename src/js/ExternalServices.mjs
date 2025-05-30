const baseURL = import.meta.env.VITE_SERVER_URL

export async function convertToJson(res) {
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw {status: res.status, message: data};
  }
}

export default class ExternalServices {
  constructor() {
  }
  async getData(category) {
    try {
      const response = await fetch(`${baseURL}products/search/${category}`);
      const data = await convertToJson(response);
      return data.Result;
    } catch (error) {
      console.error("Error fetching product data:", error.status, error.message);
      return null;
    }
  }
    
  async findProductById(id) {
    console.log("Fetching product with ID:", id); // Log ID before fetching

    try {
      const response = await fetch(`${baseURL}product/${id}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch product. Status: ${response.status}`);
      }

      const data = await convertToJson(response);
      console.log("Product Found:", data.Result);
      return data.Result;

    } catch (error) {
      console.error("Error fetching product by ID:", error);
      return null; // Prevent returning undefined
    }
  }

  
}
