import { Send } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

const Contact = () => {
  return (
    <section className="mb-auto">
      <div className="grid grid-cols-1 gap-8 px-5 mx-auto bg-transparent rounded-sm py-9 md:grid-cols-2 text-pale-gray sm:max-w-5xl">
        <div className="flex flex-col justify-center gap-8">
          <div className="mt-4 text-center">
            <img
              src="/images/vector-art.png"
              alt="vector art drawing of person in front of mountains"
              className="z-10 w-full max-w-lg mx-auto rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="mt-8 text-xl font-medium text-very-light-pink">
              Hate forms? Send me an{" "}
              <a
                className="font-bold underline text-pale-gray"
                href="mailto:tigran.farmanyan@gmail.com"
              >
                email
              </a>
              &nbsp;instead.
            </div>
          </div>
        </div>
        <form>
          <div>
            <span className="text-sm font-bold uppercase text-pale-gray">
              Full Name
            </span>
            <input
              className="w-full p-3 mt-2 rounded-lg bg-very-light-pink text-charcoal-gray focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-black"
              type="text"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-pale-gray">
              Email
            </span>
            <input
              className="w-full p-3 mt-2 rounded-lg bg-very-light-pink text-charcoal-gray focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-black"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-pale-gray">
              Phone Number
            </span>
            <input
              className="w-full p-3 mt-2 rounded-lg bg-very-light-pink text-charcoal-gray focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-black"
              type="phone"
              placeholder="Enter your Phone Number including country code"
              required
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-pale-gray">
              Message
            </span>
            <textarea
              className="w-full h-32 p-3 mt-2 rounded-lg bg-very-light-pink text-charcoal-gray focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-black"
              placeholder="Enter your Message"
              required
            ></textarea>
          </div>
          <div className="mx-auto mt-8">
            <Button
              onClick={() => {}}
              sx={{
                minWidth: "100%",
                minHeight: { sm: 66, xs: 40 },
                height: "9vh",
                transition: "0.333s cubic-bezier(.45,1.64,.41,.88)",
                background:
                  "linear-gradient(to right bottom, hsl(310, 6%, 29%), hsl(194, 25%, 18%))",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0px 4px 60px 16px hsl(194, 28%, 16%, 0.5)",
                },
                borderRadius: 2,
                boxShadow: "0px 4px 12px 6px hsl(194, 28%, 16%, 0.5)",
              }}
              startIcon={<Send fontSize="large" className="text-silver" />}
            >
              <Typography
                color={"ButtonHighlight"}
                fontWeight={"bold"}
                variant="h5"
              >
                Send Message
              </Typography>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
