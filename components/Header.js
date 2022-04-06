import { MailIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="flex justify-between items-center p-5 max-w-5xl mx-auto">
        <div>
          <motion.div
            initial={{
              x: "-100vw",
            }}
            animate={{
              x: 0,
            }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-white text-xl sm:text-3xl"
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
              <MailIcon className="w-6 h-6 mr-1 text-white" />
            </motion.div>
            <motion.p
              initial={{
                y: 100,
              }}
              animate={{
                y: 0,
              }}
              transition={{ delay: 0.1, duration: 1 }}
              className="text-white "
            >
              jackie1234567839@gmail.com
            </motion.p>
          </div>
        </div>

        <div className="avatar placeholder">
          <motion.div
            initial={{
              x: `100vw`,
            }}
            animate={{
              x: 0,
            }}
            transition={{ delay: 0.1, duration: 1 }}
            whileHover={{ scale: 1.5 }}
            className="bg-neutral-focus text-neutral-content rounded-full w-12"
          >
            <span className="text-xs">李柏穎</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
