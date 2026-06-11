import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product";

type Props = {
	product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
	return (
		<article className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
			<div className="h-48 bg-gray-100 flex-shrink-0">
				<img
					src={product.image}
					alt={product.title}
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="p-4 flex-1 flex flex-col">
				<span className="inline-block w-fit text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full mb-2">{product.category}</span>
				<h3 className="text-lg font-medium text-slate-900 mb-2">{product.title}</h3>
				<p className="text-sm text-slate-600 mb-3 line-clamp-3">{product.description}</p>
				<p className="text-xl font-bold text-emerald-500 mb-3">${product.price.toFixed(2)}</p>

				<div className="mt-auto">
					<Link
						to={`/products/${product.slug}`}
						className="inline-block w-full text-center px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md"
					>
						View details
					</Link>
				</div>
			</div>
		</article>
	);
};

export default ProductCard;
