export const GetProducts = async () => {
    try { 
        const response = await fetch(`http://127.0.0.1:8000/api/products`, {
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })

        if (response.ok) {
            const data = await response.json();
            console.log('products', data);
            return data;
          } else {
            throw new Error('Failed to fetch any product');
          }

    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};

export const ShowProduct = async (id) => {
    try {
     const response = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
     });
     const data = await response.json();
     console.log('show', data)
     return data;
    
    } catch (error) {
        console.error('Error fetching product:', error);
    }
};

export const FilterProductsByCategory = async (categoryId) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/products?category_id=${categoryId}`);
        const data = await response.json();
        console.log('filterd products by category:', data);
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

export const FilterProductByPrice = async (price) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/products?price=${price}`);
        const data = await response.fetch();
        console.log('filterd products by price:', data)
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

export const PostProducts = async (formData) => {
    try { 
        const response = await fetch('http://127.0.0.1:8000/api/products', {
            method:"POST",
            body:formData
        })

        if (response.ok) {
            const data = await response.json();
            console.log('added product', data);
            return data;
          } else {
            throw new Error('Failed to add any product');
          }

    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

