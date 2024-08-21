import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        The Kindled Kettle
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
        <div>
          <b>Contact Us:</b><br />
          Phone: <a href="tel:+13374049710" style={{color: "#999999"}}>337.404.9710</a><br />
          Email: <a href="mailto:thekindledkettle@gmail.com?subject=Catering%20Request" style={{color: "#999999"}}>thekindledkettle@gmail.com</a><br />            
        </div>
      </div>
    </section>
  );
}
