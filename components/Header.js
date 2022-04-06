import { MailIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="flex justify-between items-center p-5">
        <div>
          <motion.div
            initial={{
              x: "-100vw",
            }}
            animate={{
              x: 0,
            }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-white text-3xl"
          >
            李柏穎
          </motion.div>
          <div className="flex">
            <motion.div
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                rotate: 360,
              }}
              transition={{ delay: 0.1, duration: 1 }}
            >
              <MailIcon className="w-10 h-10 mr-3 text-white" />
            </motion.div>
            <motion.p
              initial={{
                y: 100,
              }}
              animate={{
                y: 0,
              }}
              transition={{ delay: 0.1, duration: 1 }}
              className="text-white text-3xl"
            >
              jackie1234567839@gmail.com
            </motion.p>
          </div>
        </div>


          <motion.div
            initial={{
              x: `100vw`,
            }}
            animate={{
              x: 0,
            }}
            transition={{ delay: 0.1, duration: 1 }}
            whileHover={{ scale: 1.5 }}
            className="hidden md:block avatar placeholder "
          >
            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
              <span className="text-xl">李柏穎</span>
            </div>
          </motion.div>

      </div>
    </div>
  );
};

export default Header;
