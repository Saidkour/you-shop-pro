export const GetProducts = async () => {
    try { 
        const response = await fetch('http://127.0.0.1:8000/api/products', {
            method:"GET",
            credentials:"include",
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
}


export const PostProducts = async (name, image, price, description, features, category_id) => {
    try { 
        const response = await fetch('http://127.0.0.1:8000/api/products', {
            method:"POST",
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name, image, price, description, features, category_id})
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
}