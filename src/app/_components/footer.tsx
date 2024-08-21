import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <div>
              <b>Contact Us:</b><br />
              Phone: <a href="tel:+13374049710" style={{color: "rgb(229,231,235)"}}>337.404.9710</a><br />
              Email: <a href="mailto:thekindledkettle@gmail.com?subject=Catering%20Request" style={{color: "rgb(229,231,235)"}}>thekindledkettle@gmail.com</a><br />
              
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
