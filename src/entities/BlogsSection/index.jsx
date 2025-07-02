import { Calendar, ArrowRight } from 'lucide-react';
import { blogs } from '../../shared/constants/Blogs';

export default function BlogsSection() {
  return (
    <div className="page-width flex flex-col mt-24 py-16 h-full" id="blogs">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-900 text-[24px] lg:text-[40px] font-montserrat font-bold">
            Latest Marketing Articles
          </h1>
          <p className="text-gray-900 text-[14px] lg:text-[16px] font-nunito">
            Stay updated with our most recent insights
          </p>
        </div>
        <button className="bg-[#262626] text-white px-4 py-2 rounded-lg font-montserrat font-bold">
          View All
        </button>
      </div>
      <div className="flex gap-8 mt-12">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="bg-[#262626] rounded-lg flex flex-col gap-6"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="px-[24px] flex flex-col gap-2 flex-grow">
              <div className="flex items-center gap-1 text-[#bcbcbc] text-[14px] font-nunito">
                <Calendar className="w-4 h-4" />
                <span>{blog.createdAt}</span>
              </div>
              <h2 className="mb-2 line-clamp-2 font-montserrat font-semibold sm:text-lg text-white">
                {blog.title}
              </h2>
              <p className="text-[#bcbcbc] line-clamp-2 text-[14px] font-nunito">
                {blog.description}
              </p>
            </div>
            <a
              href={blog.link}
              className="w-full justify-center text-white px-4 py-2 rounded-lg font-montserrat font-bold flex items-center gap-2 mb-4"
            >
              Read More <ArrowRight />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
