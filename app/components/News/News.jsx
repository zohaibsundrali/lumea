import React from "react";
import Image from "next/image";
import { Calendar, MessageCircle } from "lucide-react";
const News = () => {
    const newsData = [
  {
    id: 1,
    title: "News Title One",
    date: "Aug 20, 2025",
    comments: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eros eu nisi viverra luctus.",
    image:
      "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg",
  },
  {
    id: 2,
    title: "News Title Two",
    date: "Aug 18, 2025",
    comments: 12,
    description:
      "Curabitur sit amet dui eu urna pretium pharetra. Fusce vitae luctus massa, ac cursus ex.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  },
  {
    id: 3,
    title: "News Title Three",
    date: "Aug 15, 2025",
    comments: 8,
    description:
      "Aliquam erat volutpat. Integer finibus magna nec nibh luctus, nec ultricies magna vehicula.",
    image:
      "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
  },
];

  return (
    <div className="w-full">
      <div className="w-[60%] mx-auto py-15">
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-[30px] font-semibold">Latest News</h1>
          <div className="w-[90px] h-[3px] bg-[#d9326f] my-3 mx-auto"></div>
          <p className="text-center w-[70%] mx-auto pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            laboriosam quisquam, nobis suscipit placeat accusamus. Odit odio
            enim repudiandae maiores?
          </p>
        </div>

        {/* Team Cards */}
        <div className="w-full mx-auto flex gap-x-6">
      {newsData.map((news) => (
        <div
          key={news.id}
          className="w-full h-full bg-white rounded-lg shadow-md group cursor-pointer overflow-hidden"
        >
          {/* Image */}
          <div className="w-full h-[200px] relative">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-4">
            {/* Heading */}
            <h2 className="text-xl font-semibold mb-2">{news.title}</h2>

            {/* Date & Comments with icons */}
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span className="flex items-center gap-1">
                <Calendar size={16} className="text-[#d9329d]" />
                {news.date}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle size={16} className="text-[#d9329d]" />
                {news.comments} Comments
              </span>
            </div>

            {/* Small Para */}
            <p className="text-gray-600 mb-4">{news.description}</p>
          </div>

          {/* Bottom Line */}
          <div className="h-[3px] w-full bg-[#d9329d] group-hover:bg-[#d9326f] transition-colors duration-300"></div>
        </div>
      ))}
    </div>





      </div>
    </div>
  );
};

export default News;
