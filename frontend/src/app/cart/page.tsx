'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store/store';
import { removeFromCart, updateQuantity } from '@/app/store/cartSlice';
import Image from 'next/image';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link'
import Footer from '@/components/Footer';
import Foot from '@/components/Foot';
import { MdDeleteSweep } from "react-icons/md";
import Topbar from '@/components/Topbar';

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const totalPrice = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return sum + price * item.quantity;
    }, 0);
    setTotal(totalPrice);
  };

  return (
    <div className="">
      <Topbar/>
      <Navbar/>
      <div className='flex mt-[2em] mx-[4em] mb-[6em]'>
        <h1 className='text-gray-500'><Link href='/'>Home  /</Link></h1>
        <Link href='/cart' className='text-black pl-6'>Cart</Link>
      </div>
      <div className='flex items-center justify-between mx-[4em] shadow-xs shadow-gray-300 p-4 rounded-md mb-9'>
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Subtotal</h1>
      </div>

      {cartItems.length === 0 ? (
        <p className='text-2xl mx-[4em] my-[4em] self-center font-semibold'>Your cart is empty.</p>
      ) : (
        <div className="space-y-9">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between shadow-xs shadow-gray-300 p-4 rounded-md mx-[4em]"
            >
              <div className="flex items-center gap-4">
                <Image src={item.image} alt={item.name} width={80} height={80} />
                <h2 className="font-semibold">{item.name}</h2>
              </div>
   
                <p>{item.price}</p>
                
              
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={e =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: parseInt(e.target.value, 10),
                      })
                    )
                  }
                  className="w-16 border p-1 rounded"
                />
                <button
                  className="text-black"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <MdDeleteSweep />
                </button>
              
            </div>
          ))}

          <div className="text-right mt-6 mx-[4em]">
            <button
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
              onClick={calculateTotal}
            >
              Update Cart
            </button>
            <p className="mt-4 text-lg font-bold">
              Total: <span className="text-green-600">${total.toFixed(2)}</span>
            </p>
          </div>
        </div>
      )}
      <div className='flex border-2 border-black p-6 right-[4em]'>
        <div className='flex items-center justify-between mb-4'>
          <p className='text-2xl'>Cart Total</p>
          <div>
            <h1>SubTotal:</h1>
          </div>
          <div>
            <h1 className='text-xl font-semibold text-black'>${total.toFixed(2)}</h1>
          </div>
        </div>
        <hr />
        
      </div>
      <Footer/>
      <hr className='text-gray-500 w-full'/>
      <Foot/>
    </div>
  );
};

export default CartPage;
