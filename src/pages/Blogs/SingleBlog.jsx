

const SingleBlog = ({ blog }) => {
    const { title, img, content } = blog;
    return (
        <div className="max-w-lg mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <a href="#">
                    <img className="rounded-t-lg h-[250px] object-cover w-full" src={img} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
                    </a>
                    <p className="font-normal text-gray-700 mb-3">{content.slice(0, 200)}...</p>
                    <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                        Read more
                    </a>
                </div>
            </div>

        </div>
    );
};

export default SingleBlog;