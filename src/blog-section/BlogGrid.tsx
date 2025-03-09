import BlogCard from "./BlogCard";
import { blogDetails } from "./blogDetails";

const Blog = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center pt-20 md:pb-16 lg:pb-32">
      <header className="mb-6 flex flex-col items-center">
        <p className="flex max-w-[500px] pr-5 flex-col items-start text-left font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,10vw,100px)]">
          Blog
        </p>
        <p className="text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]">
        I write articles to solidify my understanding, share relatable content
        and rants, and connect other developers.
        </p>
      </header>
      <div className="lg:w- [850px] grid w-[90%] max-w-[1200px] grid-cols-1 grid-rows-3 place-content-center place-items-center gap-x-6 gap-y-6 sm:grid-rows-2 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-1">
        {blogDetails.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              image={blog.image}
              url={blog.url}
              date={blog.date}
              available={blog.available}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
