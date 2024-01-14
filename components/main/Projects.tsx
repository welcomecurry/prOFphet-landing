import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Image from "next/image";


const Projects = () => {
  return (
<div>
<div className="relative items-center w-full px-5 mb-32 mx-auto md:px-12 lg:px-20 max-w-7xl">
    <div className="flex w-full pb-4">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white">
            Testimonials
        </div>
    </div>
    <h1 className="h2 font-semibold max-w-5xl text-3xl lg:text-5xl text-left text-white">
        740+ OnlyFans creators are using prOFphet to boost their fan interactions.
    </h1>
    <div className="text-xl max-w-3xl text-left py-4 pb-14" style={{color: "#34f5c5"}}>
        <p>See what OnlyFans creators are saying:</p>
    </div>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-slate-100 sm:align-middle sm:p-8 rounded-2xl">
            <div className="flex w-full mb-4">
                <div className="overflow-hidden">
                    <img alt="testimonial" loading="lazy" width="300" height="300" decoding="async" data-nimg="1"
                    src="https://ofansai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ft4.a55817d3.png&w=384&q=75"
                        className="inline-block object-cover rounded-full h-12 w-12"
                        style={{color: "transparent;"}}/>
                </div>
                <div className="flex-grow pl-3 flex items-center">
                    <h6 className="text-lg font-medium leading-6 text-black">Ashley K.</h6>
                </div>
            </div>
            <div className="w-full">
                <p className="text-base text-gray-500">Damn don&apos;t tell my fans! This is crazy! Love it ❤️ Saves me so much time!</p>
            </div>
        </div>
        <div className="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-slate-100 sm:align-middle sm:p-8 rounded-2xl">
            <div className="flex w-full mb-4">
                <div className="overflow-hidden">
                    <img alt="testimonial" loading="lazy" width="300" height="300" decoding="async" data-nimg="1"
                        className="inline-block object-cover rounded-full h-12 w-12"
                        src="https://ofansai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ft7.6d7f448c.png&w=384&q=75"
                        style={{color: "transparent;"}}/>
                </div>
                <div className="flex-grow pl-3 flex items-center">
                    <h6 className="text-lg font-medium leading-6 text-black">Destiny S.</h6>
                </div>
            </div>
            <div className="w-full">
                <p className="text-base text-gray-500">Wow! These message can get spicy. I didn&apos;t know I could get so creative ;) This is great!</p>
            </div>
        </div>
        <div className="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-slate-100 sm:align-middle sm:p-8 rounded-2xl">
            <div className="flex w-full mb-4">
                <div className="overflow-hidden">
                    <img alt="testimonial" loading="lazy" width="300" height="300" decoding="async" data-nimg="1"
                        className="inline-block object-cover rounded-full h-12 w-12"
                        src="https://ofansai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ft5.4048c0a7.png&w=384&q=75"
                        style={{color: "transparent;"}}/>
                </div>
                <div className="flex-grow pl-3 flex items-center">
                    <h6 className="text-lg font-medium leading-6 text-black">Samantha G.</h6>
                </div>
            </div>
            <div className="w-full">
                <p className="text-base text-gray-500">It certainly makes chatting faster and gives ideas on what to write next. So it kinda inspires you to write responses you wouldn’t have thought about. it’s already a great helping hand🙏 </p>
            </div>
        </div>
    </div>
</div>

</div>
  );
};

export default Projects;
