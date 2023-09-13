type Product = {
    id: number;
    title: string;
    price: number;

}

async function getProducts(){
    const res = await fetch('http://localhost:5000/products', {
        cache: "no-store",
    });
    return res.json();
}

export default async function ProducrList() {
    const products: Product[] = await getProducts();
  return (
    <div className="py-10 px-10">
        <table className="table w-full">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Products name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {products.map((product, index) => (
                <tr key={product.id}>
                    <td>{index+1} </td>
                    <td>{product.title} </td>
                    <td>{product.price} </td>
                    <td></td>
                    
                </tr>
            ))}
            </tbody>
        </table>

    </div>
  )
}