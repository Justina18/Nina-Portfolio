import { blogProps } from "./blogDetails";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const BlogCard = ({ title, image, url, date, available, index }: blogProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: 0.1 * index,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="relative flex h-[430px] w-[100%] max-w-[400px] flex-col items-center justify-start rounded-2xl bg-[#212531]"
    >
      <div className="mt-4 h-[100%] w-[90%] lg:mt-5 lg:w-[92%]">
        <div className="h-[60%] w-full md:h-[56%]">
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded-lg bg-contain bg-center object-cover"
          />
        </div>

        <h3 className="mt-3 break-all uppercase leading-[1em] tracking-tight line-clamp-2">
          {title}
        </h3>
      </div>

      <div className="absolute bottom-0 mb-5 flex w-[90%] items-center justify-between text-[14px] font-bold text-[#95979D]">
        {available ? (
          <>
            <p>{date}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full"
              aria-label="Open Blog Post"
            >
              <ArrowRight className=" bg-[#0E1016] rounded-full w-[30px]" />
            </a>
          </>
        ) : (
          <>
            <p>Coming soon</p>
            <div className="mb-10 md:mb-14"></div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default BlogCard;
