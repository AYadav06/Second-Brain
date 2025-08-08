import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // if using shadcn/ui
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { StickyNotesDemo } from "./sticky-notes-demo";
// import { StickyNotesDemo } from "./stickyNotesDemo";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative flex overflow-hidden dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto flex flex-col-reverse gap-5 px-6 py-20 md:flex-row">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left max-h-80 mt-20"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-700 md:text-6xl">
              <span className="from-light-primary to-light-secondary bg-gradient-to-r bg-clip-text text-transparent">
                MindOS
              </span>{" "}
              — Turn chaos into clarity.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-300">
              Mind-OS is your personal knowledge engine. Effortlessly capture
              your thoughts,connect disparate ideas, and build a digital
              extension of your mind.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Button
                onClick={() => navigate("/signup")}
                size="lg"
                className="bg-light-secondary text-light-text shadow-lg hover:bg-white"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="">
          {/* Right Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-1 justify-center"
          >
            <StickyNotesDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
