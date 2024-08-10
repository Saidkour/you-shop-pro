export const GetCategorie = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/categories', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        throw new Error('Failed to fetch any categories');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  };
  

  export const PostCategorie = async (name, desc) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name ,desc })
        // we should add {name} as the origin name in backend or we can use this methode {name:value}
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to post categories');
      }
    } catch (error) {
      console.log(error);
    }
  };
  