import { Button } from "@/components/ui/button";
import Delete from "@/components/ui/icon/Delete";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/hooks/useAuth";
import { fetchApi } from "@/hooks/useFetchApi";
import type { ProductType } from "@/types/PostType";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [animate, setAnimate] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([]);
  const productApi = "https://fakestoreapi.com/products";
  const { cart, setCart } = useAuth();
  const addToCart = () => {
    const newCart = [...cart];
    selectedProducts.forEach((product) => {
      if (!newCart.find((item) => item.id === product.id)) {
        console.log("if newCart", newCart);
        return newCart.push(product);
      }
    });
    console.log("newCart", newCart);
    console.log("cart", cart);
    setCart(newCart);
    setSelectedProducts([]); // clearing selection after adding
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchApi(productApi);
        if (!response.ok) {
          throw new Error(await response.text());
        }
        const data: ProductType[] = await response.json();
        setProducts(data);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (selectedProducts.length > 0) {
      timer = setTimeout(() => {
        setAnimate(true);
      }, 100);
    } else {
      setAnimate(false);
    }

    return () => clearTimeout(timer);
  }, [selectedProducts]);

  const removeItem = () => {
    console.log("removed");
    console.log("selectedProducts", selectedProducts);

    // selectedProducts.map((s) => {
    //   const filteredArr = products.filter((newp) => newp.id !== s.id);
    //   console.log("filteredArr", filteredArr);
    //   setProducts(filteredArr);
    // });
    // const selectedIds = selectedProducts.map((p) => p.id);
    const filteredproducts = products.filter(
      (product) => !selectedProducts.some((p) => p.id === product.id)
    );
    setProducts(filteredproducts);
    setSelectedProducts([]);
    console.log("filteredproducts", filteredproducts);
  };
  // const handleDeleteProduct = () => {
  //   if (selectedProduct) {
  //     setProducts(
  //       products.filter((product) => product.id !== selectedProduct.id)
  //     );
  //     setSelectedProduct(null);
  //   }
  // };

  if (loading)
    return (
      <div className="item-center min-h-dvh w-full">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="dark:text-white p-5 h-full">
      <div className="flex justify-between">
        <h1 className="text-2xl pb-3 font-medium">Product List</h1>
        {selectedProducts?.length > 0 && (
          <>
            <div
              className={`${
                animate ? "animate-down" : " "
              } items-center opacity-0 box-shadow fixed top-0 min-w-[50%] flex justify-between p-5 left-1/2 transition-2 transform -translate-x-1/2 rounded-lg box-shadow bg-white z-10`}
            >
              <h4>
                <b>{selectedProducts.length}</b>{" "}
                <i className="text-slate-500">items selected</i>
              </h4>
              <Button className="bg-primary text-white" onClick={addToCart}>
                Add to Cart
              </Button>
              <Button variant="outline" onClick={removeItem}>
                <Delete className="text-red-600 w-5 cursor-pointer" />
                Delete
              </Button>
            </div>
          </>
        )}
      </div>
      <div className="h-[96%]">
        <ScrollArea className="h-full">
          <table border={1} className="w-full">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-2">
                  <input type="checkbox" />
                </th>
                <th className="p-2">Item Name</th>
                <th className="p-2">Price</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                const hasData = selectedProducts.some(
                  (item) => item.id === product.id
                );
                console.log("const hasdata", hasData);
                return (
                  <tr
                    key={product.id}
                    data-list={`tableList-${index}`}
                    onClick={() => {
                      console.log("hasData", hasData);
                      if (hasData) {
                        console.log("if hasData", hasData);
                        setSelectedProducts((prev) => {
                          return prev.filter((newp) => newp.id !== product.id);
                        });
                      } else {
                        setSelectedProducts((prev) => [...prev, product]);
                        console.log("else hasData", hasData);
                      }
                    }}
                    className={`${
                      hasData ? "bg-slate-200" : ""
                    } border-b border-gray-200 dark:border-gray-700 table-list cursor-pointer`}
                  >
                    <td className="p-2 text-center">
                      <input
                        type="checkbox"
                        checked={hasData}
                        style={{ accentColor: "#0285ab" }}
                        data-checkbox={`check-${index}`}
                      />
                    </td>
                    <td className="p-2">
                      <div className="flex gap-4">
                        <img
                          src={product.image}
                          alt="Iamge"
                          width={50}
                          height={50}
                        />
                        <div className="w-full">
                          <div className="flex mb-3">
                            <h4> {product.title}</h4>
                            <span className="self-start border px-3 py-0 rounded-sm ml-3 text-slate-400">
                              {product.category}
                            </span>
                          </div>
                          <span className="text-slate-500">
                            {product.description}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-2">${product.price.toFixed(2)}</td>
                    <td className="p-2 text-center">
                      <Link
                        to={`/product/${product.id}`}
                        className="bg-primary hover:bg-primary-400 text-white px-3 py-1 rounded"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Product;
