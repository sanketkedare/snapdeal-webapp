const useProduct = async() =>
{
    const response = await fetch(process.env.REACT_APP_PRODUCT_API);
    const JSON = await response.json();
    return JSON
}

export default useProduct;