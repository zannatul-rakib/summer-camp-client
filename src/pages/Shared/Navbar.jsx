import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, useContext, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MyContext } from '../../provider/AuthProvider';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';
import Swal from 'sweetalert2';

const navigation = [
    { name: 'Home', href: '/', id: 1 },
    { name: 'Instructors', href: '/instructors', id: 2 },
    { name: 'Classes', href: '/classes', id: 3 },
    { name: 'Contact', href: '/contact', id: 4 },
    { name: 'Blog', href: '/blog', id: 5 },
];

function classNames(active, inactive) {
    return active ? active : inactive;
}

const Navbar = () => {
    const [cart] = useCart();

    const total = cart.reduce((sum, item) => sum + item.price, 0);


    const [activeItem, setActiveItem] = useState(1);


    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
    };

    const { isAdmin } = useAdmin();


    const { user, logOut } = useContext(MyContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                // console.log('user logout')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'user logout successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => console.log(error))
    }
    return (
        <Disclosure as="nav" className="bg-white sticky top-0 z-50">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex ml-12 md:ml-0 items-center">
                                <Link to="/" className="">Yoga Kids</Link>
                            </div>
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-[#15d5cc] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.id}
                                                to={item.href}
                                                onClick={() => handleItemClick(item.id)}
                                                className={classNames(
                                                    activeItem === item.id ? 'bg-[#15d5cc] text-white rounded-md px-3 py-2 text-sm font-medium' : 'hover:bg-[#2C75BA] hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {user?.displayName ?
                                    <>
                                        {
                                            isAdmin ? " " :
                                                <Menu as="div" className="relative ml-10">
                                                    <div>
                                                        <Menu.Button className="relative">
                                                            <span className='text-3xl'><AiOutlineShoppingCart /></span>
                                                            <span className='absolute text-sm rounded-full bg-[#15d5cc] h-5 w-5 text-white -top-2 -right-2'>{cart.length}</span>
                                                        </Menu.Button>
                                                    </div>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <Menu.Item>

                                                                <a
                                                                    href="#"
                                                                    className='bg-gray-100 block px-4 py-2 text-sm text-gray-700 hover:bg-[#15d5cc] hover:text-white'>
                                                                    Quantity: {cart.length}
                                                                </a>

                                                            </Menu.Item>
                                                            <Menu.Item>

                                                                <a
                                                                    href="#"
                                                                    className='bg-gray-100 block px-4 py-2 text-sm text-gray-700 hover:bg-[#15d5cc] hover:text-white'
                                                                >
                                                                    Total Price: ${total}
                                                                </a>
                                                            </Menu.Item>
                                                            <Menu.Item>

                                                                <Link to="/dashboard/cart">
                                                                    <button
                                                                        className='w-full btn bg-[#15d5cc] px-4 py-2 text-md text-white hover:bg-[#2C75BA] '
                                                                    >                                         View Cart
                                                                    </button>
                                                                </Link>

                                                            </Menu.Item>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                        }

                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    {
                                                        user?.photoURL ?
                                                            <img
                                                                className="h-8 w-8 rounded-full"
                                                                src={user?.photoURL}
                                                                alt=""
                                                            />
                                                            :
                                                            <img
                                                                className="h-8 w-8 rounded-full"
                                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                alt=""
                                                            />
                                                    }
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>

                                                        <Link

                                                            className='bg-gray-100 block px-4 py-2 text-sm text-gray-700 hover:bg-[#15d5cc] hover:text-white'
                                                        >
                                                            {user?.displayName}
                                                        </Link>

                                                    </Menu.Item>
                                                    <Menu.Item>

                                                        {
                                                            isAdmin ?
                                                                <Link
                                                                    to="/dashboard/admin-home"
                                                                    className='bg-gray-100 block px-4 py-2 text-sm text-gray-700 hover:bg-[#15d5cc] hover:text-white'
                                                                >
                                                                    Dashboard
                                                                </Link>
                                                                :
                                                                <Link
                                                                    to="/dashboard/user-home"
                                                                    className='bg-gray-100 block px-4 py-2 text-sm text-gray-700 hover:bg-[#15d5cc] hover:text-white'
                                                                >
                                                                    Dashboard
                                                                </Link>
                                                        }
                                                    </Menu.Item>
                                                    <Menu.Item>

                                                        <a onClick={handleSignOut}
                                                            href="#"
                                                            className='bg-gray-100 block px-4 py-2 text-sm text-gray-700 hover:bg-[#15d5cc] hover:text-white'
                                                        >
                                                            Sign out
                                                        </a>

                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </>
                                    :


                                    <>
                                        <Link
                                            to="/signin"
                                            className="relative p-1  hover:text-[#2C75BA]">
                                            <span>SignIn</span>
                                        </Link>
                                        <span>/</span>
                                        <Link
                                            to="/signup"
                                            className="relative p-1  hover:text-[#2C75BA]">
                                            <span>SignUp</span>
                                        </Link>
                                    </>
                                }
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;