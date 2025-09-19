import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { formatPrice } from "../../utils/format";

export default function Cart() {
  const {
    isOpen,
    closeCart,
    items,
    removeItem,
    updateQuantity,
    totalPrice,
    clearCart,
  } = useCart();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity animate-fade-in" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md animate-slide-in-right">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl rounded-l-3xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between mb-2">
                        <Dialog.Title className="text-xl font-bold text-[#274C5B] animate-fade-in">
                          Shopping cart{" "}
                          <span className="text-base text-gray-400">
                            ({items.length})
                          </span>
                        </Dialog.Title>
                        <button
                          type="button"
                          className="relative -m-2 p-2 text-gray-400 hover:text-primary hover:bg-gray-100 rounded-full transition"
                          onClick={closeCart}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                        </button>
                      </div>

                      <div className="mt-8 stagger-children">
                        {items.length === 0 ? (
                          <div className="text-center py-12 animate-fade-in">
                            <p className="text-gray-500">Your cart is empty</p>
                            <Link
                              to="/shop"
                              className="mt-4 inline-block text-sm font-medium text-[#274C5B] hover:text-green-600 hover-lift"
                              onClick={closeCart}
                            >
                              Continue Shopping
                            </Link>
                          </div>
                        ) : (
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {items.map((item) => (
                                <li
                                  key={item.id}
                                  className="flex py-6 hover:shadow-md hover:scale-[1.01] transition rounded-xl bg-white"
                                >
                                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
                                    <img
                                      src={item.imageUrl}
                                      alt={item.name}
                                      className="h-full w-full object-cover object-center transition-transform hover:scale-110"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between items-center text-base font-semibold text-[#274C5B]">
                                        <h3 className="text-lg">
                                          <Link
                                            to={`/product/${item.slug}`}
                                            onClick={closeCart}
                                            className="hover:text-green-600 transition-colors"
                                          >
                                            {item.name}
                                          </Link>
                                        </h3>
                                        <p className="ml-4 text-primary font-bold text-lg">
                                          {formatPrice(
                                            item.price * item.quantity
                                          )}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm mt-2">
                                      <div className="flex items-center gap-2">
                                        <button
                                          onClick={() =>
                                            updateQuantity(
                                              item.id,
                                              item.quantity - 1
                                            )
                                          }
                                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-xl font-bold text-primary hover:bg-gray-200 transition"
                                        >
                                          -
                                        </button>
                                        <span className="text-gray-700 font-semibold px-2">
                                          {item.quantity}
                                        </span>
                                        <button
                                          onClick={() =>
                                            updateQuantity(
                                              item.id,
                                              item.quantity + 1
                                            )
                                          }
                                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-xl font-bold text-primary hover:bg-gray-200 transition"
                                        >
                                          +
                                        </button>
                                      </div>

                                      <button
                                        type="button"
                                        onClick={() => removeItem(item.id)}
                                        className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-700 transition"
                                      >
                                        <TrashIcon className="h-5 w-5" />
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {items.length > 0 && (
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6 animate-fade-in">
                        <div className="flex justify-between text-lg font-bold text-[#274C5B]">
                          <p>Subtotal</p>
                          <p>{formatPrice(totalPrice)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <Link
                            to="/cart"
                            className="flex items-center justify-center rounded-xl border border-transparent bg-[#274C5B] px-6 py-3 text-base font-semibold text-white shadow hover:bg-green-600 hover-lift transition-all"
                            onClick={closeCart}
                          >
                            Checkout
                          </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <button
                            type="button"
                            className="font-medium text-[#274C5B] hover:text-green-600 hover-scale"
                            onClick={() => {
                              clearCart();
                              closeCart();
                            }}
                          >
                            Clear Cart
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
